import {lOGO_URL} from '../utils/constants'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={lOGO_URL} alt="logo" />
            </div>
            <ul className="nav-items">
                <li> Home </li>
                <li> About </li>
                <li> Contact Us </li>
                <li> Cart </li>
            </ul>
        </div>
    )
}

export default Header