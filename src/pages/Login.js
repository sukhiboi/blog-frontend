import React, {useState} from 'react';
import {postReq} from "../request";
import {useHistory} from "react-router-dom";

const Login = ({user}) => {
    const history = useHistory();
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return <div>
        <input placeholder='username' value={username} onChange={({target}) => updateUsername(target.value)}/>
        <input placeholder='password' value={password} onChange={({target}) => updatePassword(target.value)}/>
        <button onClick={() => postReq(process.env.REACT_APP_LOGIN_URL, {username, password}).then(res => res.json())
            .then(details => {
                user.setUser(details);
                history.push('/')
            })}>Submit
        </button>
    </div>
}

export default Login;
