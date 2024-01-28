import React, { useState } from "react";

const ABOUT = () => {
    const [tabName, setTabName] = useState("KEC");

    const handleCollegeUpdate = () => {
        setTabName("Kongu Engineering College");
    };

    return (
        <div>
            <h1>This is your About Page</h1>
            <h1>Welcome to {tabName}</h1>
            <button onClick={handleCollegeUpdate}>Update College name</button>
        </div>
    );
};

export default ABOUT;

