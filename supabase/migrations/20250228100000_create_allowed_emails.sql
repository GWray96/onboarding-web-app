-- Allowlist for paying clients who can request magic links
create table public.allowed_emails (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  active boolean not null default true
);

alter table public.allowed_emails enable row level security;

-- Function that returns TRUE/FALSE if an email is allowed (no table exposure)
create or replace function public.is_email_allowed(p_email text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(
    select 1
    from public.allowed_emails
    where lower(email) = lower(p_email)
      and active = true
  );
$$;

grant execute on function public.is_email_allowed(text) to anon, authenticated;
