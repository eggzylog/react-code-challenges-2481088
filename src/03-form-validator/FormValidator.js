import { useState } from 'react'

export default function FormValidator() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  function validate() {
    const errors = []

    if (!email || !password || !passwordConfirm) {
      errors.push('All fields are required!')
    }
    else {
      if ([...email].filter(i => i === '@').length !== 1) {
        errors.push('Must contain a single @')
      }
      else if (password.length < 8) {
        errors.push('Password must contain at least 8 characters')
      }
      else if (password !== passwordConfirm) {
        errors.push('Passwords must match!')
      }
    }
    return errors
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate();
    setMessage(errors.length > 0 ? errors.join(', ') : 'User Created')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up!</h2>
        <label htmlFor='email'>Email</label>
        <input
          type='text' name='email' id='email'
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password' name='password' id='password'
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor='password-confirm'>Confirm Password </label>
        <input
          type='password' name='password-confirm' id='password-confirm'
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
      {message}
    </>
  )
}
