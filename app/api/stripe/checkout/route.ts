import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

const PRICE_MAP = {
  standard: {
    monthly: 'price_1TGpxlAW2QCrL2OX6GDy4uNJ',
    annual: 'price_1TGqRxAW2QCrL2OXzKhwWFjd',
  },
  senior: {
    monthly: 'price_1SPtfHAW2QCrL2OXAKcsiYpn',
    annual: 'price_1SSltcAW2QCrL2OXtCse3sHN',
  },
} as const;

type Plan = keyof typeof PRICE_MAP;
type Billing = keyof typeof PRICE_MAP.standard;

function isPlan(value: string | null): value is Plan {
  return value === 'standard' || value === 'senior';
}

function isBilling(value: string | null): value is Billing {
  return value === 'monthly' || value === 'annual';
}

export async function GET(request: NextRequest) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return NextResponse.json(
        {
          error: 'Missing STRIPE_SECRET_KEY',
          checked: ['STRIPE_SECRET_KEY'],
          hint: 'Verify this env var exists on the deployed project/environment and redeploy.',
        },
        { status: 500 }
      );
    }

    const planParam = request.nextUrl.searchParams.get('plan');
    const billingParam = request.nextUrl.searchParams.get('billing');

    if (!isPlan(planParam) || !isBilling(billingParam)) {
      return NextResponse.json(
        { error: 'Invalid checkout params. Use plan=standard|senior and billing=monthly|annual.' },
        { status: 400 }
      );
    }

    const priceId = PRICE_MAP[planParam][billingParam];
    const stripe = new Stripe(stripeSecret);
    const origin = request.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      allow_promotion_codes: true,
      metadata: {
        source: 'scambomb-homepage-pricing',
        plan: planParam,
        billing: billingParam,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Failed to create checkout URL' }, { status: 500 });
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error('Stripe checkout route error:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
