import React from 'react'

import Button from './Button'
import {useLocation} from 'react-router-dom'
export const Header = ({title,onAdd,showAdd}) => {
    const location=useLocation()
    return (

        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==="/" &&
            <Button onClick={onAdd} color={!showAdd ? 'green':'red'} text={!showAdd ? 'Add':'close'}/>
            }
        </header>
    )
}

export default Header;
