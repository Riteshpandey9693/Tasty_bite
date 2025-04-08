import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default location"
        
            }
        }
    }
        async componentDidMount() {
            const data = await fetch("https://api.github.com/users/akshaymarch7");
            const json = await data.json();
            console.log(json)

            this.setState({
                userInfo: json,
            })
        }
        componentDidUpdate() {
            console.log("ComponentDidUpdate called");
        }
    
    render() {

        const {name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="User">
                <img src={avatar_url} alt=""  height={200} width={200}/>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: @akshamarch7</h4>
            

                </div>
            )
    }
}
export default UserClass;