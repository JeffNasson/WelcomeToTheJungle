import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Account from './Components/Account/Account/Account.js';
import Cart from './Components/Cart/Cart.js';
import Home from './Components/Home/Home.js';
import Orders from './Components/Sales/Orders/Orders.js';

export default(
    <Switch>
        <Route exact path ='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/orders' component={Orders} />
        <Route path='/account' component={Account} />
    </Switch>

)