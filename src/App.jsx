import {Route, Routes} from "react-router-dom"
import "./App.css"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import PrivateRoute from "./components/Routes/PrivateRoute"

function App () {
    return (
        <>
            <Routes>

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />

                <Route path="/user" element={<PrivateRoute />}>
                    {/* <Route path="word" element={<Word />} />
                    <Route path="history" element={<History />} />
                    <Route path="history/:word" element={<HistorySearch />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default App
