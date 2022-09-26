import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login";
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Layout from "./components/layout/Layout";
import { productInputs, userInputs } from "./formsource";
import "./style/dark.scss"
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector(state => state.mode)
  const { authData } = useSelector(state => state.auth)




  return (
    <div className={darkMode ? "app dark" : "app"}>



      <Layout>

        <Routes>


          <Route path="/">
            <Route index element={authData !== null || localStorage.getItem("profile") ? <Home /> : <Navigate replace to="/login" />} />

            <Route path="login" element={authData !== null || localStorage.getItem("profile") ? <Navigate replace to="/" /> : <Login />} />
            <Route path={"users"}>
              <Route index element={authData !== null || localStorage.getItem("profile") ? <List /> : <Navigate replace to="/login" />} />
              <Route path=":userId" element={authData !== null || localStorage.getItem("profile") ? <Single /> : <Navigate replace to="/login" />} />
              <Route path="new" element={authData !== null || localStorage.getItem("profile") ? <New inputs={userInputs} title="Add New User" /> : <Navigate replace to="/login" />} />
            </Route>

          </Route>
          <Route path="products">
            <Route index element={authData !== null || localStorage.getItem("profile") ? <List /> : <Navigate replace to="/login" />} />
            <Route path=":userId" element={authData !== null || localStorage.getItem("profile") ? <Single /> : <Navigate replace to="/login" />} />
            <Route path="new" element={authData !== null || localStorage.getItem("profile") ? <New inputs={productInputs} title="Add New Product" /> : <Navigate replace to="/login" />} />
            {/* <Route index element={<List />} />
            <Route path=":prodId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} /> */}
          </Route>
        </Routes>
      </Layout>

      <Toaster />
    </div>
  );
}

export default App;
