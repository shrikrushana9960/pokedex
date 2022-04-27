import React,{useState,useEffect} from 'react'
import styles from "./search.module.scss"
import Cards from '../../../../components/Cards/Cards'
const SearchBox = ({fav}) => {
  const [searchData,setSearchData]=useState([]);
  const [searchitem,setSearchItem]=useState([])


  useEffect(()=>{
    fetch( `https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0`)
    .then(res => res.json())
    .then(body => {
      console.log(body.results.map(item=>item.name))
      setSearchData(body.results);
     
    })
    .catch(() => {
     
    });
   
  },[])
  
  return (
  <div className={styles.searchboxcontainer}>
  
<form className={styles.searchbox+" searchform"} >
  
  <input type="text" placeholder="Search Pockemon" onChange={(e)=>{e.target.value===""?setSearchItem([]):setSearchItem(searchData.filter(item=>item.name.includes(e.target.value)))}}  list="pockemons"/>
  
  <button type="reset"></button>
</form>{searchitem.length>0&&<>
<h2>Searched item</h2>
<div className={styles.container} >
          
          {searchitem.map((item,index)=><Cards key={index} item={item} fav={fav} />)}
</div></>}
  </div>
  )
}

export default SearchBox