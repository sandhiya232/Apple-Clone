
import React, { useRef } from "react";
import { Truck, Monitor, Heart, RefreshCcw } from "lucide-react";

import {
    FaTruck, FaSearch, FaShoppingBag
} from "react-icons/fa"

const products = [
    { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8' },
    { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXOG9vbGw5MnhRZ3BpYVMwQTIvb2xsaDVoZlhhY1p4QWdsTjFNaGRHM3FYWW15d1FhSDJ0bkR0ZGZtUjZJNmFveFVockp1czQ4Q0pvWUU1bC9ERnl2dFE' },
    { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg' },
    { name: 'Apple Watch', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkNDJNVmlnVytwalkvOTJ2M1BKWUREdkh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2oxdUo4aWtyK05IRkZuWjBWbW5HM00' },
    { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yNlJ5eGFhR1FVd2NNNDB0VWRUSzVCUFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFI0R1M4eFpKRTFIclV0ZHRqakVRd1k' },
    { name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFpQclc0OVE3cmhmS3FBaXd6cG8yYzg' },
    { name: 'Apple TV 4K', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA' },
    { name: 'HomePod', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA' },
];

const accessories = [
    {
        title: "AirPods Max – Orange",
        subtitle: "New colours",
        price: "MRP ₹59900.00 (Incl. of all taxes)",
        colors: ["#d0ccc7", "#c3c4cf", "#9c8a7a", "#181716", "#f4a77d"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-orange?wid=400&hei=400&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmbVl3dU4zNmtlQ1czYnJUSEJUcWowR1RLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic2NuVVNtQlZidWtkei9YRC9LdExFbFZBU25Ob2N5dVQyQmxkN0IyWWVHdW0",
    },
    {
        title: "iPhone 16 Plus Silicone Case with MagSafe – Peony",
        subtitle: "New",
        price: "MRP ₹4900.00 (Incl. of all taxes)",
        colors: ["#e958a4", "#ffc046", "#72c3dc", "#8e44ad", "#000", "#fff"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGR4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=ZE9aQWxZY3lqcEkxWE80Vi91dlBWZllvYS9naDJJdU9KTWdGWjhKWFRmS1ZGS1d3SDlTVjBOQWIxNCszUkpvN2hueERFVjRzdm5hMlhxVjk4MTNZWUE",
    },
    {
        title: "HomePod mini – White",
        subtitle: "",
        price: "MRP ₹10900.00 (Incl. of all taxes)",
        colors: ["#000", "#c0c0c0", "#ff9900", "#ffffff", "#d28f7f"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-white-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=K2c3bEwyaWVDeDZkdHpLbHkwcGVSaVh3VWtBWGpRcmhqdHlJNjVOT2QyeVRLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic2JOb2lISFgzY2ZQN2dab3R5aVRacGgyUXQrc1F4VFIwcWJZNzNTUVpwSTY",
    },
    {
        title: "42mm Gold Milanese Loop",
        subtitle: "",
        price: "MRP ₹9500.00 (Incl. of all taxes)",
        colors: ["#7b6a4c", "#a89b8e", "#3b362f"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMN3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=MkZ5bWJIelN2eWVnY2k2WTErTkljUFlvYS9naDJJdU9KTWdGWjhKWFRmSWRwMkJIRnBJeFN4M21RSFdNTWtja21XVHVoMnc5alcxeHQ1MG4xaTlRRXc",
    },

    {
        title: "iPhone 16 Pro Clear Case with MagSafe",
        subtitle: "",
        price: "MRP ₹4900.00 (Incl. of all taxes)",
        colors: ["#7b6a4c", "#a89b8e", "#3b362f"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=TXZpSEg0MGF0QUNTNGpkTzhrU3hndllvYS9naDJJdU9KTWdGWjhKWFRmS09ndGkreVVaZTdmSmpUOUozdHRlU0pPRjNYblFJVkwzR2MyTG5BQ1RpRlE",
    },
    {
        title: "Powerbeats Pro 2 – High-Performance Earbuds – Electric Orange",
        subtitle: "New",
        price: "MRP ₹29900.00 (Incl. of all taxes)",
        colors: ["#7b6a4c", "#a89b8e", "#3b362f"],
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d1RLSDZzQTRtK1UxZmVlUFRKNGgvZllvYS9naDJJdU9KTWdGWjhKWFRmSjNqeEcvVzZaaVU2a3ptRnN4aU8wUGovUE9KcXhKNTlHR1RBR2lHbUtXcWc",
    },
];

const features = [
    {
        icon: <Truck className="w-6 h-6 text-red-500" />,
        title: "Enjoy free delivery, or easy pickup",
        description: "from an Apple Store.",
    },
    {
        icon: <Monitor className="w-6 h-6 text-red-500" />,
        title: "Customise their Mac",
        description: "with everything from graphics to storage.",
    },
    {
        icon: <Heart className="w-6 h-6 text-red-500" />,
        title: "Make it theirs.",
        description: "Engrave a mix of emoji, names and numbers for free.",
    },
    {
        icon: <RefreshCcw className="w-6 h-6 text-red-500" />,
        title: "Exchange your smartphone",
        description: "get ₹5000.00–₹6750.00 in credit towards a new one.*",
    },
];

const helpCards = [
    {
        label: "APPLE SPECIALIST",
        title: "Shop one on one with a Specialist online.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202504?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=cHZTdEJURVNIcmNmcWQ1YlUyV2pSZmZ6Q2ZTaDM0dDFtQTRQZitiSUxoQ3ZaQ3BPZ3VPbjZ1OE1jMHB0VHplaVQ1SVRRZnoyY2xiVHFIbFpnUnJwcmJKaWduWDhrL3RFTDJVSS83Tk9MYXNncFNxekt2MjNBWmdPdTJsTW1wWDdOcEJRdUlLK3pHczBBRDF3cDFHQ3Bn",
        bg: "bg-white",
        text: "text-black",
    },
    {
        label: "TODAY AT APPLE",
        title: "Join free sessions at your Apple Store.",
        subtitle: "Learn about the latest features and how to go further with your Apple devices.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPM1ZnVFR5VGxOMG5WYlh6ZVpnWVpmOVNTeEZoVVBncVRqTkNMNS9uNklFcGdNL0tvRHFBWjFabEJvUTIxa3lDRWI2aER5OTZhZjhhVzlPaThxMkc0QVE",
        bg: "bg-[#f5f5f7]",
        text: "text-black",
    },
    {
        label: "BUSINESS",
        title: "From enterprise to small business, we’ll work with you.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=alV4a1Q5dWpXakxENUdPdUc5bk5oL3AvbkFpTUJaVTl5YXRNYno3eGE5aXFFMHhFSDhqV0JNYUQxSWJ4aDVUMm1td3JHMmlHM0d0VzBMMGs5ZHR4WjNqb1RJQWJGSnhVM2c1V3gzR1hhMHFHUTVhN1k1UDMwUiszWWU3d2JvUTc",
        bg: "bg-black",
        text: "text-white",
    },
];

const helpCard = [
    {
        title: "Apple Intelligence..Write, express yourself and get things done effortlessly.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-intelligence-202503_GEO_IN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDalZCM0g0MTRQL0NONjZoQUpUNEpyYmhneHZ1c05HY3JPVWptTEVEdXNQMENJWGJVR3BNa0NheTNxZUJ3blJNRk1mSGN3NTUxbDRHZDZXK1V3b1o4a1E2RHdqelF6Qlg1YkVIVk96WFZWanZRRXB6YUhNcms5Z1pYZXdkbUhocnBn",
        bg: "bg-white",
        text: "text-black",
    },
    {
        label: "APPLE TV+",
        title: "Get 3 months of Apple TV+ free when you buy an Apple device. Footnote °",
        subtitle: "Learn about the latest features and how to go further with your Apple devices.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-tv-services-202501?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=R0NBWk45ZjFvOUNHNjZCZ0VmMkVtQmxxSkhNcjROaFBiMC9VNFhXbTZEbjJtaE9nejNBS0FrclhJMVJoVXB1MUprY3crUWRsN1dqVjRnMHR5S1hVbkpBYlFNMGowS3c2TU9qWWl5QlRyM0FYbFJnR2k0ZWdRUjljQmlBTktwN3E",
        bg: "bg-[#f5f5f7]",
        text: "text-black",
    },
    {
        title: "Four Apple services. One easy subscription.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=WW05TjdlcC83b2p3NDlrR3ZVbk1xYmJOQmJzSVJ3UFJiNTcwZlp0V0h2dlNTMm5RTnVQcDVKVGwvVHBJTkp3VFN5aWNYUFpIbkFhdm03T3BzSjdVSThtd3k4VkkwQ2l3cXZ6cEkycldOaXl2REFGU3hIOFJyRWo1cXgzVWNKbGY",
        bg: "bg-black",
        text: "text-black",
    },
];

const footerLinks = [
    {
        title: "Shop and Learn",
        links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "Accessories"],
    },
    {
        title: "Services",
        links: ["Apple Music", "Apple TV+", "iCloud", "Apple One"],
    },
    {
        title: "Account",
        links: ["Manage Your Apple ID", "iCloud.com", "Apple Store Account"],
    },
    {
        title: "Apple Store",
        links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Financing", "Order Status"],
    },
    {
        title: "For Business",
        links: ["Apple and Business", "Shop for Business"],
    },
    {
        title: "Support",
        links: ["Apple Support", "Contact Support", "Repair", "Feedback"],
    },
];


function Content() {

    return (
        <>

            <div className="bg-slate-100 min-h-screen p-10 mt-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-500 p-4">
                        <span className="text-black font-bold">Store.</span> The best way to buy the products you love.
                    </h1>

                    <div className="mt-6 flex flex-col items-end space-y-4">

                        <div className="flex items-center space-x-2">
                            <img
                                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-earth-day-specialist-icon-202504_AV1?wid=70&hei=70&fmt=jpeg&qlt=90"
                                alt="Specialist"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                                <p className="text-gray-600">Need shopping help?</p>
                                <a href="#" className="text-blue-600 hover:underline">Ask a Specialist →</a>
                            </div>
                        </div>


                        <div className="flex items-center space-x-2">
                            <span className="text-xl">📍</span>
                            <div className="text-sm">
                                <p className="text-gray-600">Visit an Apple Store</p>
                                <a href="#" className="text-blue-600 hover:underline">Find one near you →</a>
                            </div>
                        </div>
                    </div>


                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                                <span className="text-sm mt-2">{product.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-500 mt-36 p-4">
                    <span className="text-black font-bold">The latest.</span> Take a look at what’s new right now..
                </h2>

                <div className="flex">
                    <div className="container mt-5 rounded-lg p-4 overflow-hidden relative">
                        <img
                            className="w-[399px] h-[450px] rounded-lg  hover:shadow-xl transform hover:-translate-y-2"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko" alt="image" />

                        <div className="absolute top-10 left-5 p-3 text-right rounded-bl-lg">
                            <p className="text-2xl font-bold">MacBook Air</p>
                            <p className="text-xl left-2 text-violet-900">Apple Intelligence</p>
                            <p className="text-xl">From ₹99,900.00</p>
                        </div>
                    </div>

                    <div className="container mt-5 rounded-lg p-4 overflow-hidden relative">
                        <img
                            className="w-[399px] h-[450px] rounded-lg   hover:shadow-xl transform hover:-translate-y-2"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkalNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R1lXVzNzT2dSajRTd2tFaEdoYUp2VnY1WVJVT21DTzBZRFlBTTZySFFMbHY" alt="image" />

                        <div className="absolute top-10 left-5 p-3 text-right text-white rounded-bl-lg">
                            <p className="text-2xl font-bold">iPhone 16 Pro</p>
                            <p className="text-xl left-2 text-violet-900">Apple Intelligence</p>
                            <p className="text-xl">From ₹99,900.00</p>
                        </div>
                    </div>


                    <div className="container mt-5 rounded-lg p-4 overflow-hidden relative ">
                        <img
                            className="w-[399px] h-[450px] rounded-lg   hover:shadow-xl transform hover:-translate-y-2"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4" alt="image" />


                        <div className="absolute top-10 left-5 p-3 text-right rounded-bl-lg">
                            <p className="text-2xl font-bold">iPad Air</p>
                            <p className="text-xl left-2 text-violet-900">Apple Intelligence</p>
                            <p className="text-xl">From ₹99,900.00</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold mt-10">
                    <span className="text-red-600 font-bold">Accessories.</span>{" "}
                    <span className="text-gray-500">
                        It’s not too late to put a bow on Mother’s Day.
                    </span>
                </h2>

                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth mt-4 ">
                    {accessories.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 bg-white rounded-xl shadow p-5 snap-start hover:shadow-xl transform hover:-translate-y-2"
                        >
                            {item.subtitle && (
                                <p className="text-sm text-orange-600 font-semibold mb-1">
                                    {item.subtitle}
                                </p>
                            )}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-44 w-auto mx-auto object-contain mb-4 "
                            />
                            <div className="flex justify-center space-x-2 mb-3">
                                {item.colors.map((color, i) => (
                                    <span
                                        key={i}
                                        className="w-3 h-3 rounded-full border"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <h3 className="text-md font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.price}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mt-10">
                    <span className="text-red-600">The Apple Store difference.</span>{" "}
                    <span className="text-gray-700">Even more reasons to shop with us.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  mx-auto mt-6 ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm p-5 text-center  hover:shadow-xl transform hover:-translate-y-2"
                        >
                            <div className="mb-3 flex justify-center">{item.icon}</div>
                            <p className="font-medium text-gray-900">
                                {item.title.includes(",") ? (
                                    <>
                                        <span className="text-red-600">{item.title.split(",")[0]},</span>
                                        {item.title.split(",")[1]}
                                    </>
                                ) : (
                                    <span className="text-red-600">{item.title}</span>
                                )}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>

                <section className="py-10 px-4">
                    <h2 className="text-2xl font-semibold text-center md:text-left mb-6">
                        <span className="text-black">Help is </span>
                        <span className="text-gray-500">
                            here. Whenever and however you need it.
                        </span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4">
                        {helpCards.map((card, index) => (
                            <div
                                key={index}
                                className={`rounded-xl overflow-hidden flex-1 min-w-[300px] relative ${card.bg} ${card.text}`}
                            >
                                <div className="relative">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-[399px] h-[450px] rounded-lg  hover:shadow-xl transform hover:-translate-y-2"
                                    />

                                    <div className="absolute top-0 left-0 right-0 bg-opacity-50 p-6">
                                        <p className="text-xs tracking-widest uppercase font-medium mb-1">
                                            {card.label}
                                        </p>
                                        <h3 className="text-lg font-semibold leading-snug">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="py-10 px-4">
                    <h2 className="text-2xl font-semibold text-center md:text-left mb-6">
                        <span className="text-black">The Apple experience </span>
                        <span className="text-gray-500">
                            Do even more with Apple products and services..
                        </span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4">
                        {helpCard.map((card, index) => (
                            <div
                                key={index}
                                className={`rounded-xl overflow-hidden flex-1 min-w-[300px] relative ${card.bg} ${card.text}`}
                            >
                                <div className="relative">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-[399px] h-[450px] rounded-lg  hover:shadow-xl transform hover:-translate-y-2"
                                    />

                                    <div className="absolute top-0 left-0 right-0 bg-opacity-50 p-6">
                                        <p className="text-xs tracking-widest uppercase font-medium mb-1">
                                            {card.label}
                                        </p>
                                        <h3 className="text-lg font-semibold leading-snug">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

                <div className="container p-10 mt-4">
                    <div>
                        <p className="mb-4 text-sm">
                             Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages
                        </p>

                        <p className="mt-4 text-sm">No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.</p>

                        <p className="mt-4 text-sm">Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card.</p>
                        {/* Link Grid */}
                        <div className="grid text-sm grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                            {footerLinks.map((section, idx) => (
                                <div key={idx}>
                                    <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
                                    <ul className="space-y-1">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <a href="#" className="hover:underline">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Bar */}
                        <div className="text-gray-500 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center text-xs">
                            <p className="mb-2 md:mb-0">
                                Copyright © 2025 Apple Inc. All rights reserved.
                            </p>
                            <ul className="flex flex-wrap gap-4 text-xs">
                                {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:underline">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default Content