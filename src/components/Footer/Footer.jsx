import "./Footer.scss";
import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/footer/facebook.png";
import twitter from "../../assets/img/footer/twitter.png";
import instagram from "../../assets/img/footer/instagram.png";
import youtube from "../../assets/img/footer/youtube.png";

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-content">
                    <div class="company-info">
                        <img src={logo} alt="FuGo" />
                        <p>
                            Our company always tries our best to help you get closer to your
                            dream. Contact us now to get the best job.
                        </p>
                        <div class="social-icons">
                            <img src={facebook} alt="facebook icon" class="facebook" />
                            <img src={twitter} alt="twitter icon" class="twitter" />
                            <img src={instagram} alt="instagram icon" class="instagram" />
                            <img src={youtube} alt="youtube icon" class="youtube" />
                        </div>
                    </div>
                    <div class="footer-links">
                        <div>
                            <h5>Company</h5>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Mobile</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="#">Why choose us?</a></li>
                                <li><a href="#">Partner with us</a></li>
                                <li><a href="#">FAQ's</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>Meet Us</h5>
                            <p>0376363141</p>
                            <p>info@traviog.com</p>
                            <p>205, R Street, New York BD23200</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;