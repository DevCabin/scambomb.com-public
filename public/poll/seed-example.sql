-- Sample event data for testing
-- Run this in Supabase SQL Editor after running schema.sql

-- Create an event (returns the event ID)
insert into events (code, active_question_id) 
values ('WORKSHOP-JUNE', null)
returning id;

-- Note: After running the above, replace EVENT_ID below with the actual UUID returned

-- Create questions for the event
-- Replace EVENT_ID with the actual UUID from the events insert above

insert into questions (event_id, prompt, options, sort_order, revealed) values
(
  'EVENT_ID', -- Replace this!
  'What percentage of adults 50+ are using AI tools?',
  '["25%", "55%", "75%", "90%"]'::jsonb,
  0,
  false
),
(
  'EVENT_ID', -- Replace this!
  'Which AI scam are you most concerned about?',
  '["Voice cloning", "Deepfake videos", "Fake emails", "Chatbot scams"]'::jsonb,
  1,
  false
);

-- To use this seed data:
-- 1. Run schema.sql first
-- 2. Run the events insert above and note the UUID returned
-- 3. Replace EVENT_ID in the questions insert with that UUID
-- 4. Run the questions insert

-- URLs for testing:
-- Vote:     https://scambomb.com/poll/event/WORKSHOP-JUNE
-- Results:  https://scambomb.com/poll/event/WORKSHOP-JUNE/results
-- Control:  https://scambomb.com/poll/event/WORKSHOP-JUNE/control