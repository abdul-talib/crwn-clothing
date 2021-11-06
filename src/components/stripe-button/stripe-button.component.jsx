import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51JsgFeFd4L1M0kR9ozQTKh8SIbsGWQ72Kwr98f7EYxfXjZqpxuR4ttWd3sK82uxg5TbHgsvAo8B7QvN4HSkbeaFf00pfYrcesc'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
    label= 'Pay now'
    name='CRW Clothing Ltd'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton