import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state={
        complete: false,
        cart:[]
    }
  }

  componentDidMount(){
      axios.get(`/api/cart`)
           .then(res=>this.setState({cart:res.data}))
  }



  onToken=(token,addresses)=>{
    axios.post(`/api/charge`,{token,addresses})
         .then()
  }

  render() {
    if(this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="checkout">
        <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={this.onToken}
        />
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);