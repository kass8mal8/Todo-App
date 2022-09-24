import moon from "../images/icon-moon.svg"

const Header = ({toggleTheme}) => {
    

    return ( 
        <div  className="header" >
            <ul>
                <li> <h2>TODO </h2> </li>
                <li> <img src={moon} alt = "dark-mode" onClick={toggleTheme}/> </li>
            </ul>
        </div>
     );
}
 
export default Header;