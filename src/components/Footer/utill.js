import { Link } from "react-router-dom"

 export const TextFooter ={
    pic:"RR Infosoft",
    title:"Tagline goes here",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus vitae leo dapibus euismod id a sem. Donec sit amet nisi amet nisi varius maximus. Sed mi arcu, tempus ut laoreet ultricies, pellentesque diam.",
}


const footerText = [
    {title:"News",path:"/news"},
    {title:"About US",path:"/about"},
    {title:"Service",path:"/service"},
    {title:"Contact",path:"/contact"},
]

const footerFunction =  (item) =>{
    return(
    <>
 
    <Link className="link" to={item.path}>{item.title}</Link>
    </>
    )
}
export const footerArray=footerText.map(footerFunction)