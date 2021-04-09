function Footer(){
    return <footer className="page-footer purple darken-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} CyberMavka
                <a className="grey-text text-lighten-4 right" href="https://github.com/CyberMavka/MovieTop">More link repo</a>
            </div>
        </div>
    </footer>
};

export {Footer};