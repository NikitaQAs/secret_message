import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div >
            <nav>
                <ul>
                    <li><NavLink className="" to='/'>Home</NavLink></li>
                    <li><NavLink className="" to='/note'>Check Note</NavLink></li>
                    <li><NavLink className="" to='/create'>Create Note</NavLink></li>
                    <li><NavLink className="" to='/about'>About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;