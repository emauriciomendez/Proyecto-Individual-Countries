
import st from './NavBar.module.css';
import {  NavLink, useLocation } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

const NavBar=()=>{
  const location=useLocation();
    return(
        <div className={st.container}>
              <ul className={st.menu}>
                {/* {console.log(NavLink)} */}
                  <li>  <NavLink to ='/home'  className={(isActive) => (isActive ? st.active:st.disabled)}>Home</NavLink></li>
                  <li> <NavLink to ='/activities'  className={(isActive) => (isActive ? st.active:st.disabled)}>Actividades</NavLink></li>
                  <li>  <NavLink to ='/form'  className={isActive =>  (isActive ? st.active : st.disabled)}>Creación</NavLink></li>
                  { location.pathname==='/home'&& <SearchBar/>}
                   
                </ul>
        </div>
    )
}
export default NavBar;