import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src="https://images.unsplash.com/photo-1601239035311-c54910a50201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            </div>
            <button className='nav-toggle'>
                <span className='hamburger'></span>
            </button>
            <nav className='nav'>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home">Home</a></li>
                    <li className="nav__item"><a href="#">My Services</a></li>
                    <li className="nav__item"><a href="#">About Me</a></li>
                    <li className="nav__item"><a href="#">My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}
