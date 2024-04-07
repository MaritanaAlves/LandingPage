import './Header.scss'
import { MdFoodBank } from 'react-icons/md'

function Header() {
  return (
    <>
      <header id="header">
        <div>
          <MdFoodBank size={75} style={{ color: 'BC6C25' }} />
        </div>
        <div className="menu">
          <a href="">Contact us</a>
          <a href="#test">Get started</a>
          <a href="">About us</a>
          <a href="">Portifolio</a>
          <a href="">Sing up</a>
        </div>
      </header>
    </>
  )
}

export default Header
