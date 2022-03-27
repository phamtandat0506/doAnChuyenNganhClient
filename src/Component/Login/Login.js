import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Login = () => {

    const [users, setUsers] = useState([])

    const useEffect = () => {
        axios.get('/api/user')
        .then(res => {
            setUsers(res.data.users)
        })
        .catch(err => console.log(err))
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 panel-body" style={{marginLeft:'30px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Tài khoản</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userName" 
                        placeholder="*user name"
                        
                        />
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="pass" 
                        placeholder="*pass word"
                        
                        />
                </div>


            
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
     );
}
 
export default Login;