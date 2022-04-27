import styles from './login.module.scss'
import React, { useState,useEffect } from 'react';
import {Button, Form, Input,  Typography,message} from "antd";
import {LockTwoTone, MailTwoTone} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import { useHistory } from 'react-router-dom';
const {Title} = Typography;
const Login = () => {
  const [email, setLocalEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory()
  const useremail=localStorage.getItem('email')

  useEffect(()=>{
      if(useremail)
      {
          history.push("/home")
      }
  },[])
  const responseFacebook = (response) => {
    console.log(response);
  }
  const componentClicked=(data)=>{
    console.log(data)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    fetch("https://pockemon-task.herokuapp.com/api/authenticate", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
         
        } else {
          throw new Error(res.error);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("email",email);
        history.push("/home");
        
      })
      .catch((err) => {
        console.error(err);
        message.error("Error logging in please try again");
      });
  };
  
 
  return (
    <div className={styles.login}>
         <img src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png'} alt='logo' height={100}/>
        <Title level={1} style={{marginBottom:"20px"}} >
         
          Pocodoc</Title>
        <div className={styles.card}>
          
        <Form
        name="normal_login"
        initialValues={{remember: true}}
      >
        <Title level={4} style={{marginBottom:"20px"}} >Log In</Title>
        <Form.Item
        style={{marginBottom:"20px"}} 
          name="email"
          
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid Email!",
            },
          ]}
          hasFeedback
        >

          <Input
           placeholder="yourmail@domain.com"
           onChange={(e) => setLocalEmail(e.target.value)}
            prefix={<MailTwoTone className="site-form-item-icon"/>}
           
           
          />
        </Form.Item>
        <Form.Item
        style={{marginBottom:"20px"}} 
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockTwoTone className="site-form-item-icon"/>}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
       
          />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} onClick={onSubmit}  block>
            Log In
          </Button>
          <p></p>
          <p>Don't have a account ? <Link to="/register">Register</Link></p>
         
        </Form.Item>
        <FacebookLogin
    appId="525109242318264"
    autoLoad={true}
    
    onClick={componentClicked}
    callback={responseFacebook} />
      </Form>
     
        </div>
        
        </div>
  )
}

export default Login