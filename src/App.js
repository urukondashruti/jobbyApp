import './App.css'

import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'
import LoginForm from './components/login'
import Home from './components/home'
import Jobs from './components/jobs'
import JobItemDetails from './components/jobItemDetails'
import NotFound from './components/Notfound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
