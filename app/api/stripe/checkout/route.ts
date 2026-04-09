import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

type Plan = 'standard' | 'senior';
type Billing = 'monthly' | 'annual';

function isPlan(value: string | null): value is Plan {
  return value === 'standard' || value === 'senior';
}

function isBilling(value: string | null): value is Billing {
  return value === 'monthly' || value === 'annual';
}

function getPriceId(plan: Plan, billing: Billing): string | undefined {
  if (plan === 'standard') {
    return billing === 'monthly' ? process.env.STRIPE_PRICE_ID : process.env.STRIPE_ANNUAL_PRICE_ID;
  }
  if (plan === 'senior') {
    return billing === 'monthly' ? process.env.STRIPE_SENIOR_PRICE_ID : process.env.STRIPE_ANNUAL_SENIOR_PRICE_ID;
  }
  return undefined;
}

export async function GET(request: NextRequest) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return NextResponse.json(
        { error: 'Internal Server Error: Missing STRIPE_SECRET_KEY' },
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

    const priceId = getPriceId(planParam, billingParam);
    if (!priceId) {
      return NextResponse.json(
        { error: `Missing price ID for ${planParam} ${billingParam}` },
        { status: 500 }
      );
    }

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
