import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const key = process.env.IS_STRIPE_TEST_MODE == "true" ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE

if (key === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    stripePromise = loadStripe(key!);
  }

  return stripePromise;
};

export default getStripe;