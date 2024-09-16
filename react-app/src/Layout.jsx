import App from "./App";

import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
          <div className = 'canvas'>
            <div className = 'flexdiv-v'>
                <div className="flexdiv-h">
                    <Navbar />
                </div>
                <main>
                    <div className = 'flexdiv-h'>                    
                        <Outlet />
                    </div>
                </main>                                       
            </div>
          </div>        
        </>
    )
}