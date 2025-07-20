import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();
    const isExplore = location.pathname === "/explore";
    const isUpload = location.pathname === "/upload";

    return (
        <>
            <div className="flex justify-between items-center ml-[14%] max-md:ml-[5%] mr-[14%] max-md:mr-[5%] mt-[3%]">
                <div className="">
                    <NavLink to="/" className="inter-light text-[30px] max-md:text-[18px]">DOTFILES</NavLink>
                </div>

                <div className="flex gap-4 inter-bold text-[14px] max-md:text-[10px] max-md:gap-1 items-center">

                    <NavLink to="/" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Home
                    </NavLink>

                    <NavLink to="/explore" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Explore
                    </NavLink>

                    {(!isExplore && !isUpload) && (
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all max-md:hidden"}>
                            Contact
                        </NavLink>
                    )}

                    {(isExplore || isUpload) && (
                        <NavLink to="/upload" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all max-md:hidden"}>
                            Upload
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;