const express = require('express');

const router = express.Router();
const stripe = require('stripe')('sk_test_51OGsSHFvEPsyrPLbCNE5q5w0uwJAYS5yhn0Zohw5zZY9bTUWLpcWS0G1fSynfWwlL0LXt6G8SY78kquERGITdJ2H00B1pS29cc');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

router.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2023-10-16'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const payout = await stripe.payouts.create({
    amount: 1000,
    currency: 'xaf',
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51OGsSHFvEPsyrPLbMJ6Z8Mnel3TW6lbL9CiJxVdUtYY1srOkmGmWiGwh4tYVISZa7MmvQz5gos4vesoDK6BF0Cr600a6dghOsm'
  });
});

module.exports = router;