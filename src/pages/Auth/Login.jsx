import {Link, useLocation, useNavigate} from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import {useState} from "react"
import axios from "axios"
import useAuth from "./../../components/customHooks/useAuth"
import {toast} from "react-hot-toast"

import Spinner from "../../components/Spinner"

const Login = () => {
    const [email, setEmail] = useState( "" )
    const [password, setPassword] = useState( "" )
    const navigate = useNavigate()
    const location = useLocation()
    const [auth, setAuth] = useAuth()
    const [pleaseWait, setPleaseWait] = useState( false )

    const handleSubmit = async ( e ) => {
        e.preventDefault()
        try {
            setPleaseWait( true )
            const response = await axios.post( `${ import.meta.env.VITE_REACT_APP_API }/api/v1/auth/login`, {email, password} )
            // console.log(response)
            if ( response && response.data.success ) {
                toast.success( response && response.data.message )
                setAuth( {
                    ...auth,
                    user: response.data.userData,
                    token: response.data.token
                } )
                localStorage.setItem( "auth", JSON.stringify( response.data ) )
                navigate( location.state || `/user/word` )
            }
        } catch ( error ) {
            setEmail( "" )
            setPassword( "" )
            setPleaseWait( false )
            toast.error( error.response.data.error )
            console.log( error.response.data.error )
        }
    }

    return (
        <>
            <Layout title={"Login || Co-worker"}>
                <div className="container w-100">
                    <div className="login-container w-100">
                        <h2 className="login-title">Login Here</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="custom-input-group">
                                <input type="text" placeholder="Email" onChange={( e ) => setEmail( e.target.value )} value={email} required />
                            </div>
                            <div className="custom-input-group">
                                <input type="password" placeholder="Password" onChange={( e ) => setPassword( e.target.value )} value={password} required />
                            </div>
                            {!pleaseWait && (
                                <div>
                                    <button type="submit" className="login-button">
                                        Login
                                    </button>

                                    <Link to={"/register"}>
                                        <button type="submit" className="login-button-outline">
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            )}
                            {pleaseWait && <Spinner />}
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login
