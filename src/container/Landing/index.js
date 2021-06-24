import React, { Component } from 'react'
// import '../../assets/css/style.css'

class Landing extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a href="https://www.instagram.com/eras_tambing" className="logo navbar-brand"><span className="border border-3 my-border-color">ET.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" style={{color: "#2e3959 !important"}}></i>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <a href="https://www.instagram.com/eras_tambing" className="btn btn-utama">Hubungi Saya</a>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Landing
