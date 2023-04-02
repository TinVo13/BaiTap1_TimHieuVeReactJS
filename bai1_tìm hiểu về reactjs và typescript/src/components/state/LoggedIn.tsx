import React, { useState } from 'react'

export const LoggedIn = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const handlLogin = () => {
        setIsLoggedIn(true)
    }
    const handlLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handlLogin}>Login</button>
            <button onClick={handlLogout}>Logout</button>
            <div>User is {isLoggedIn ? `logged in` : `logged out`}</div>
        </div>
    )
}
