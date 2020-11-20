import React from "react";
import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import { Dashboard } from "./pages/entry/dashboard/Dashboard.page";

import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
