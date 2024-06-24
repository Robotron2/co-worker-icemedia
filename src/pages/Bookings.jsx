import Layout from '../components/Layouts/Layout'

const Bookings = () => {
    return (

        <Layout title={"Login || Co-worker"}>
            <div className="container w-100">
                {/* <div className="login-container w-100">
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
        </div> */}
            </div>
        </Layout>
    )
}

export default Bookings
