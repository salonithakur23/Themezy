export const addArray={
    text:"Address",
    text2:"Contact Form",
}

const compArray=[
    {
        text:"Company Name",
        text2:"4235 Poplar Street, Compton, CA 90220",
        text3:"Phone: +1 932 349 313info@companyname.com",
    }
]
const compFun =(item)=>{
    return(
        <>
        <p className="company">{item.text}</p>
        <p className="company2">{item.text2}</p>
        <p className="company2">{item.text3}</p>
        </>
    )
}

export const mainCompArray=compArray.map(compFun)