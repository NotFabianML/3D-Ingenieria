import { useCallback, useEffect, useRef, useState } from "react";
import { close, logo, menu } from "@/assets";
import { navLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setToggle(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <nav ref={navRef} className="w-full flex py-6 justify-between items-center navbar">
            <Link to={'/'}>
                <img src={logo} alt="3D Ingenieria" className="h-[45px]" />
            </Link>

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav: { id: string; title: string; }, index: number) => (
                    <li
                        key={nav.id}
                        className={`font-palanquin cursor-pointer text-[16px] hover:text-blue3d ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${location.pathname === nav.id ? "text-blue3d font-extrabold" : "text-black font-normal"}`}
                    >
                        <Link to={`${nav.id}`}>
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Navbar */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`p-6 min-w-[140px] my-2 mx-auto rounded-xl backdrop-blur-lg bg-white/45 w-[94%] absolute top-[100px] left-3 md:hidden ${toggle ? "slide-down" : "slide-up"} z-50`} 
                    ref={navRef}
                >
                    <ul className="list-none flex justify-start items-start flex-col gap-4">
                        {navLinks.map((nav: { id: string; title: string }, index: number) => (
                            <li
                                key={nav.id}
                                className={`font-palanquin cursor-pointer text-[20px] hover:text-blue3d ${location.pathname === nav.id ? "text-blue3d font-extrabold" : "text-white font-bold"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            >
                                <Link to={`${nav.id}`}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;
