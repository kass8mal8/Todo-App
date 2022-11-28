import { ThemeContext } from "./App";
import {useContext } from "react"

const Footer = () => {

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'hsl(234, 11%, 52%)' : 'white',
        color:'#ddd',
        border : darkTheme ? '1px solid hsl(234, 11%, 52%)' : 'none',        
    }

    return (  
        <div className="footer" style={themeStyles}>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
        </div>
    );
}
 
export default Footer;