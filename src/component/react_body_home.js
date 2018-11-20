
import React from 'react';



class Home extends React.Component{
    render() {
        return (
        <div>
            <div id="carousels" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#carousels" data-slide-to="0" className="active"></li>
                    <li data-target="#carousels" data-slide-to="1"></li>
                    <li data-target="#carousels" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/static/images/web_banner_homepage_01.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/static/images/web_banner_homepage_02.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/static/images/web_banner_homepage_03.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousels" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#carousels" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        <div className="container text-center">
            <div className='row content'>
                <div className='col-sm-2 sidenav'></div>
                <div className='col-sm-8 text-center'>
                    <div className='col-sm' style={{paddingTop: '50px'}}>
                        <div className='row'>
                            <div className='col-6'> 
                                <div className='col-sm'><p className='text-left'>VIRTUAL</p></div>
                                <div className='col-sm'><p className='text-rigth'>RUN</p></div>
                                <div className='col-sm' style={{paddingTop: '20px'}}>
                                    <div className='thumbnail'>
                                    <img src='/static/images/img-whatisvirtualrun.png' style={{width: '100%'}} alt='img'/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6' style={{paddingTop:'100px'}}>
                                <p className="text-justify">Mau ikut Marathon dan Running Events, tapi waktu event enggak cocok? Tempat lari jauh? Masih pemula dan minder lari dengan yang lain? Mau lari di pace sendiri? Mau lari sendiri atau bersama teman?</p>
                                <span> </span>
                                <h4>Fleksibel</h4>
                                <p className="text-justify">Lari dimanapun, kapanpun, dan dengan siapapun</p>
                                <span> </span>
                                <h4>Mudah</h4>
                                <p className="text-justify">Pilih dan atur sendiri jarak serta kecepatan larimu</p>
                                <span> </span>
                                <h4>Baik</h4>
                                <p className="text-justify">Ulurkan tangan kepada yang membutuhkan untuk berbagai macam good causes</p>
                            </div>
                        </div>
                     </div>
                    <div className='col-sm' style={{paddingTop: '50px'}}>
                        <p>HOW It WORKS</p>
                    </div>
                    <div className='col-sm' style={{paddingTop: '30px'}}>
                        <p>Bagaimana cara mendaftar untuk mengikuti virtual run?</p>
                    </div>
                    <div className='col-sm' style={{paddingTop: '30px'}}>
                        <p>IMAGES</p>
                    </div>
                    <div className='col-sm'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='col-sm'>
                                    <p> IMAGE 1 </p>
                                </div>
                                <div className='col-sm'>
                                    <p> IMAGE 2 </p>
                                </div>
                                <div className='col-sm'>
                                    <p> IMAGE 3 </p>
                                </div>
                                <div className='col-sm'>
                                    <p> IMAGE 4 </p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <p> RACE </p>
                                <p>Siap menantang diri anda untuk melompat lebih tinggi? Ikuti event lari dengan tema-tema menarik ini!</p>
                                <button> VIEW ALL RACE </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-2 sidenav'></div>
            </div>
        </div>
        <div className='col-sm' style={{paddingTop: '30px'}}>
                <img className='d-block w-100' src='/static/images/img-bestrecord.png' alt='img'/>
        </div>
        <div className='container'>
            <div className='row content'>
                <div className='col-sm-2 sidenav'></div>
                <div className='col-sm-8 text-center'>
                    <div className='col-sm'>
                        <div className='thumbnail'>
                            <img src='/static/images/icon-quotes.png' style={{width: '20%'}} alt='img'/>
                        </div>
                    </div>
                    <div className='col-sm' id='CAROUSEL'>
                        <p>Biasakanlah untuk berolahraga setiap pagi ataupun sore. Tetapkanlah jadwal dan usahakan untuk mengikuti jadwal tersebut. Mulailah dari berlari 3 sampai 5 km, 3 kali seminggu. Setelah Anda merasa nyaman dengan rutinitas tersebut silahkan tambahkan effort dan perpanjang kilometer-nya.</p>
                        <p> AUTHOR </p>
                        <p> IMAGE </p>
                    </div>
                </div>
                <div className='col-sm-2 sidenav'></div>
            </div>
        </div>
        <div className='container'style={{paddingTop: '100px'}}>
            <div className='row content'>
                <div className='col-sm-6 sidenav'>
                    <div className='thumbnail'>
                        <img src='/static/images/img-phonetemplate.png' style={{width: '100%'}} alt='img'/>
                    </div>
                </div>
                <div className='col-sm-6 sidenav'>
                    <p> STAY IN TOUCH </p>
                    <p>Bergabung dengan newsletter atau follow instagram kami untuk penawaran dan event mendatang</p>
                </div>
            </div>
        </div>
      </div>
      );
    }
}

export default Home;