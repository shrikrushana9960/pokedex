
import Navbar from '../../components/Navbar'
import { Fav } from '../../store/Fav'
import styles from "./pockemon.module.scss"
import Pockemons from './sub_section/Pockemons'
import Search from "./sub_section/Search"
const Pockemon = () => {
  const fav=new Fav()
  return (
    <div className={styles.body}>
    <Navbar fav={fav}/>
    <Search fav={fav}/>
    <Pockemons fav={fav}/>
  </div>
  )
}

export default Pockemon