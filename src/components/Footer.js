import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
        <footer>
            <p>CopyRight &copy; 2020</p>
            <Link to="/about">About</Link>
        </footer>
    )
}
export default Footer
