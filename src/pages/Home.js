import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import AboutCirconomy from '../components/AboutCirconomy'

const Home = () => {
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <>
      <Hero />
      <Intro />
      <AboutCirconomy />
      <div className="web3 txt-center">
        <h1>Web3 technologies + Cooperative business models + Circular culture & systems =</h1>
        <p>The future of how we produce & consume or take & make & remake in the 21st Century!</p>
      </div>
    </>
  )
}

export default Home;
