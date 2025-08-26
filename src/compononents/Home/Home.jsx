import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {



    return (
        <div className="flex-col w-7xl mx-auto">
            <h1 className="text-2xl my-5 text-center">This is home page</h1>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;