import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>

                <CardProduct.Body title="Sepatu Baru">
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate.
                </CardProduct.Body>

                <CardProduct.Footer price="Rp. 1.000.000"/>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>

                <CardProduct.Body title="Sepatu Baru">
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quisquam, voluptate.
                </CardProduct.Body>

                <CardProduct.Footer price="Rp. 1.000.000"/>
            </CardProduct>
        </div>
    );
};

export default ProductsPage