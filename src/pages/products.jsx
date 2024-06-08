import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
    return (
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
    );
};

export default ProductsPage