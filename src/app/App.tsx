import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/users/pages/Home";
import User from "./features/users/pages/User";
import ThemeProvider from "./shared/providers/ThemeProvider";
import Layout from "./shared/components/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="user" element={<User></User>}>
              <Route path=":id" element={<User></User>}></Route>
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
