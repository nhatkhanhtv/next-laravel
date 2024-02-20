'use client'

import useAuth from '../lib/useAuth'
import { useState } from 'react';

export default function Page() {

    const {login, csrf} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [remember, setRemember] = useState(false);

    const submitForm = async event => {
        event.preventDefault();

        login({email, password, remember, setErrors})
        console.log(errors);
    }
    
    return (<form >
        <h1>Form đăng nhập</h1>
        <div>
            
        </div>
        <div>
            <label htmlFor="username">Tên đăng nhập</label>
            <input type="text" name="username" id="username" className=""  onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div>
        <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" className="" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="button" onClick={submitForm}>Đăng nhập</button>

    </form>);
}