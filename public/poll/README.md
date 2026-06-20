# ScamBomb Live Poll

A lightweight live polling web app for in-person presentations. Attendees scan a QR code, vote on their phone, and results appear live on a projector screen.

## Features

- **Attendee Voting Page** (`/event/:code`) - Mobile-optimized with large touch targets for senior audiences
- **Results Display** (`/event/:code/results`) - Projector-optimized live bar chart
- **Presenter Controls** (`/event/:code/control`) - Manage questions and reveal results

## Tech Stack

- Vite + React (JavaScript)
- React Router
- Supabase (Postgres + Realtime)
- Plain CSS (ScamBomb brand styling)

## Setup

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the **SQL Editor**
3. Run the contents of `schema.sql`
4. Enable Realtime: Go to **Database** → **Replication** → toggle on `events`, `questions`, and `responses` tables
5. For the fastest setup, run `scambomb-live-event.sql` to create the current ScamBomb live presentation event in one paste
6. If you want a template you can customize manually, use `seed-example.sql`

### 2. Local Development

```bash
cd public/poll
npm install

# Create .env file
cp .env.example .env

# Add your Supabase credentials to .env:
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key

npm run dev
```

The app will be available at `http://localhost:5173/poll/event/SCAMBOMB-LIVE`

### 3. URLs

For an event code like `SCAMBOMB-LIVE`:

| Page | URL |
|------|-----|
| Attendee Vote | `/poll/event/SCAMBOMB-LIVE` |
| Projector Results | `/poll/event/SCAMBOMB-LIVE/results` |
| Presenter Control | `/poll/event/SCAMBOMB-LIVE/control` |

### 4. Deploy to Vercel

The poll app is built as a static site and served from the main ScamBomb Next.js app.

```bash
cd public/poll
npm install
npm run build
```

This creates `public/poll/dist/` with the built files.

**Vercel Environment Variables:**
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

**Note:** The Next.js app in the parent directory handles routing via a rewrite rule (see `next.config.js`).

## Creating Events

No admin UI - use Supabase SQL Editor directly:

```sql
-- Create event
insert into events (code, active_question_id) 
values ('YOUR-EVENT-CODE', null)
returning id;

-- Create questions (replace EVENT_ID with the UUID from above)
insert into questions (event_id, prompt, options, sort_order, revealed) values
(
  'EVENT_ID',
  'Your question here?',
  '["Option 1", "Option 2", "Option 3"]'::jsonb,
  0,
  false
);
```

For the current live deck:

- use `scambomb-live-event.sql` for a one-paste setup
- use `seed-example.sql` if you want the editable two-step template
- keep presenter answer/source notes in `poll-question-notes.md`

## Usage Flow

1. **Before presentation:** Create event and questions in Supabase
2. **During presentation:** 
   - Display QR code linking to `/poll/event/CODE`
   - Use **Control page** on your phone/laptop to activate questions
   - Show **Results page** on projector
3. **Voting:** Attendees scan QR, vote on their phones
4. **Reveal:** Click "Reveal Results" on Control page to show bar chart

## Notes

- No authentication - this is a lightweight, throwaway-per-event tool
- Real-time updates via Supabase subscriptions
- Refresh-and-revote is an accepted limitation (no IP/session tracking)
- Designed for senior audiences: large text, high contrast, simple UI
