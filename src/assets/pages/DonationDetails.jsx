/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const DonationDetails = () => {

    // fetch the clicked Data
    const { id } = useParams();
    const [takeData, setTakeData] = useState([])
    const donetsData = useLoaderData();

    useEffect(() => {
        const findData = donetsData.find(data => data.id === id);
        if (findData) {
            setTakeData(findData);
        }
    }, [id, takeData])




    // localStorage set Items function
    const clickCard = (donate) => {
        const newArray = [];

        const cardItems = JSON.parse(localStorage.getItem('card'));

        if (!cardItems) {
            newArray.push(donate);
            localStorage.setItem('card', JSON.stringify(newArray));
            swal("Success!", "You Successfully Donate!", "success");
        }
        else {

            const isExist = cardItems.find(card => card.id === donate.id)
            if (!isExist) {
                newArray.push(...cardItems, donate);
                localStorage.setItem('card', JSON.stringify(newArray))
                swal("Success!", "You Successfully Donate!", "success");
            }
            else {
                swal("Error!", "This is Already Exist!", "error");
            }

        }
    }


    return (
        < >
            <div className='flex flex-col justify-center items-center mx-auto max-w-[1350px]'>
                <img className='w-[100%] max-h-screen' src={takeData?.picture} alt="Shoes" />
                <div className='bg-[#2F2927] opacity-80 p-5 -mt-[88px] w-full flex justify-start'>
                    <NavLink><button onClick={() => clickCard(takeData)} className="px-10 ml-10  rounded-lg py-3 font-bold  border-0" style={{ backgroundColor: takeData?.text_color, color: "white" }}>Donate {takeData.price}</button></NavLink>
                </div>
            </div>
            <div className='mx-auto max-w-[1350px] my-20  text-justify'>
                <h2 className="card-title my-8 font-bold text-3xl block">{takeData?.category}</h2>
                <p>{takeData.description}</p>
            </div>
        </>
    );
};

DonationDetails.propTypes = {
    donets: PropTypes.array.isRequired,
};

export default DonationDetails;