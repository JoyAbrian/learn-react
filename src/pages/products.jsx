import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate.",
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 800000,
        image: "/images/shoes-2.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.",
    },
    {
        id: 3,
        name: "Sepatu Rusak",
        price: 1600000,
        image: "/images/shoes-3.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                <p>{email}</p>
                <Button classname="ml-5 bg-black" onClick={handleLogout} >Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}/>

                            <CardProduct.Body title={product.name}>
                                {product.description}
                            </CardProduct.Body>

                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}/>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>{(item.qty * product.price).toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td><b>{(totalPrice).toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage