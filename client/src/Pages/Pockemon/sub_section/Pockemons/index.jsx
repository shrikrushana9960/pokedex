
import React,{useState,useEffect} from 'react'
import styles from './pockemons.module.scss'
import Cards from '../../../../components/Cards/Cards'
import { Pagination } from 'antd';
import { Fav } from '../../../../store/Fav';
import { observer } from "mobx-react-lite" 
const Pockemons = ({fav}) => {
    
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [count,setCount]=useState(0);
    const loadMoreData = (value) => {
      console.log(value)
      setCount(value)
        if (loading) {
          return;
        }
        
    
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${12*value}`)
          .then(res => res.json())
          .then(body => {
            setCount(body.count)
            setData([...body.results]);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      };
      useEffect(() => {
       
        console.log(fav.data)
        loadMoreData(0);
      }, []);
      function onChnage(value) {
        loadMoreData(value-1)
      
      }
  return (
    <div id="scrollableDiv" className={styles.parent}>
     
      
          <div className={styles.container} >
          
          {data.map((item,index)=><Cards fav={fav} key={index} item={item} index={(count*12)+index}/>)}
          
         
          </div>
        
          <Pagination total={940} hidden onChange={onChnage}showQuickJumper />
      
     
    </div>
    
  )
}

export default Pockemons