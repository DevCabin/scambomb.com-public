# ScamBomb Campaign Signup Process

This document describes the current partner-member signup workflow. The retired GoHighLevel lead-capture workflow is no longer part of the campaign process.

## Dynamic member page

Each credit-union campaign can use the base route or the same route with an optional location slug:

```text
https://scambomb.com/member-signup/{location-slug}
```

Example: `https://scambomb.com/member-signup/kilgore-credit-union`

The route is dynamic. Do not create a new page component for each institution. If present, the location slug is passed through to analytics and the app API. If omitted, the required member code provides campaign attribution in Stripe and the account record.

## What the member sees

The page intentionally stays generic and displays only:

- Member Signup heading
- First name
- Email address
- Date of birth
- Password and confirmation
- A prominent member-code field

The page does not visibly display the institution name. The QR code or link identifies the campaign by its URL slug.

## Submission sequence

1. The member submits the form.
2. The public site sends the account fields, `partnerLocation`, and `memberCode` to `https://app.scambomb.com/api/auth/register`.
3. The app normalizes the slug/code and checks Stripe for an active promotion code backed by a 100% off coupon.
4. If validation succeeds, the app creates the account and returns a JWT. If it fails, no account is created.
5. The public site sends the JWT to `/api/stripe/checkout` with the monthly plan, location, and code.
6. Stripe Checkout opens with the sponsored promotion applied.
7. The Stripe webhook marks the account premium and preserves the location/code in user metadata and payment history.

## Launching a new location

1. Create or activate the location’s Stripe promotion code.
2. Attach that promotion code to a 100% off Stripe coupon.
3. Choose a stable lowercase slug using only letters, numbers, and hyphens.
4. Create the campaign URL using that slug, or use the base `/member-signup` URL.
5. Generate and distribute the QR code.
6. Test the complete flow in Stripe test mode before distributing the link.

No application code change or deployment is needed for a new location.

## Analytics and reporting

The public page tracks `member_signup_started`, `member_signup_completed`, and `member_checkout_started`. Each event includes the location slug.

The app also stores `partner_location`, `partner_code`, `partner_signup_at`, and `signup_source` on the account, and copies campaign metadata into the Stripe checkout session and payment history. The primary campaign KPI is completed member signup by location. Stripe provides the authoritative record of sponsored checkout completion.

## Troubleshooting checklist

- Confirm the URL slug contains only lowercase letters, numbers, and hyphens.
- Confirm the Stripe promotion code is active and attached to a 100% off coupon.
- Confirm the app’s live `STRIPE_SECRET_KEY` can read the promotion code.
- Confirm the app’s Stripe webhook is receiving `checkout.session.completed`.
- Check browser analytics for the location-specific events.
- Check the user record and payment history for partner attribution.
