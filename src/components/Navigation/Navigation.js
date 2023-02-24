import React from 'react'
import './Navigation.css'
import { useContext } from 'react'
import { ThemeContext } from '../themcolor/ThemeContext'
//export default class Navigation extends Component {
export default function Navigation() {
    //render(){
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='header'>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    outline: 'none'
                }}>
                    <li ><a className='active' href='#home' style={{ color: theme.color }}>Home</a></li>
                    <li ><a href='#new' style={{ color: theme.color }}>News</a></li>
                    <li ><a href='#about' style={{ color: theme.color }}>About</a></li>
                    <li ><a href='#contact' style={{ color: theme.color }}>Contact</a></li>
                    <li style={{ position: 'relative', float: 'right' }}>
                        <a className='switch-mode' href='#mode' onClick={toggle}
                            style={{ color: theme.color }}
                            data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
//}