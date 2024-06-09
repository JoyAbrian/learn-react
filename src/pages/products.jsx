import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp. 1.000.000",
        image: "/images/shoes-1.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate.",
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp. 800.000",
        image: "/images/shoes-2.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.",
    },
    {
        id: 3,
        name: "Sepatu Rusak",
        price: "Rp. 1.600.000",
        image: "/images/shoes-3.jpg",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                <p>Welcome, {email}</p>
                <Button classname="ml-5 bg-black" onClick={handleLogout} >Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>

                        <CardProduct.Body title={product.name}>
                            {product.description}
                        </CardProduct.Body>

                        <CardProduct.Footer price={product.price}/>
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    );
};

export default ProductsPage