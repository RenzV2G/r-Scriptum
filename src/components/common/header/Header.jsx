import './header.scss'
import Logo from '../../../assets/Logo/Logo1.png'

const Header = ({active, setActive}) => {
  return (
    <div className='header'>
      <div className="header__content">
        
        <div className="logo"> <img src={Logo} alt="" /> </div>

        <div
        className={`menu-toggle ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
        >

          <i className='bx bx-menu'></i>
          <i className='bx bx-x'></i>

        </div>

      </div>
    </div>
    
  )
}

export default Header
