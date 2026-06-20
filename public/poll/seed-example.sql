-- Sample event data for testing
-- Run this in Supabase SQL Editor after running schema.sql
-- ScamBomb Live Presentation question set

-- Create an event (returns the event ID)
insert into events (code, active_question_id) 
values ('SCAMBOMB-LIVE', null)
returning id;

-- Note: After running the above, replace EVENT_ID below with the actual UUID returned

-- Create questions for the event
-- Replace EVENT_ID with the actual UUID from the events insert above

insert into questions (event_id, prompt, options, sort_order, revealed) values
(
  'EVENT_ID', -- Replace this!
  'Have you ever gotten a call, text, or email that felt off — but you were not 100% sure if it was a scam?',
  '["Yes, more than once", "Yes, once", "No, never"]'::jsonb,
  0,
  false
),
(
  'EVENT_ID', -- Replace this!
  'What percent of scam calls use a fake number that looks local — even though the caller is not?',
  '["50%", "70%", "90%"]'::jsonb,
  1,
  false
),
(
  'EVENT_ID', -- Replace this!
  'True or False — If your caller ID shows your bank''s real name, it is safe to trust the call.',
  '["True", "False"]'::jsonb,
  2,
  false
),
(
  'EVENT_ID', -- Replace this!
  'If you got a text saying your grandchild was arrested and needed bail money right now, what would you do first?',
  '["Call the number in the text", "Call my grandchild or another family member directly", "Send money to be safe", "Not sure"]'::jsonb,
  3,
  false
),
(
  'EVENT_ID', -- Replace this!
  'On a scale of 1–5, how confident are you that you''d catch a scam before it cost you money?',
  '["1", "2", "3", "4", "5"]'::jsonb,
  4,
  false
);

-- To use this seed data:
-- 1. Run schema.sql first
-- 2. Run the events insert above and note the UUID returned
-- 3. Replace EVENT_ID in the questions insert with that UUID
-- 4. Run the questions insert
--
-- Trivia answers are not stored in the current schema.
-- Keep the presenter-facing answer key in poll-question-notes.md.

-- URLs for testing:
-- Vote:     https://scambomb.com/poll/event/SCAMBOMB-LIVE
-- Results:  https://scambomb.com/poll/event/SCAMBOMB-LIVE/results
-- Control:  https://scambomb.com/poll/event/SCAMBOMB-LIVE/control
