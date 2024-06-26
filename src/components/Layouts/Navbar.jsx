import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button";
import { DarkMode } from "../../context/darkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { total } = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            <p>Welcome, {username}!</p>
            <Button classname="ml-5 bg-black" onClick={handleLogout} >Logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                Item: {totalCart} | Price: ${total}
            </div>
            <Button classname='bg-black px-10 m-5 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</Button>
        </div>
    );
};

export default Navbar;