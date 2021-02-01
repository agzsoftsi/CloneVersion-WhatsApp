import React from "react";
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming comvention
    <div className="App">
     <div className="app_body">
       <Sidebar />
      {/*<Sidebar />*/}
      {/* Chat */}

     </div>
    </div>
  );
}

export default App;
