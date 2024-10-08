import "../Assets/notfound.css";
import hulk from "../Assets/hulk.jpg";

function Not_Found(){
    return(
        <>
            <div className="not-found">
                <div id="text">
                    <h1>404</h1>
                    <h1>Not Found</h1>
                </div>
                <img src={hulk} alt="" srcset="" id="strange"/>
            </div>
        </>
    )
}
export default Not_Found;