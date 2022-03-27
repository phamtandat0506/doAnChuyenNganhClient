import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Register = () => {

    const [users, setUsers] = useState({})
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
   

    const navi = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        let a = true
        if (document.getElementById("name").value === ""){
            alert("Hãy nhập đầy đủ tên")
            a = false
        }
        if (document.getElementById("userName").value === ""){
            alert("Hãy nhập đầy đủ tên tài khoản")
            a = false
        }
        if (document.getElementById("pass").value === ""){
            alert("Hãy nhập đầy đủ mật khẩu")
            a = false
        }

        if (document.getElementById("num").value === ""){
            alert("Hãy nhập đầy đủ phone")
            a = false
        }
        // else{
        //     a = true
        // }

        console.log(a);

        if ( a === false){
            console.log("dang ky khong thanh cong ")
        }else{

            console.log("dang ky success");

            const newUser = {
                fullName: name,
                userName: userName,
                pass: pass,
                email: email,
                num: num
        
            }

        
    
            console.log(newUser);
            axios.post('http://localhost:4000/api/dangky/insert', newUser)
            .then(res => {
                alert('Đăng ký thành công!')
                let user = users
                user = [newUser, ...user] 
                setUsers({user :users })
            })
            .catch(err => console.log(err))
            navi('/dang-nhap')
        }
    }

                
                

    return ( 
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 panel-body" style={{marginLeft:'30px'}}>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                
                    <div className="form-group">
                        <label>Họ tên</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="*full name"
                            onChange={e => setName(e.target.value)}
                            />
                    </div>
    
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="userName" 
                            placeholder="*user name"
                            onChange={e => setUserName(e.target.value)}
                            />
                         
                    </div>
    
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="pass" 
                            placeholder="*pass word"
                            onChange={e => setPass(e.target.value)}
                            />
                    </div>
    
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="*email"
                            onChange={e => setEmail(e.target.value)}
                            />
                    </div>
                
                    <div className="form-group">
                        <label>Số điện thoại:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="num" 
                            placeholder="*number phone"
                            onChange={e => setNum(e.target.value)}
                            />
                    </div>
                
                    <button type="submit" className="btn btn-primary">Đăng ký</button>
                
                </form>  
                              
        </div>
            
     );
}
 
export default Register
