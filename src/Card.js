const Card = props => {
    return (
        <div className="Main-div">
            <h1>User Details</h1>
       
            <div>
            <div className="inside-div"><p className="sideHeading">ProfilePicture : </p>
            <p className="Content"> <img alt="avatar" 
            src={props.avatar_url}  className=" Profile_Picture" /></p>
            </div>
            <div className="inside-div">
                <p className="sideHeading">Name : </p>
                <p className="Content">{props.name}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Blog : </p>
                <p className="Content">{props.blog}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Company : </p>
                <p className="Content">{props.company}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Location : </p>
                <p className="Content">{props.location}</p>
                </div>
                <div className="inside-div">
                <p className="sideHeading">Bio: </p>
                <p className="Content">{props.bio}</p>
                </div>
            </div>
        </div>
    )
}
export default Card