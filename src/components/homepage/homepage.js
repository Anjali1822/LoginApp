

import React from "react";
import "./homepage.css";

const Homepage = ({setLoginUser}) =>{
    return(
        <div className="homepage">
            <h1>Welocome to our app</h1>
            <a href="https://logomaker-web-app.netlify.app/">
                <button className="button">Get Started</button>
            </a>
            {/* <div className="button" onClick={() => setLoginUser({})}> Logout</div> */}

        </div>
    )
}
export default Homepage;