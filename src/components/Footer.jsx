import React from "react";

function Footer() {
    var date = new Date();
    var currentYear = date.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;


