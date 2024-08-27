import "./App.css";
import React, { Suspense } from "react";
import useUA from "./context/UAContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UAGenerator from "./components/UAGenerator/UAGenerator";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const { userAgents } = useUA();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {userAgents.length > 100 && <ProgressBar />}
      <Header />
      <UAGenerator />
      <Footer />
    </Suspense>
  );
}

export default App;
