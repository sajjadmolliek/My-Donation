import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Donations = () => {
    const [getCard, setGetCard] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        const getCardItems = JSON.parse(localStorage.getItem("card"));
        setGetCard(getCardItems);
    }, []);

   
    if (getCard === null) {
        return (
            <h1 className="text-center mt-56 text-2xl font-bold">No Data Found</h1>
        )
    }
    // Render items when getCard length is less than 4
    else if (getCard.length < 4) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-16 my-24">
                {getCard && getCard?.map((donate) => (
                    <div key={donate?.id}>
                        <div className="card card-compact shadow-xl">
                            <div className="card card-side shadow-xl flex-col lg:flex-row" style={{ backgroundColor: donate?.card_bg_color }}>
                                <img src={donate?.picture} alt="Shoes" />
                                <div className="card-body">
                                    <div className="card-actions justify-start">
                                        <button className="py-1 px-2 rounded-lg text-xs font-bold border-0" style={{ backgroundColor: donate?.card_bg_color, color: donate?.text_color, }}>
                                            {donate.category}
                                        </button>
                                    </div>
                                    <h2 className=" font-bold text-2xl">{donate?.title}</h2>
                                    <p className="font-bold" style={{ color: donate?.text_color }} >{donate.price}</p>
                                    <div className="card-actions justify-start">
                                        <NavLink to={`/${donate.id}`}><button className="btn font-bold border-0" style={{ backgroundColor: donate?.text_color, color: "white", }}>View Details</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Render items with "Show More" button when getCard length is 4 or more
    else {
        return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-16 my-24">
                    {getCard && getCard?.slice(0, itemsToShow).map((donate) => (
                        <div key={donate?.id}>
                            <div className="card card-compact shadow-xl">
                                <div className="card card-side shadow-xl flex-col lg:flex-row" style={{ backgroundColor: donate?.card_bg_color }}>
                                    <img src={donate?.picture} alt="Shoes" />
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="py-1 px-2 rounded-lg text-xs font-bold border-0" style={{ backgroundColor: donate?.card_bg_color, color: donate?.text_color, }}>{donate.category}</button>
                                        </div>
                                        <h2 className="font-bold text-2xl">{donate?.title}</h2>
                                        <p className="font-bold" style={{ color: donate?.text_color }}>{donate.price}</p>
                                        <div className="card-actions justify-start">
                                            <NavLink to={`/${donate.id}`}><button className="btn font-bold border-0" style={{ backgroundColor: donate?.text_color, color: "white", }}>View Details</button></NavLink>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {itemsToShow < getCard.length && (
                    <div className="flex justify-center items-center">
                        <button className="btn btn-accent w-32 mb-10 text-white" onClick={() => setItemsToShow(itemsToShow + 5)}>
                            Show More
                        </button>
                    </div>
                )}
            </div>
        );
    }
};

export default Donations;
