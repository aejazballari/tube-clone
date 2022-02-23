import React, {useState, useEffect} from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {Container} from 'react-bootstrap'
import Homescreen from './screens/homescreen/Homescreen'
import LoginScreen from './screens/loginscreen/LoginScreen'

import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import "./_app.scss"
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'

const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar(value => !value)
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className='app__container'>
       <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
       <Container fluid className='app__main'>
          {children}
       </Container>
    </div>
  </>
  )
}

function App() {
  const {accessToken, loading} = useSelector(state => state.auth);
  const history = useHistory();
  useEffect(() => {
    if(!loading && !accessToken) {
      history.push('/auth')
    }
  }, [accessToken, loading, history])
  return (
      <Switch>
        <Route path='/' exact>
          <Layout>
            <Homescreen />
          </Layout>
        </Route>
        <Route path='/auth'>
          <LoginScreen />
        </Route>
        <Route path='/search'>
          <Layout>
            <h1>search</h1>
          </Layout>
        </Route>
        <Route path='/watch/:id'>
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
  
  )
}

export default App