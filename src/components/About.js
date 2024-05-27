import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className="About">
                <h1>About Page</h1>
                <UserClass name={"Fisrt"} />
            </div>
        )
    }
}

/*
- Parent Constructor
- Parent Render
  - Render Phase
  - First Constructor
  - First Render
  - Second Constructor
  - Second Render

  <Dom Update - In Single Batch>
  - Commit Phase
  - First ComponentDidMount
  - Second ComponentDidMount

*/

export default About
