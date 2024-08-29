import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import PageFlip from '../../components/pageFlip/PageFlip.jsx';

export default function periodicos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`periodicos`}/>
                    </div> 
                    <div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/afb198e812f9473dee801028a3c2be3b8c46a138202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>  
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/1cb20ad3de382f65bc010d34562de0ea63d80125202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/01284d5b12f377bb34da5cfa8f8b0cf843dd0fdf202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/036ccb91d86c27fe20cc0ae6b8737bdcfec2a35e202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                            src="https://flipbookpdf.net/web/site/09c8a42eee556165b5de3baf4a9a25d096a96a42202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/104729071e8532e5523b6a3e4e548954595e82a3202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/ec8d3c2c7b1e94cc73c5b6b199690b8d1fddf831202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                            src="https://flipbookpdf.net/web/site/de2f78aa50a1f377b78082200003edb76466d984202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/f01bec0a50548503d937b62c52c55b8b593030e6202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/329f56a1e7a8b242b4117b01ad3ac2bf6716d82d202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                        <div>
                        <iframe
                            src="https://flipbookpdf.net/web/site/da7af810bce14b0f37a5169575f7b95a8a413903202408.pdf.html"
                            width="100%"
                            height="600"
                            className="flip-book-3d"                        
                            title="Flipbook PDF"
                            ></iframe>
                        </div>
                    </div>                   
                </div>                
                <Footer />
            </div>
        </div>
    );
}