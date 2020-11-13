import React from 'react';
import olx1 from '../images/olx1.PNG'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



class Lastfooter extends React.Component{
    render(){
        return(
            <div >
               <div className="jumbotronfooter">
                   <img src={olx1}/>
               </div>
               <div className='Lastfooter'>
                   <section className="section1">
                       <ul style={{listStyle:"none"}}>
                           <li><h7><b>Popular categories</b></h7></li>
                           <li>Cars</li>
                           <li>Flats for Rent</li>
                           <li>Jobs</li>
                           <li>Mobiles</li>

                       </ul>

                   </section>
                   <section className="section1">
                       <ul style={{listStyle:"none"}}>
                           <li><h7><b>trending Search</b></h7></li>
                           <li>Bikes</li>
                           <li>Watches</li>
                           <li>Books</li>
                           <li>Dogs</li>

                       </ul>

                   </section>
                   <section className="section1">
                       <ul style={{listStyle:"none"}}>
                           <li><h7><b>About US</b></h7></li>
                           <li>About OLX Group</li>
                           <li>OLX blogs</li>
                           <li>contac us</li>
                           <li>OLX for Business</li>

                       </ul>

                   </section>
                   
                   <section className="section1">
                       <ul style={{listStyle:"none"}}>
                           <li><h7><b>OLX</b></h7></li>
                           <li>Help</li>
                           <li>Sitemap</li>
                           <li>legal & privacy informaion</li>
                           

                       </ul>

                   </section>

                   <section className="section1">
                       <ul style={{listStyle:"none"}}>
                           <li><h7><b>FOLLOW US</b></h7></li>
                           <li><FaFacebookF/> <FaGithub/><FaInstagramSquare/></li>

                           <li><a href="false" target="_blank" rel="noopener noreferrer" style={{border: 'none',  textDecoration: 'none'}}><img src="https://www.niftybuttons.com/googleplay/googleplay-button1.png" /></a></li>
                           

                       </ul>

                   </section>


                   <div className="blackfooter">
                       <h6 style={{marginLeft:'80px ' , marginTop:'20px', fontFamily:'sen-serif'}}>Other countries:southAfrica , India , Indonasia</h6>
                       {/* <h6 style={{marginLeft:'80px ' , marginTop:'20px', fontFamily:'sen-serif'}}>Free Classified in Pakistan :  2006-2020 OLX</h6> */}

                   </div>

               </div>




            </div>
        )
    }
}


export default Lastfooter;