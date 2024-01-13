import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-card'>
            <div className='card'>
                <h1>Login</h1>
                <div>

                    <input type="text"  placeholder='Enter username'/>
                </div>
                    <br />
                    <div>

                    <input type="password" name="" id="" placeholder='Enter password'/>
                    </div>
                    <br />
                <Link to="/dashboard">
                <button className='login-btn'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;