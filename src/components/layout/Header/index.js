import { Link } from 'react-router-dom'

import logo from '../../../assets/img/logo.png'
import wallet from '../../../assets/img/wallet.svg'
import info from '../../../assets/img/info.svg'
import notification from '../../../assets/img/notification.svg'
import ConnectButton from '../../../components/ConnectButton'
import { Header, Ul, Li, LogoImg, Links, Icons } from './Header.styles'

const AppHeader = ({ appLinks }) => {
  return (
    <Header>
      <Links>
        <Link to='/'>
          <LogoImg src={logo} alt="circonomy"/>
        </Link>
        <Ul>
          {appLinks.map((link, i) => <Li key={i}>
            <Link to={link.link}>{link.title}</Link>
          </Li>)}
        </Ul>
      </Links>
      <Icons>
        <img src={info} style={{ margin: '0 5px'}} alt="circonomy"/>
        <img src={notification} style={{ margin: '0 5px'}} alt="circonomy"/>
        <img src={wallet} style={{ margin: '0 5px'}} alt="circonomy"/>
        <ConnectButton />
      </Icons>
  </Header>
)};

export default AppHeader;
