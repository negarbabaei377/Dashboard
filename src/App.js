import {Home, List, New, Single, Login} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {userInputs, productInputs} from "./formSource";

function App() {
    return (
        <div className="dark">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index
                               element={<Home/>}/>
                    </Route>
                    <Route path="login"
                           element={<Login/>}/>
                    <Route path="users">
                        <Route index
                               element={<List/>}/>
                        <Route path="userId"
                               element={<Single/>}/>
                        <Route path="new"
                               element={<New inputs={userInputs} title='Add New User'/>}/>
                    </Route>
                    <Route path="products">
                        <Route path="new"
                               element={<New inputs={productInputs} title='Add New Product'/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
