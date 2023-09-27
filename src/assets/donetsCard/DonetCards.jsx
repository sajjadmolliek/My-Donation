
import { NavLink, useLoaderData } from 'react-router-dom';

const DonetCards = () => { // Include "textValue" in the destructuring
    const donets = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-16 mx-4 md:mx-16 -mt-10">
            {donets?.map(donate => (
                <div key={donate?.id}>
                    <NavLink to={`/${donate.id}`}>
                        <div className="card card-compact md:w-80 shadow-xl" style={{ backgroundColor: donate?.card_bg_color }}>
                            <img src={donate?.picture} alt="Shoes" />
                            <div className="card-body">
                                <div className="card-actions justify-start">
                                    <button className="btn font-bold border-0"
                                        style={{ backgroundColor: donate?.card_bg_color, color: donate?.text_color }}>{donate.category}</button>
                                </div>
                                <h2 className="card-title" style={{ color: donate?.text_color }}>{donate?.title}</h2>
                            </div>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    );

};



export default DonetCards;
