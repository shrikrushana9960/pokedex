import React, { useState,useEffect } from 'react';
import styles from "./cards.module.scss"
import {Card,Modal,message} from 'antd'
import { HeartFilled  } from '@ant-design/icons';
import Popup from './Popup';
const { Meta } = Card;
const Cards = ({item,index,fav}) => {
  const [visible, setVisible] = useState(false);
  const [data,setData]=useState();
  const email=localStorage.getItem('email')
  const [like,setLiked]=useState(false);

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
  
  const addFAV = () => {
    
    fetch("https://pockemon-task.herokuapp.com/api/addFav", {
      method: "POST",
      body: JSON.stringify({name:item.name,email, url:item.url}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          message.success("added to Fav");
          getData()
         
        } else {
          throw new Error(res.error);
        }
       
      })
     
      .catch((err) => {
        console.error(err);
        message.error("Already in Favourite  list");
      });
  };
  const loadData = () => {
    
   
    fetch(item.url)
      .then(res => res.json())
      .then(body => {
        console.log(body)
        setData(body);
       
      })
      .catch(() => {
       
      });
  };
  useEffect(()=>{
    
    if(visible)
    loadData()
  },[visible])
  return (
    <div>
    <Modal
    centered
    visible={visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
    width={1000}
    style={{borderRadius:"30px",overflow:'hidden',border: "solid 5px black"}}
  >
    <Popup data={data} index={index}/>
    
    </Modal>
    <Card
    
    style={{ width: 200,margin:10,border: "solid 5px black",borderRadius:"20px",overflow:"hidden" }}
    hoverable
    actions={[
        <HeartFilled key="fav" onClick={addFAV}/>,
      ]}
    >
      <div className={styles.card_inner} onClick={() => setVisible(true)}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`} alt={item.name}/>
    <Meta title={item.name}  />
    </div>
    </Card>
    </div>
  )
}

export default Cards