import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form';
import Post from './components/Post/Post';

export default (
    <Switch>
        <Route exact path = '/' component={Auth}></Route>
        <Route path = '/dashboard' component={Dashboard}></Route>
        <Route path = '/post' component={Post}></Route>
        <Route path = '/new' component={Form}></Route>
    </Switch>
)