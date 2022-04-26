
import Navbar from '../../components/Navbar'
import styles from "./pockemon.module.scss"
import Pockemons from './sub_section/Pockemons'
import Search from "./sub_section/Search"
const Pockemon = () => {
  return (
    <div className={styles.body}>
    <Navbar/>
    <Search/>
    <Pockemons/>
  </div>
  )
}

export default Pockemon