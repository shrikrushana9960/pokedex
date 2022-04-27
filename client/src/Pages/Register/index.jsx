import styles from './register.module.scss'
import React, { useState } from 'react';
import {Button, Form, Input,  Typography,message} from "antd";
import {LockTwoTone, MailTwoTone,UserOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const {Title} = Typography;
const Register = () => {
  const [email, setLocalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setLocalName]=useState("");
  const history=useHistory()
  
  const onSubmit = (event) => {
    event.preventDefault();
    fetch("https://pockemon-task.herokuapp.com/api/signup", {
      method: "POST",
      body: JSON.stringify({name,email, password}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          message.success("sucessfully register");
          history.push("/login");
         
        } else {
          throw new Error(res.error);
        }
        return res;
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
        <Title level={4} style={{marginBottom:"20px"}} >Register</Title>
        <Form.Item
        style={{marginBottom:"20px"}} 
          name="name"
          
          rules={[
            {
              required: true,
             
            },
          ]}
          hasFeedback
        >

          <Input
           placeholder="Name"
           onChange={(e) => setLocalName(e.target.value)}
            prefix={<UserOutlined  className="site-form-item-icon"/>}
           
           
          />
        </Form.Item>
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
            Register
          </Button>
          <p></p>
          <p>Already have a account ? <Link to="/login">Log In</Link></p>
         
        </Form.Item>
      </Form>
        </div>
        
        </div>
  )
}

export default Register