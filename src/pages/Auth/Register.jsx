import {Link, useLocation, useNavigate} from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import {useState} from "react"
import useAuth from "../../components/customHooks/useAuth"
import axios from "axios"
import {toast} from "react-hot-toast"
import Spinner from "../../components/Spinner"

const Register = () => {
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
            const response = await axios.post( `${ import.meta.env.VITE_REACT_APP_API }/api/v1/auth/register`, {email, password} )
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
            } else {
                setEmail( "" )
                setPassword( "" )
                toast.error( response.data.message )
                setPleaseWait( false )
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
            <Layout title={"Register || Co-worker"}>
                <div className="container w-100">
                    <div className="login-container w-100">
                        <h2 className="login-title">Register Here</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="custom-input-group">
                                <input type="text" id="username" name="username" required placeholder="Email" onChange={( e ) => setEmail( e.target.value )} />
                            </div>
                            <div className="custom-input-group">
                                <input type="password" id="password" name="password" required placeholder="Password" onChange={( e ) => setPassword( e.target.value )} />
                            </div>
                            {!pleaseWait && (
                                <div>
                                    <button type="submit" className="login-button">
                                        Register
                                    </button>

                                    <Link to={"/login"}>
                                        <button type="submit" className="login-button-outline">
                                            Login
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

export default Register
