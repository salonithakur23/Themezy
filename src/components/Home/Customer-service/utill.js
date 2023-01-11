export const  serviceCard={
        pic:"service.png",
        btnText:"More Info",
}


const CustomerService =[
    {mainTitle:"Customer Services"},
    {subtitle:"Null eros Odio dolor"},
    {paratext:"Chocolate caramels unerdwear.com lemon drops. Powder chupa chups pastry macaroon wafer chocolate cake sweet roll croissant jelly"},
    // {paraitem:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},


]
 
const CustomerFun =(item) =>{
    return(
        <>
        <p className="textColor">{item.mainTitle}</p>
        <p className="subTextColor">{item.subtitle}</p>
        <p className="paraColor">{item.paratext}</p>
        {/* <p className="paraitem">{item.paraitem}</p> */}
        
        </>
    )
}
export const mainSericeFun=CustomerService.map(CustomerFun)