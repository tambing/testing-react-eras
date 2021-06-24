import React from 'react'

export const Achievement = () => {
    return (
        <div className="tab-other achievement" id="achievement" style={{display: `block`}}>
            <div className="content-tab">
                <h3>Aplikasi Seleksi Jalur mandiri</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">2020</span></h5>
                    <p>Aplikasi seleksi jalur mandiri merupakan aplikasi yang
                    digunakan untuk melakukan seleksi mahasiswa baru jalur
                    mandiri di Politeknik Negeri Ujung pandang</p>
                <div className="galeri">
                    <img src={require("../../assets/img/achievement.jpg").default} alt="" />
                    <img src={require("../../assets/img/achievement2.jpg").default} alt="" />
                    <img src={require("../../assets/img/achievement3.jpg").default} alt="" />
                    <img src={require("../../assets/img/achievement4.jpg").default} alt="" />
                </div>
            </div>
        </div>
    )
}

export const Organization = () => {
    return (
        <div className="tab-other organization" id="organization" style={{display: "none"}}>
            <div className="content-tab">
                <h3>Computer & Network Comunity</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">2019 - 2020</span></h5>
                <h4>Posisi : Ketua 2</h4>
            </div>
            <div className="content-tab">
                <h3>Seminar Internet Aman dan Sehat</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">2018</span></h5>
                <h4>Posisi : Koordinator</h4>
            </div>
    
        </div>
    )
}

export const Certification = () => {
    return (
        <div className="tab-other certification" id="certification" style={{display: "none"}}>
            <div className="content-tab">
                <h3>English Soft Skills Training</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">Kominfo</span></h5>       
            </div>
            <div className="content-tab">
                <h3>Sertifikat Pelatihan VSGA DigitalTalent</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">Kominfo</span></h5>
            </div>
            <div className="content-tab">
                <h3>Sertifikat penyelesaian kursus React</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">Progate</span></h5>
            </div>
            <div className="content-tab">
                <h3>Belajar Membuat Aplikasi Android untuk Pemula</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">Dicoding</span></h5>
            </div>
            <div className="content-tab">
                <h3>Belajar Membuat Aplikasi Android Pemula</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">Dicoding</span></h5>
            </div>
            <div className="content-tab">
                <h3>Web Programing</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">BNSP</span></h5>
            </div>
            <div className="content-tab">
                <h3>Network Technical Support</h3>
                <h5 style={{paddingLeft: "10px"}}><span className="badge ">BNSP</span></h5>
            </div>
        </div>
    )
}
