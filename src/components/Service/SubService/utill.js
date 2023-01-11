import { Container,Row,Col } from 'react-bootstrap'
const subServArray=[
    {
        icon:'fas fa-calendar',
        mainheading:"Pallesque sapien",
        subheadeing:"Aliquam nibh quam iaculis tempus dignissim quis faucibus etiam dignissim tempus nibh nec venenatis turpis bibendum vivamus ",
   
    },
    {
        icon:'fas fa-globe',
        mainheading:"Lorem ipsum dolor",
        subheadeing:"Iron Man, Thor, Captain America and the rest of Earths Mightiest  odio eleifend iaculis  odio eleifend iaculis Heroes unite to stand agains",
   
    },
  
    {
        icon:'fas fa-file',
        mainheading:"Smit devolop compt",
        subheadeing:" See the Avengers go up against Ultron, Kang, the Masters of Evil and  odio eleifend iaculis  odiomore over three decades of epic action.",
   
    },
  
    {
        icon:'fas fa-laptop-code',
        mainheading:"Spaien pallesque",
        subheadeing:"Powder chupa chups pastry macaroon wafer chocolate cake sweet roll  the Masters of Evil and  odio eleifend iaculis croissant jelly",
   
    },
  
  
]
const subServFun=(item)=>{
    return(
        <>
      <Col sm={3}>
        <div className='arrow'></div>
      <i id="icn" class={item.icon} ></i>
      <p className="pict">{item.pic}</p>
        <p className="pall">{item.mainheading}</p>
        <p className="viva">{item.subheadeing}</p>
      </Col>
        </>
    )
}
export const subMainServ=subServArray.map(subServFun)