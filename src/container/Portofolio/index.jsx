import React from 'react'

const Portofolio = () => {
    return (
        <div className="container">
            <div className="row ustify-content-center">
                <div className="my-portofolio">
                    <div className="portofolio">
                        <div className="head-portofolio">
                            <h5><span className="badge ">Portofolio</span></h5>
                        </div>
                        <div className="content-portofolio">
                            <h3>Aplikasi Seleksi Jalur mandiri</h3>
                            <h5 style={{paddingLeft: "10px"}}><span className="badge ">2020</span></h5>
                            <p>Aplikasi seleksi jalur mandiri merupakan aplikasi yang
                            digunakan untuk melakukan seleksi mahasiswa baru jalur
                            mandiri di Politeknik Negeri Ujung pandang</p>
                        </div>
                        <div className="content-portofolio">
                            <h3>Aplikasi Pemilihan Ketua Himpunan</h3>
                        <h5 style={{paddingLeft: "10px"}}><span className="badge">2020</span></h5>
                        <p>Aplikasi pemilihan Ketuan Himpunan merupakan aplikasi
                            yang digunakan pada proses pemilihan Ketua Himpunan
                            Mahasiswa Elektro Politeknik Negeri Ujung Pandang. Aplikasi
                            ini juga digunakan pada pemilihan Ketua Computer Network
                            Comunity (CNC).</p>
                        </div>
                        <div className="content-portofolio">
                            <h3>Aplikasi PELET</h3>
                            <h5 style={{paddingLeft: "10px"}}><span className="badge bg-secondary">2020</span></h5>
                        <p>Aplikasi PELET merupakan rancangan aplikasi menggunakan
                            perangkat elektronik dan aplikasi dalam bentuk aplikasi web
                            dan aplikasi android yang dapat digunakan untuk melakukan
                            pemilihan umum di Indonesia</p>
                        </div>
                    </div>
                    <div className="img-portofolio">
                        <img className="img-a" src={require("../../assets/img/mandiri.png").default} alt="Mandiri" />
                        <img className="img-b" src={require("../../assets/img/mandiri.png").default} alt="Mandiri" />
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Portofolio
