import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import climateChange from '../assets/img/climate-change.svg'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import AboutCirconomy from '../components/AboutCirconomy'
import {Wrapper} from '../components/PagesStyles/Home.styles'

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
    <Wrapper>
      <Hero />
      <Intro />
      <AboutCirconomy />
      <div className="web3 txt-center">
        <div className="h1">
          <h1>Web3 technologies + Cooperative business models + Circular culture & systems =</h1>
        </div>
        <p>The future of how we produce & consume or take & <br/> make & remake in the 21st Century!</p>
      </div>
      <div className="climate-change txt-center">
        <img width="220px" src={climateChange} alt=""/>
        <p>Climate change isn’t just a government or corporate problem, it’s a people problem!</p>
      </div>
    </Wrapper>
  )
}

export default Home;
