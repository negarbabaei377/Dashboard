import {Navbar} from "./navbar/Navbar";
import {Sidebar} from "./sidebar/Sidebar";

export const Layout = ({children}) => {
    return (
        <div style={{display:'flex', width:'100%'}}>
            <Sidebar/>
            <div style={{flex:'6'}}>
                <Navbar/>
            {children}
            </div>
        </div>
    );
};

