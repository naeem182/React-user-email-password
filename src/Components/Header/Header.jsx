import { NavLink } from "react-router-dom"


const Header = () => {
    // 
    return (

        <div className=" flex justify-between ">
            <li> <NavLink to={'/'} >home</NavLink> </li>
            <li> <NavLink to={'/login'} >Login</NavLink> </li>
            <li> <NavLink to={'/register'} >Reg</NavLink> </li>


        </div>



    )
}

export default Header
