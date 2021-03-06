import { useEffect }  from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toggleDrawer} from '../redux/toggleDrawer'

import UnderConstruction from '../components/UnderConstruction'
import {Wrapper} from '../components/PagesStyles/EnterCircommerce.styles'

const text = 'We plan on having a reward structure that is more robust ' +
  'for you to make your earnings work for you. There will also be more ways than one to earn' +
  ' such as through upcycling missions and upskilling journeys.'

const EngageCircles = () => {
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
      <UnderConstruction text={text} />
    </Wrapper>
  )
}

export default EngageCircles
