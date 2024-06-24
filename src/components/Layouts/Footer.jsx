const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="footer">&copy; {year} Co-Bookings</div>
        </>
    )
}

export default Footer
