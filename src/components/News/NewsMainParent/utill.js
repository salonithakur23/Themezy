export const MarvalsArray={
    mainText:"Marvels mighty mutants go worldwide and beyond",
    pic:"img.jpg",
    text:"Iron Man, Thor, Captain America and the rest of Earths Mightiest Heroes unite to stand against the threats none can face alone. See the Avengers go up against Ultron, Kang, the Masters of Evil and more over three decades of epic action.",
    btn:"Read More",
    picture:"img2.jpg",
    picture2:"img3.jpg",
    paratext:"Categories",
    paratext2:"Comment of the month",
    mainText2:"Repellat eaque fugiat modi amet, similique eos, fugit accusantium.",
    subtext2:"Paul Smith",
    btn2:"'New posts"

}
const categoriArray=[
    {pic:"arrow.png",text:"Lorem Ipsum"},
    {pic:"arrow.png",text:"Ipsum dolor sit"},
    {pic:"arrow.png",text:"Amet consecteture"},
    {pic:"arrow.png",text:"Agains Ultron"},
    {pic:"arrow.png",text:"Spariderman"},
    {pic:"arrow.png",text:"Hulky got angry"},
]
const categoriFun=(items)=>{
    return(
        <>
        <div className="picture"><img className="picture2" src={items.pic} /></div>
        <p className="textitems">{items.text}</p>
   
        </>
    )
}
export const categoriMain=categoriArray.map(categoriFun)


const catArray =[
    {maintext:"Top rated posts"},
    {mainText:"Captain America and the rest of Earths Mightiest Heroes",subtext:"03/09/2014"},
    {mainText:"Ultron, Kang, the Masters of Evil",subtext:"02/09/2014"},

  
]
const catFun=(item)=>{
    return(
        <>
        <p className="bluetext">{item.maintext}</p>
        <p className="mainitemcolor"><u>{item.mainText}</u></p>
        <p className="gray">{item.subtext}</p>
    
        </>
    )
}
export const catMain=catArray.map(catFun)