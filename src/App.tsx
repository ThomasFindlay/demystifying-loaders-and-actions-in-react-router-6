import { Suspense } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
