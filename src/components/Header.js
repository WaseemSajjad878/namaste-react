import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lOGO_URL } from '../utils/constants'


export const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (
        <div className="header">
            <div className="logo">
                <img src={lOGO_URL} alt="logo" />
            </div>
            <ul className="nav-items">
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li> Contact Us </li>
                <li> Cart </li>
            </ul>
            <button onClick={() => {
                setBtnName(btnName === 'Login' ? 'Logout' : 'Login')
            }}>
                {btnName}
            </button>
        </div>
    )
}

export default Header