import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login";
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Layout from "./components/layout/Layout";
import { productInputs, userInputs } from "./formsource";
function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>



          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>

            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":prodId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
