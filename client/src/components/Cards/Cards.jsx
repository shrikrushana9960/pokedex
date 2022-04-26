import React, { useState,useEffect } from 'react';
import styles from "./cards.module.scss"
import {Card,Modal} from 'antd'
import { HeartFilled  } from '@ant-design/icons';
import Popup from './Popup';
const { Meta } = Card;
const Cards = ({item,index}) => {
  const [visible, setVisible] = useState(false);
  const [data,setData]=useState();
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
        <HeartFilled key="fav" />,
      ]}
    >
      <div className={styles.card_inner} onClick={() => setVisible(true)}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`}/>
    <Meta title={item.name}  />
    </div>
    </Card>
    </div>
  )
}

export default Cards