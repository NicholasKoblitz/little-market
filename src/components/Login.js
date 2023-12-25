import {React, useState} from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const INIT_STATE = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(INIT_STATE)
    const navigate = useNavigate()

    const fetchToken = async (username, password) => {
        const res = await fetch(`https://fakestoreapi.com/auth/login`, {body: JSON.stringify({username: username, password, password})})

        if(res.ok) {
            const data = res.json()
            localStorage.setItem('token', data.token)
        }
        else {
            throw new Error("Invalid username or password")
        }
    }

    const fetchUser = async (username) => {
        const res = await fetch('https://fakestoreapi.com/users')

        if(res.ok) {
            const users = await res.json();
            for(let i = 0; i < users.length(); i++) {
                if(users[i].username === username) {
                    localStorage.setItem("id", users[i].id)
                    return users[i].id
                }
            }
        }
        else {
            throw new Error(`Error: Status Code ${res.status}`);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchToken(formData.username, formData.password);
        const id = await fetchUser(formData.username)
        navigate(`/users/${id}`)

    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='password'
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;