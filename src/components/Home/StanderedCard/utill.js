
 const StanderedCard=[
   {pic:"right.jpg",title:"Quad core"},
   {pic:"right.jpg",title:"50 GB ram"},
   {pic:"right.jpg",title:" 50 GB disc space"},
   {pic:"right.jpg",title:" 10 email accounts"},
   {pic:"right.jpg",title:" Support 24/h"},
   {pic:"right.jpg",title:" Admin panel"},
]
const StandredFun = (item) =>{
    return(
        <>
      
        <div className='right'><img className='rightBox' src={item.pic} /></div>
        <p className="gray2">{item.title}</p>
      
        </>
    )
}
export const mainStandredFun=StanderedCard.map(StandredFun)


const CaArray =[
   {
      maintitle:"Basic",
      subtitle:"For small bussiness",
      titletext:"$9.99 ",
      text:"/Per month",
      title:"Curabitur facilisis consectetur",
      title2:"leo in venenatis mauris nisl",
   },
]
const CaFunction =(item) =>{
    return(
        <>
        
        <p className="main-card">{item.maintitle}</p>
       <p className="subTitle">{item.subtitle}</p>
       <p className="blue">{item.titletext}</p>
       <p className="itemtext">{item.text}</p>
       <p className="gray">{item.title}</p>
       <p className="gray">{item.title2}</p>
        </>
    )
} 
export const mainCaFunction=CaArray.map(CaFunction)




const CaArray2 =[
   
   {
      maintitle:"Standard",
      subtitle:"For medium bussiness",
      titletext:"$8.99 ",
      text:"/Per month",
      title:"Etiam interdum nulla eros",
       title2:"odio scelerisque magna",
   },
   
]
const CaFunction2 =(item) =>{
    return(
        <>
    <p className="main-card">{item.maintitle}</p>
       <p className="subTitle">{item.subtitle}</p>
       <p className="blue">{item.titletext}</p>
       <p className="itemtext">{item.text}</p>
       <p className="gray">{item.title}</p>
       <p className="gray">{item.title2}</p>
        </>
    )
} 
export const mainCaFunction2=CaArray2.map(CaFunction2)



const CaArray3 =[
 
   {
      maintitle:"Advanced",
      subtitle:"For large bussiness",
      titletext:"$7.99",
      text:"/Per month",
      title:"Curabitur facilisis consectetur",
       title2:"leo in venenatis mauris nisl",
   },

]
const CaFunction3 =(item) =>{
    return(
        <>
   <p className="main-card">{item.maintitle}</p>
       <p className="subTitle">{item.subtitle}</p>
       <p className="blue">{item.titletext}</p>
       <p className="itemtext">{item.text}</p>
       <p className="gray">{item.title}</p>
       <p className="gray">{item.title2}</p>
        </>
    )
} 
export const mainCaFunction3=CaArray3.map(CaFunction3)


const CaArray4 =[
 
   
   {
      maintitle:"Professional",
      subtitle:"For corporate bussiness",
      titletext:"$0.99 ",
      text:"/Per month",
      title:"leo in venenatis mauris nisl",
       title2:"leo in venenatis mauris nisl",
   },
]
const CaFunction4 =(item) =>{
    return(
        <>
   <p className="main-card">{item.maintitle}</p>
       <p className="subTitle">{item.subtitle}</p>
       <p className="blue">{item.titletext}</p>
       <p className="itemtext">{item.text}</p>
       <p className="gray">{item.title}</p>
       <p className="gray">{item.title2}</p>
        </>
    )
} 
export const mainCaFunction4=CaArray4.map(CaFunction4)