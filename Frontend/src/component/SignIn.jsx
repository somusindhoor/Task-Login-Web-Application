import { useRef } from 'react'
import '../style/SignIn.css'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

    let navigate = useNavigate()

    let email = useRef(null)
    let password = useRef(null)


    let signIn = (e) => {
        e.preventDefault() //prevents the page from reloading
        let data = {
            email: email.current.value,
            password: password.current.value
        }
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if(res.data.status === 200){
                alert(res.data.message)
                navigate('/Task')
            }else{
                alert(res.data.message)
            }
        })
    }

    return (
        <div className="SignIn">
           <div className="main">
           <section>
                <form action="" onSubmit={signIn}>
                    <h4>SignIn</h4>
                    <div className="sign_form">
                        <label htmlFor="">Email-Id: </label>
                        <input ref={email} type="email" placeholder="youremail@gmail.com" /><br />

                        <label htmlFor="">Password: </label>
                        <input ref={password} type="password" placeholder="password" /><br />
                    </div>
                    <div className="btn">
                        <button type="submit" to="/Task">SignIn</button>
                    </div>
                </form>
                <div className="signUp">
                    <Link className='link' to="/SignUp-Page">Dont have an account? SignUp here</Link>
                </div>
            </section>
           </div>
        </div>
    );
}

export default SignIn;