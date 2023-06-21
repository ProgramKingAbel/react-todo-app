import { useRef, useState } from "react";
import useOnClickOutside from "@/utils/useOnClickOutside";

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
        <ul>
          {links.map((link) => {
            return (
              <li key={link.text}>
                <a href={link.path}>{link.text}</a>
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