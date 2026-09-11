import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
       <nav className="sticky top-0 z-50 flex justify-between items-center h-25 px-8">
        <img src={Logo} alt="" className="w-32" />

        <ul className="flex items-center gap-4">
            <li><a href="" className="text-[#DB2777]">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>

       <div className="flex items-center gap-2">
         <button className="btn btn-soft rounded-full">Sign In</button>
         <button className="btn btn-secondary rounded-full">Sign Up</button>
       </div>
       </nav>
    );
};

export default Nav;