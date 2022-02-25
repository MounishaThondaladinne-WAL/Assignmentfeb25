import { useEffect, useState } from "react";
import axios from "axios";
const RandomActivity = () => {
    let [val, setRandomactivity] = useState([]);
    useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity").then((res) => {
            console.log(res.data);
            setRandomactivity(res.data)
        })
    }, [])
    return (
        <div className="Main-div">
            <h1>ACTIVITY</h1>
            <div>
                <div className="inside-div">
                <p className="sideHeading">Activity : </p>
                <p className="Content">{val.activity}</p>
                </div>
                <div className="inside-div"> 
                <p className="sideHeading">Type : </p>
                <p className="Content">{val.type}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Number of Paticipants : </p>
                <p className="Content">{val.participants}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Entry Fee :  </p>
                <p className="Content">{val.price}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Link : </p>
                <p className="Content">{val.link}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Key : </p>
                <p className="Content">{val.key}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Accessibility :  </p>
                <p className="Content">{val.accessibility}</p>
                </div>
            </div>
        </div>
    )
}
export default RandomActivity;