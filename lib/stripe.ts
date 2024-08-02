import Stripe from "stripe";

const stripeSecretKey = process.env.IS_STRIPE_TEST_MODE == "true" ? process.env.STRIPE_API_KEY_TEST : process.env.STRIPE_API_KEY_LIVE;

if (!stripeSecretKey) {
  throw new Error("STRIPE_API_KEY is not set");
}

const stripe = new Stripe(stripeSecretKey);

export default stripe;