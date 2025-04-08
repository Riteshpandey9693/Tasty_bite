import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    
    componentDidMount() {
        console.log("Parent ComponentDidMount is called");
    }
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is namste React Web series</h2>
                <UserClass name={"Akshay Saini (Class)"} location={"Dehradun class"}></UserClass>
            </div>
        )
    }
    
};

export default About;