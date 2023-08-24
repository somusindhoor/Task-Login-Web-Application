import { useRef } from 'react';
import '../style/SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    let navigate = useNavigate()

    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let confirmPassword = useRef(null)

    let signUp = (e) => {
        e.preventDefault() //prevents the page from reloading
        let data = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value
        }
        if(firstName && lastName && email && (password = confirmPassword)){
            axios.post('http://localhost:4000/register',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        }else{
            alert('Invalid Credentials')
        }
    }
    return (
        <div className="SignUP">
            <div className="image">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
                <div className="cont2">
                    <form action="" onSubmit={signUp}>
                        <label htmlFor="">First Name</label><br />
                        <input ref={firstName} type="text" placeholder="enter First Name" /><br />
                        
                        <label htmlFor="">Last Name</label><br />
                        <input ref={lastName} type="text" placeholder="enter Last Name" /><br />

                        <label htmlFor="">Email-Id</label><br />
                        <input ref={email} type="email" placeholder="enter Email" /><br />

                        <label htmlFor="">Password</label><br />
                        <input ref={password} type="password" placeholder="enter Password" /><br /><br />
                        <label htmlFor="">Confirm Password</label><br />
                        <input ref={confirmPassword} type="password" placeholder="enter Confirm Password" /><br /><br />
                        <div className="btns">
                        <Link to='/'>Already a User ?</Link> <br /><br />
                        <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;