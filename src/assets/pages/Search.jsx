import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Search = ({ data, donetsData }) => {



    const lowercasedData = data.toLowerCase();

    const matchingData = donetsData.filter((item) => item.category.toLowerCase().includes(lowercasedData));


    if(matchingData.length>0){
        return (
            <div className="flex justify-center items-center flex-wrap gap-10 my-20">
                {matchingData?.map(donate => (
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
    }
    else{
        return(
            <div className=' text-center font-bold text-4xl my-24'>No Data Match</div>
        )
    }
};

Search.propTypes = {
    donetsData: PropTypes.array.isRequired,
    data: PropTypes.string.isRequired,
};
export default Search;