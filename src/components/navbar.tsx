import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to={'/'}>
                <img src={logo} alt="3D Ingenieria" className="h-[45px]" />
            </Link>

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav: { id: string; title: string; }, index: number) => (
                    <li
                        key={nav.id}
                        className={`font-palanquin font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-blue3d" : "text-black"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
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
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 min-w-[140px] my-2 mx-auto rounded-xl bg-white w-[94%] absolute top-[100px] left-3 transform -translate-x-1/2 md:hidden slide-down z-50`}
                >
                    <ul className="list-none flex justify-start items-start flex-col gap-4">
                        {navLinks.map((nav: { id: string; title: string }, index: number) => (
                            <li
                                key={nav.id}
                                className={`font-palanquin font-medium text-black cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-black"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
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
