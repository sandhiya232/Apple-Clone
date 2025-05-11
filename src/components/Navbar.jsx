import {
    FaApple, FaSearch, FaShoppingBag
} from "react-icons/fa"

function Navbar() {

    return (
        <>
            <nav className="bg-slate-100 p-4">
                <div className="container">
                    <div className="flex gap-8 items-center justify-center text-sm ">
                        <p><FaApple /></p>
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>Entertainment</p>
                        <p>Accessories</p>
                        <p>Support</p>
                        <p><FaSearch /></p>
                        <p><FaShoppingBag /></p>
                    </div>
                </div>
            </nav>

            <p className="mt-5 text-center">Get up to 12 months of No Cost EMI plus up to ₹8000.00 instant cashback on selected products with eligible cards</p>
        </>
    )

}


export default Navbar