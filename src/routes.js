import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Cart from './Components/Cart/Cart.js';

export default(
    <Switch>
        <Route exact path ='/' component={Home} />
        <Route path='/cart' component={Cart} />
        {/* <Route path='' component={} />
        <Route path='' component={} /> */}
    </Switch>

)