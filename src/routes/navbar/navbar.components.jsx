import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navbar.styles.scss'

import { UserContext } from "../../components/context/userContext.context";

const NavBar = () => {
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)

    return (
        <Fragment>
            <div className="nav">
                <Link className="nav-logo" to={'/'}>
                    <CrwnLogo className="logo"></CrwnLogo>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>
                        <div>Shop</div>
                    </Link>
                    <Link className="nav-link" to={'/auth'}>
                        <div>Sign-In</div>
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default NavBar