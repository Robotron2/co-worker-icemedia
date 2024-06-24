import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"
import useAuth from "../customHooks/useAuth"
import Login from "../../pages/Auth/Login"

const PrivateRoute = () => {
	const [ok, setOk] = useState(false)
	const [auth] = useAuth()

	useEffect(() => {
		const authCheck = async () => {
			let res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/user-auth`)
			if (res.data.ok) {
				setOk(true)
			} else {
				setOk(false)
			}
		}
		if (auth?.token) {
			authCheck()
		}
	}, [auth?.token])

	return <>{ok ? <Outlet /> : <Login />}</>
}

export default PrivateRoute
