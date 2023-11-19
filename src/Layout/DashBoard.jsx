import { FaAd, FaCalendarAlt, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">


                    <li>

                        <NavLink to='/dashboard/userHome'>   <FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'>
                        <FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>

                    <li><NavLink to='/dashboard/review'>
                        <FaAd></FaAd>Add a  Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'>
                        <FaList></FaList>My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>   <FaHome></FaHome> Home</NavLink>
                        </li>
                    <li>
                        <NavLink to='/order/salad'><FaSearch></FaSearch> Menu</NavLink>
                        </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;