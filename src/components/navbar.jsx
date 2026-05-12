import {NavLink} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className='app-nav' aria-label='Main'>
        <ul className='app-nav__list'>
            <li key="home">
              <NavLink to="/" end={true} className='app-nav__link'>
                Home
              </NavLink>
              <NavLink to="/user" end={false} className='app-nav__link'>
                User
              </NavLink>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar