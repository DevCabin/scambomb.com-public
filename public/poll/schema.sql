-- ScamBomb Live Poll Schema
-- Run this in the Supabase SQL Editor

-- Events table
create table events (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  active_question_id uuid,
  created_at timestamptz default now()
);

-- Questions table
create table questions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  prompt text not null,
  options jsonb not null, -- array of strings, e.g. ["Option A", "Option B"]
  sort_order int not null default 0,
  revealed boolean not null default false
);

-- Responses table
create table responses (
  id uuid primary key default gen_random_uuid(),
  question_id uuid references questions(id) on delete cascade,
  option_index int not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table events enable row level security;
alter table questions enable row level security;
alter table responses enable row level security;

-- Public, permissive policies (no auth, anyone can read/write)
-- This is intentional for this lightweight throwaway tool
create policy "public read events" on events for select using (true);
create policy "public read questions" on questions for select using (true);
create policy "public update questions" on questions for update using (true);
create policy "public read responses" on responses for select using (true);
create policy "public insert responses" on responses for insert with check (true);
create policy "public update events" on events for update using (true);

-- Enable Realtime replication
-- Note: Also enable these tables in Supabase Dashboard > Database > Replication
alter publication supabase_realtime add table events;
alter publication supabase_realtime add table questions;
alter publication supabase_realtime add table responses;