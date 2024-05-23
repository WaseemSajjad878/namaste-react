import { useRouteError } from "react-router-dom"

const Error = ()=> {
    const {status, statusText} = useRouteError()
    // console.log(err);
    return(
        <div className="error">
            <h1>{status}: {statusText}</h1>
            
        </div>
    )
}

export default Error