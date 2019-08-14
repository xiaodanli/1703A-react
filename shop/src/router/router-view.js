import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView(props){
    let {routes} = props;
    let routeArr = routes.filter(item => !item.redirect)
    let redirectArr = routes.filter(item => item.redirect)
    return <Switch>
        {/* <Route path="/login" component={Login}></Route>
        <Route path="/registry" component={Registry}></Route>
        <Route path="/city" component={City}></Route>
        <Redirect from="/" to="/city"/> */}
        {routeArr.map(item => <Route key={item.path} path={item.path} component={item.component}></Route>)}
        {redirectArr.map(item => <Redirect from={item.path} to={item.redirect} key={item.path}/>)}
    </Switch>
}

export default RouterView