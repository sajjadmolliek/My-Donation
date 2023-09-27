import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='flex justify-between items-center mt-5 px-2 py-6 mx-auto max-w-[1350px]'>
            <div>
                <img className='md:w-[90%] w-[80%]' src="./Logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className='flex gap-4 md:gap-10 font-semibold'>
                    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-red-400 underline" : ""}>Home</NavLink></li>
                    <li><NavLink to="/donations" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-red-400 underline" : ""}>Donation</NavLink></li>
                    <li><NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-red-400 underline" : ""}>Statistics</NavLink></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
