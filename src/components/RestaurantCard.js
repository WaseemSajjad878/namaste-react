
const RestaurantCard = ({ resData }) => {
    const { resName, quizeen , rating } = resData
    console.log(resData);
    return (
        <div className="res-card">
            <h3>
                {resName}
            </h3>
            <h4>
                {quizeen}
            </h4>
            <h4>
                {rating} stars
            </h4>
            <h4>
                38 minutes
            </h4>
        </div>
    )
}


export default RestaurantCard