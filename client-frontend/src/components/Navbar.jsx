import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../images/group.png";

const NavbarItem = ({
    home,
    market,
    news,
    transaction,
    allCrypto,
    classProps,
}) => {
    return (
        <ul className="flex flex-wrap">
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to="/">{home}</Link>
            </li>
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to="/market">{market}</Link>
            </li>
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to="/cryptoPrice">{allCrypto}</Link>
            </li>
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to="/news">{news}</Link>
            </li>
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                <Link to="/transactions">{transaction}</Link>
            </li>
        </ul>
    );
};

const Navbar = () => {
    //basic functional component
    const [toggleMenu, setToggleMenu] = useState(false);
    const navBarItems = [
        {
            home: "Home",
            market: "Market",
            news: "Crypto News",
            transaction: "Transactions",
            allCrypto: "Crypto Price",
        },
    ];
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-32 cursor-pointer"
                    />
                </Link>
            </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {navBarItems.map((item, index) => (
                    <NavbarItem
                        key={item + index}
                        home={item.home}
                        market={item.market}
                        allCrypto={item.allCrypto}
                        news={item.news}
                        transaction={item.transaction}
                    />
                ))}
            </ul>

            <div className="flex relative">
                {!toggleMenu && (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                )}

                {/* dynamic block of code */}

                {toggleMenu && (
                    <ul
                        className=" fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                flex flex-wrap flex-col justify-start items-end  rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>

                        {navBarItems.map((item, index) => (
                            <NavbarItem
                                key={item + index}
                                home={item.home}
                                market={item.market}
                                allCrypto={item.allCrypto}
                                news={item.news}
                                transaction={item.transaction}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
