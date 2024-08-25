import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Itemsection from "../components/itemsection";


const Home = () => {
    const items= useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Itemsection items={items}></Itemsection>
        </div>
    );
};

export default Home;