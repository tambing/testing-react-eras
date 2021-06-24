import React from 'react'

// export const Button = () => {
const Button = (props) => {
    const {idBtn, title, onclick, active} = props
    return (
        <button className={`btn btn-tabs ${active ? 'active-tabs' : ''}`} id={idBtn} onClick={onclick}>{title}</button>
    )
}

export default Button
