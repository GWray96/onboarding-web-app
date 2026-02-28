-- Create onboarding submissions table
create table public.onboarding_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_data jsonb not null
);

-- Enable Row Level Security
alter table public.onboarding_submissions enable row level security;

-- Allow inserts from anonymous users (for public form)
create policy "Allow public inserts"
  on public.onboarding_submissions
  for insert
  with check (true);

-- Block public reads (data visible only via Supabase dashboard / service role)
create policy "Block public reads"
  on public.onboarding_submissions
  for select
  using (false);
