/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ getCard }) => {
    const initialTotalDonation = 12;
    const [totalDonation, setTotalDonation] = useState(initialTotalDonation);
    const [yourDonation, setYourDonation] = useState(0);

    // Update your donation whenever getCard length changes
    useEffect(() => {
        const newYourDonation = getCard.length;
        setYourDonation(newYourDonation);

        // Calculate the remaining total donation
        const remainingTotalDonation = initialTotalDonation - newYourDonation;
        setTotalDonation(remainingTotalDonation);
    }, [getCard]);
    // Update your donation whenever getCard length changes

    const data = [
        { name: 'Your Donation', value: yourDonation },
        { name: 'Remaining Donation', value: totalDonation },
    ];

    const COLORS = ['#00C49F', 'tomato'];

    return (
        <div className="w-full lg:w-2/3 mx-auto">
        <ResponsiveContainer width="90%" height={600}>
            <PieChart >
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    fill="#8884d8"
                    label={({percent }) => `${(percent * 100).toFixed(2)}%` }
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                
                <Tooltip />
                <Legend />
            </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
