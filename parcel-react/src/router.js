import React from 'react'
import { Redirect, Route, Switch ,Router} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'
import Demo from './router/index'
import Lpf from './router/ee'
const  App=()=>{
   return(
    <Router history={createBrowserHistory()}>
    <Switch>
        {/* <Redirect exact from='/' to='/home' /> */}
        <Route path="/" exact component={Lpf} />
        <Route path='/home' component={Demo} />
        {/* <Redirect from='*' to='/404' /> */}
      </Switch>
      </Router>
   )
}
export default App
