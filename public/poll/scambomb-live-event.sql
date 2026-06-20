-- Ready-to-paste setup for the ScamBomb live presentation poll
-- Run this in Supabase SQL Editor after schema.sql
-- Safe to re-run: it deletes the existing SCAMBOMB-LIVE event first,
-- which cascades to its questions and responses.

begin;

delete from events
where code = 'SCAMBOMB-LIVE';

with new_event as (
  insert into events (code, active_question_id)
  values ('SCAMBOMB-LIVE', null)
  returning id
)
insert into questions (event_id, prompt, options, sort_order, revealed)
select
  new_event.id,
  payload.prompt,
  payload.options,
  payload.sort_order,
  false
from new_event
cross join (
  values
    (
      'Have you ever gotten a call, text, or email that felt off — but you were not 100% sure if it was a scam?',
      '["Yes, more than once", "Yes, once", "No, never"]'::jsonb,
      0
    ),
    (
      'What percent of scam calls use a fake number that looks local — even though the caller is not?',
      '["50%", "70%", "90%"]'::jsonb,
      1
    ),
    (
      'True or False — If your caller ID shows your bank''s real name, it is safe to trust the call.',
      '["True", "False"]'::jsonb,
      2
    ),
    (
      'If you got a text saying your grandchild was arrested and needed bail money right now, what would you do first?',
      '["Call the number in the text", "Call my grandchild or another family member directly", "Send money to be safe", "Not sure"]'::jsonb,
      3
    ),
    (
      'On a scale of 1–5, how confident are you that you''d catch a scam before it cost you money?',
      '["1", "2", "3", "4", "5"]'::jsonb,
      4
    )
) as payload(prompt, options, sort_order);

commit;

-- URLs:
-- Vote:     https://scambomb.com/poll/event/SCAMBOMB-LIVE
-- Results:  https://scambomb.com/poll/event/SCAMBOMB-LIVE/results
-- Control:  https://scambomb.com/poll/event/SCAMBOMB-LIVE/control
