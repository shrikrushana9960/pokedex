import styles from './login.module.scss'
import React, { useState } from 'react';
import {Button, Form, Input,  Typography} from "antd";
import {LockTwoTone, MailTwoTone} from "@ant-design/icons";
import { Link } from 'react-router-dom';
const {Title} = Typography;
const Login = () => {
 
  return (
    <div className={styles.login}>
         <img src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png'} height={100}/>
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
            prefix={<MailTwoTone className="site-form-item-icon"/>}
            placeholder="yourmail@domain.com"
           
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
       
          />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} block>
            Log In
          </Button>
          <p></p>
          <p>Don't have a account ? <Link><a>Register</a></Link></p>
         
        </Form.Item>
      </Form>
        </div>
        
        </div>
  )
}

export default Login