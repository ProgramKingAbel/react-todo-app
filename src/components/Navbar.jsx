import { useRef, useState } from "react";

import useOnClickOutside from "@/utils/useOnClickOutside";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // const [dropdown, setDropdown] = useState(false);   
    // const ref = useRef();
    // useOnClickOutside(ref, dropdown, () => setDropdown(false))
    const links = [
        { path: '/', text: 'Home' },
        { path: 'about', text: 'About' },
        { path: 'profile', text: 'Profile' },
        { path: 'login', text: 'Login' },
      ];
    return (
        <nav className="navbar">
        <ul style={{display:'flex', listStyle:'none', background: 'grey', width: '85%', margin:' 0 auto', padding:'2rem', gap: '2rem',  borderRadius: 'calc(0.1 * 100px)',
    boxShadow: '0px 4px 14px 0px rgba(70, 70, 70, 0.38)'}}>
          {links.map((link) => {
            return (
              <li key={link.text}>
                    <NavLink to={link.path}
                    
                    >{link.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
        // <nav>
        //     <ul>
        //         <li>Home</li>
        //         <li>About</li>
        //         <li ref={ref}>
        //             <button onClick={()=>setDropdown((prev) => !prev)}>
        //                 Services <span>&#8595;</span>
        //             </button>
        //             {
        //                 dropdown && (
        //             <ul>
        //                 <li>Design</li>
        //                 <li>Development</li>
        //             </ul>
        //                 )
        //             }
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default Navbar;