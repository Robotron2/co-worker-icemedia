import Header from "./Header"
import Footer from "./Footer"
import {Helmet} from "react-helmet"
import {Toaster} from "react-hot-toast"

// eslint-disable-next-line react/prop-types
const Layout = ( {children, title, description, keywords, author} ) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <Toaster />
            <main className="">{children}</main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Co-Worker Booking",
    description: "Mern Stack Project",
    keywords: "mern, mongodb, node, react, dictionary",
    author: "Theophilus"
}

export default Layout
