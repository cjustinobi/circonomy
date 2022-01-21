import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { UserContext } from './context/userContext'
import { checkUser } from './services/magic'

import { toggleDrawer } from './redux/toggleDrawer'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import MagicLink from './pages/MagicLink'
import EnterBazaar from './pages/EnterBazaar'
import EngageCircles from './pages/EngageCircles'
import AppHeader from './components/layout/Header'
import AppDrawer from './components/layout/Drawer'
import ActivateCircle from './pages/ActivateCircle'
import ExploreCircles from './pages/ExploreCircles'
import OnBoarding from './pages/OnBoarding'

// import PrivateRoute from './components/PrivateRoute';

// import Dashboard from './components/Dashboard'

import 'antd/dist/antd.css'



function App() {
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()
  const appLinks = [
    { link: '/explore-circles', title: 'Explore Circles' },
    { link: '/enter-bazaar', title: 'Enter Bazaar' },
    { link: '/engage-circles', title: 'Engage Circle' }
  ]

  const [user, setUser] = useState({ isLoggedIn: null, email: '' })
  const [loading, setLoading] = useState()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();

    axios.get(`http://localhost:8000/api/test`).then((response) => {
      setPost(response);
    });
  }, [user.isLoggedIn]);

  if (loading) {
    // return <h4>Loading ...</h4>
    console.log('loading')
  }

  function getUser (email) {
    setUser({email, isLoggedIn: true})
  }

  function createPost() {
    axios
      .post('http://localhost:8000/api/test', {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <UserContext.Provider value={{user, getUser}}>
      <Router>
        <AppHeader appLinks={appLinks}/>
          <AppDrawer appLinks={appLinks} isToggle={toggle}/>
          <label className="menu-icon" htmlFor="check">
            <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>
            <span className="Menu"></span>
            <span className="Menu"></span>
            <span className="Menu"></span>
          </label>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore-circles' element={<ExploreCircles/>}/>
            <Route path='/engage-circles' element={<EngageCircles/>}/>
            <Route path='/enter-bazaar' element={<EnterBazaar/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/magic-link' element={<MagicLink/>}/>
            <Route path='/activate-circle' element={<ActivateCircle/>}/>
            <Route path='/onboarding' element={<OnBoarding/>}/>
            {/*<PrivateRoute path="/dashboard" element={Dashboard}/>*/}
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
