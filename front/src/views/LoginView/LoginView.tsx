"use client"
import React, { useState } from 'react'
import { ILoginProps } from '../../interfaces/types'
import { IErrorProps } from '../../interfaces/types'

const LoginView: React.FC = () => {
    const initialState = {
        email: '',
        password: '',
    }

    const [userData, setUserData] = useState<ILoginProps>(initialState)
    const [errors, setErrors] = useState<IErrorProps>(initialState)

    const handleChange = () => {
    }

    const handleSubmit = () => {
    }

  return (
    <div>
        <div>
            <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email_address'>Email</label>
                <input id='email_address' name='email' type='email' value={userData.email} onChange={handleChange} placeholder='user@example.com'/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' name='password' type='password' value={userData.password} onChange={handleChange} placeholder='•••••••'/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default LoginView