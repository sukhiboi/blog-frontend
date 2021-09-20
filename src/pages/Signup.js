import React, {useState} from 'react';
import {postReq} from "../request";

const Signup = () => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return <div >
        <input placeholder='username' value={username} onChange={({target}) => updateUsername(target.value)} />
        <input placeholder='password' value={password} onChange={({target}) => updatePassword(target.value)} />
        <button onClick={() => postReq('/register', {username, password})}>Submit</button>
    </div>
}

export default Signup;
