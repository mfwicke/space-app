import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    

    </div>
  );
}

export default App;
