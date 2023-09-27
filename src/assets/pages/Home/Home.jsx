import '/src/Header/Banner.css';
import DonetCards from "../../donetsCard/DonetCards";
import { useState } from 'react';
import Search from '../Search';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const donetsData = useLoaderData();
    const [data, setData] = useState("null")

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(e.target.name.value);
    }

    return (
        <div>
            <div className="banner-container">
                <div className="bg-image"></div>
                <div className="content">
                    <h1 className="text-2xl md:text-4xl text-center pt-48 font-bold block">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center pt-10 pb-64">
                        <input id='inputField'
                            className="h-12 w-80 border rounded-lg p-4"
                            type="text"
                            placeholder='Search here....'
                            name= "name"
                        />
                        <input type="submit" value={"Search"} className="btn text-white bg-red-500 border-0" />
                    </form>
                </div>
            </div>
            <div >
                {(data === "null")?<DonetCards ></DonetCards>: <Search data={data} donetsData={donetsData}></Search>}

            </div>
        </div>
    );
};

export default Home;
