
import { PageHeader, Button, Tooltip, Col,  Row, Modal,message   } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import styles from "./navbar.module.scss"
import React, { useState,useEffect } from 'react'
import Cards from '../Cards/Cards';
import { useHistory } from 'react-router';


const Navbar = ({fav}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [favData,setFavData]=useState([])
    const history=useHistory()
    const email=localStorage.getItem('email')

    useEffect(()=>{
        const getData = () => {
            
            fetch(`https://pockemon-task.herokuapp.com/api/getFav?email=${email}`)
              .then((res) => {
                if (res.status === 200) {
                
                 
                } else {
                  throw new Error(res.error);
                }
                return res.json();
              })
              .then((res) => {
                console.log(res)
                
                fav.add_data(res)
                
                
              })
              .catch((err) => {
                console.error(err);
                message.error("cannot get Data");
              });
          };
        if(!email)
        {
            history.push("")
        }
        else{
            getData()
        }
    },[ ])
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const logout=()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        history.push("/login")
    }
    return (
        <div>    <Modal title="Favourite Pockemon" icon={<HeartFilled style={{ color: '#db0707' }} />} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className={styles.parentDiv}>
                <Row gutter={[10, 10]}>
                    {fav.data.map((item,index)=> <Col span={12}><Cards item={item} index={index} key={index} fav={fav}/></Col>)}
                   
                </Row>
            </div>
        </Modal>
            <PageHeader
                className="site-page-header"
                title={"welcome "+email}
                style={{background:'grey    ',position:'fixed',width:'100%',zIndex:1}}
                extra={[
                    <Button onClick={logout}>Logout</Button>,
                    <Tooltip title="search">
                        <Button  shape="circle" icon={<HeartFilled style={{ color: '#db0707' }} />} size="large" onClick={showModal} />
                    </Tooltip>

                ]} ></PageHeader></div>
    )
}

export default Navbar