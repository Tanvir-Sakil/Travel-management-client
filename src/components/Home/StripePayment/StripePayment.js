import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const StripePayment = ({successPayment}) => {
  const stripe = useStripe();
  const elements = useElements();   

  const handleSubmit = async (event) => {
    // Block native form submission.
    // event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[errorMessage]', error.message);
    } else {
      if(paymentMethod){
        successPayment(paymentMethod)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <CardElement 
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '',
                    },
                },
                invalid: {
                    color: 'red',
                },
                },
            }}
            />
            <br/>
      <button className="btn btn-primary form-control" type="submit" disabled={!stripe}>
        Pay and Confirm Booking
      </button>
    </form>
  );
};

export default StripePayment;