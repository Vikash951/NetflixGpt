
import Browse from "./Browse";
import Login from "./Login";
import { BrowserRouter,Routes , Route } from "react-router";


const Body = () =>{

    

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path = "/" element = {<Login />} />
                    <Route path = "/browse" element = {<Browse />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Body;