import React from "react";
import {Link} from "react-router-dom";
import './HomePage.scss';
import {useSelector} from "react-redux";
import {userSelector} from "../../../selectors/selectors";

export default function HomePage() {
    const user = useSelector(userSelector);

    return (<div className="home-page">
        <nav>
            { user != null
                ? (<div>
                    <p>{user?.email}</p>
                    <Link to="/auth/logout">logout</Link>
                </div>)
                : (<Link to="/auth/login">Login</Link>)
            }
        </nav>
    </div>);
}