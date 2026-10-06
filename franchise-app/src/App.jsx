// import Appsample from "./Appsample";
// import Admin from "./components/Adminhome";

import { Route, Routes } from "react-router-dom";

import Adminhome from "./pages/Adminhome";
import AdminReview from "./pages/Adminreview";
import LandingPage from "./pages/Homepage";
import Locationsurvey from "./pages/Locationsurvey";
import SignUp from "./pages/Signupfranchise";
import RootLayout from "./components/Rootlayout";

// rootLayout
function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/admin" element={<Adminhome />} />
          <Route path="/admin/review" element={<AdminReview />} />
          <Route path="/admin/survey" element={<Locationsurvey />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
