import { Link } from "react-router-dom";
import { utilityFuntions } from "../utils/module";
import { useNavigate } from "react-router-dom";
function AdminHeader() {
    const navigate = useNavigate();

    const adminLogout = (e) => {
        e.preventDefault();
        
        // Clear provider-specific cookies and localStorage
        utilityFuntions.removeCookie('adminAuthToken'); // Assuming this function exists in your utility functions
        localStorage.removeItem('adminAuthToken'); // Optional, in case you're using both cookies and localStorage

        // Optionally, you may want to dispatch an event or update some global state to notify the app of the logout
        window.dispatchEvent(new Event('storage')); // Triggers a re-render in layouts that are listening to storage events

        // Redirect the provider to the login page or homepage
        navigate('/signin'); // You can adjust this to the correct route for provider login
    };
    return (
        <>
            <header className="main-header main-header--dark">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <a href="index.html"><img src="/assets/images/resources/logo-3.png" alt="" /></a>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <div className="main-menu__main-menu-box-inner">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                        <ul className="main-menu__list">
                                            {/* <li className="dropdown current">
                                                <a href="index.html">Home </a>
                                                <ul>
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index2.html">Home Two</a></li>
                                                    <li><a href="index3.html">Home Three</a></li>
                                                    <li><a href="index-rtl.html#googtrans(en%7Car)">Home RTL</a></li>
                                                    <li><a href="index-boxed.html">Home Boxed</a></li>
                                                    <li className="dropdown">
                                                        <a href="#">Header Styles</a>
                                                        <ul>
                                                            <li><a href="index.html">Header One</a></li>
                                                            <li><a href="index2.html">Header Two</a></li>
                                                            <li><a href="index3.html">Header Three</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link to="/admin">Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link to="change-pass-admin">Change Password</Link>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">ManageAdmin</a>
                                                <ul>
                                                    <li><Link to="view-admin">View Admin</Link></li>
                                                    <li><Link to="create-admin">Create Admin</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">ManageCategories</a>
                                                <ul>
                                                    <li><Link to="create-category">Create New Category</Link></li>
                                                    <li><Link to="view-category">View Category</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Manage Sub-Categories</a>
                                                <ul>
                                                    <li><Link to="add-subcategory">Create New Sub-Category</Link></li>
                                                    <li><Link to="view-subcategory">View Sub-Category</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Manage Places</a>
                                                <ul>
                                                    <li><Link to="create-state">Add State</Link></li>
                                                    <li><Link to="view-state">View State</Link></li>
                                                    <li><Link to="create-city">Create City</Link></li>
                                                    <li><Link to="view-city">View City</Link></li>
                                                </ul>
                                            </li>
                                             <li>
                                                <Link to="show-providers">View Providers</Link>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">About Us</a>
                                                <ul>
                                                <li><Link to="about-us">About Us</Link></li>
                                                <li><Link to="company-history">Company History</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Bookings</a>
                                                <ul>
                                                <li><Link to="confirm-booking-admin">confirmed Bookings</Link></li>
                                                    <li><Link to="completed-booking-admin">Completed Bookings</Link></li>
                                                    <li><Link to="view-booking-cancel">Canceled Bookings</Link></li>
                                                </ul>
                                            </li>
                                            {/* <li className="dropdown">
                                                <a href="#">Projects</a>
                                                <ul>
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="appointment.html">Appointment</a></li>
                                                    <li><a href="coupons-and-offers.html">Coupons Offer</a></li>
                                                    <li><a href="finance.html">Finance</a></li>
                                                    <li><a href="prices.html">Prices</a></li>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="dropdown">
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <Link to="contact-us">Contact Us</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="main-menu__search-nav-sidebar">
                                        <div className="main-menu__search-box">
                                        <button className="ntn btn-danger btn-sm ms-2" onClick={adminLogout}>Logout</button>
                                            {/* <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a> */}
                                        </div>
                                        <div className="main-menu__side-content-icon">
                                            <a className="navSidebar-button" href="#">
                                                <span className="icon-dots-menu-1"></span>
                                                <span className="icon-dots-menu-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-menu__right">
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="main-menu__call-content">
                                        <p className="main-menu__call-sub-title">Need help? Talk to an expert</p>
                                        <h4 className="main-menu__call-number"><a href="tel:18003660089">+91 798 ( 676) 7032</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="stricky-header stricked-menu main-menu main-header--dark">
                <div className="sticky-header__content"></div>
            </div>
        </>
    )
}

export default AdminHeader;