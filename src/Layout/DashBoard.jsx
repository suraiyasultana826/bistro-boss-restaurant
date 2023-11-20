import { FaAd, FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">


                    {
                        isAdmin ? <>

                            <li>

                                <NavLink to='/dashboard/adminHome'>   <FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils>Add Items</NavLink></li>

                            <li><NavLink to='/dashboard/bookings'>
                                <FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/users'>
                                <FaUsers></FaUsers>All Users</NavLink></li>

                        </>
                            :
                            <>

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
                            </>
                    }
                    {/* shared navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>   <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'><FaEnvelope></FaEnvelope>Contact</NavLink>
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