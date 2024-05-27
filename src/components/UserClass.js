import React from "react"

// let interval;
class UserClass extends React.Component{
    constructor(props){
       super(props);
       this.state = {
         userInfo: {
            name: 'Dummy',
            location: 'Default'
         }
       }
    }
   async componentDidMount(){
        const data = await fetch('https://api.github.com/users/akshaymarch7')
        const json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log(json);
       this.interval= setInterval(()=> {
            console.log('set Interval');
        },1000)
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
       clearInterval(this.interval)
        console.log("component user class will Unmount");
    }
    render(){
        // const {name} = this.props
        const {name , location , avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <button onClick={()=> {
                    // never update state variable directly use setState
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>
                     Click Me
                </button> */}
                <img src={avatar_url} alt="" />
                <h2>
                    Name: {name}
                </h2>
                <h3>
                    Location: {location}
                </h3>
                <h4>
                    Contact: @akshaymarch7
                </h4>
            </div>
         )
    }
}

export default UserClass


/*

--Mounting--

Constructor(dummy)

render(dummy)
  <HTML Dummy>

  Component Did Mount
    <API Call>
    <this.setState>

  ---- UPDate
  render (api Data)
  
  Compnent Did Update

*/