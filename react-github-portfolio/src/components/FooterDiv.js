import React from "react";
import "./styles/styles.css"

export default function FooterDiv() {
    return (
        <section>
            <h2>Contact Information</h2>
            <div className="footer">
                <address className="footer">
                    <a href="tel:+16476256051">647-625-6051</a>
                    <a href="mailto:Gsynnott257@gmail.com">Gsynnott257@gmail.com</a>
                    <a href="https://github.com/GSynnott">GitHub</a>
                </address>
            </div>
        </section>
    );
}