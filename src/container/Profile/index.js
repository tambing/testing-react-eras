import React from 'react'
import myImage  from '../../assets/img/Erasmus.jpg'
import "@fortawesome/fontawesome-free/css/all.css"
// import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className="header-profile" style={{marginTop: "5%"}}>
            <div className="box-img">
                <img src={myImage} alt="Foto" />
                {/* <img src={require("../../assets/img/Erasmus.jpg").default} alt="Foto" /> */}
            </div>
            <div className="box-description">
                <h1 style={{paddingTop: "30px"}}>Hi, I'm</h1>
                <h1 style={{fontWeight: "bold"}}>Erasmus Tambing.</h1>
                <p>I'm a Fullstack Web Developer. I can build a website using PHP, Javascript, HTML, CSS. I'm Experienced using Laravel and Codeigniter Framework. For Database i'm experienced using MySQL.</p>
                <div className="social-icon">
                    {/* <Link to="https://www.linkedin.com/in/erasmus-tambing">
                        <i className="fab fa-linkedin"></i>
                    </Link> */}
                    <a href="https://www.linkedin.com/in/erasmus-tambing"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/tambing"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.instagram.com/eras_tambing"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://web.facebook.com/profile.php?id=100006762556382"><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>
        </div> 
    )
}

export default Profile;
