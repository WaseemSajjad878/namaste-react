import User from "./User"
import UserClass from "./UserClass"

export const About = () => {
    return (
        <div className="About">
            <h1>About Page</h1>
            <User />
            <UserClass name={"Akshay Saini (Class Base)"} />
        </div>
    )
}

export default About