import '../styles/Login.css'

function Login() {
  return (
    <div className='Login'>
        <form className='Form'>
            <label htmlFor ="username">Username</label>
            <input type ="text" id="username" name="username" placeholder="Username" />
            <label htmlFor ="password">Password</label>
            <input type ="password" id="password" name="password" placeholder="Password" />
            <input type ="submit" value="Login" />
        </form>
        </div>
  )
}

export default Login