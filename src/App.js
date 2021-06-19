import Sidebar from "./layout/Sidebar";
import Dashboard from "./layout/Dashboard";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="container-fluid d-flex vh-100 text-center">
        <Sidebar />
        <Dashboard/>
      </div>
      
    </Fragment>
    
  );
}

export default App;
