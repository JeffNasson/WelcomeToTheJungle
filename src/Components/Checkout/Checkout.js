import React,{Component} from 'react';
import {Elements,StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../../CheckoutForm.js';

export default class Checkout extends Component{

    render(){
        return(
            <div className='checkout-parent'>
                <div className='stripe'>
                    <StripeProvider apiKey="pk_test_XI4VJ91xjBwWF5iv1BITLNFw">
                    <div className="example">
                     <h1>React Stripe Elements Example</h1>
                        <Elements>
                         <CheckoutForm history={this.props.history} />
                        </Elements>
                 </div>
                    </StripeProvider>
                </div>
            </div>
        )
    }
}