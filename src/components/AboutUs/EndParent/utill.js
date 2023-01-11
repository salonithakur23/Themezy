export const DoneArray={
    mainHeade:"Donec ac risus sodales mollis diam dignissim tempus eros",
    mainHeade2:"Cras rhoncus eros ligula amet fringilla ex accumsan placerat",
}


const NuncArray =[
    {subtext:"Nunc molestie enim felis convallis vitae blandit ligula elementum tincidunt sit ultricies integer amet sollicitudin urna donec tempus"},
    {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus vitae leo dapibus euismod id a sem. Donec sit amet nisi amet nisi varius maximus. Sed mi arcu, tempus ut laoreet ultricies, pellentesque diam."},
    {paraText:"mauris, sit amet sodales odio volutpat sit amet. Pellentesque bibendum, sapien nec feugiat interdum, enim erat pellentesque nunc sollicitudin enim ipsum euismod risus. Aliquam sit amet ipsum enim phasellus."},
]
const NuncFun =(item) =>{
    return(
        <>
        <p className="Nunce">{item.subtext}</p>
        <p className="lorem-text">{item.text}</p>
        <p className="lorem-text">{item.paraText}</p>
        </>
    )
}
export const MainNuncFunction=NuncArray.map(NuncFun)



const CrasArray=[
    {
        pic:"right.jpg",Text:"Lorem ipsum dolor amet consectetur adipiscing",
    subtext:"Vitae leo dapibus euismod id a sem donec sit amet nisi amet",
},   {
    pic:"right.jpg",Text:"Lorem ipsum dolor amet consectetur adipiscing",
subtext:"Vitae leo dapibus euismod id a sem donec sit amet nisi amet",
},
{
    pic:"right.jpg",Text:"Lorem ipsum dolor amet consectetur adipiscing",
subtext:"Vitae leo dapibus euismod id a sem donec sit amet nisi amet",
},
{
    pic:"right.jpg",Text:"Lorem ipsum dolor amet consectetur adipiscing",
subtext:"Vitae leo dapibus euismod id a sem donec sit amet nisi amet",
},
    

]
const CrasFun =(item) =>{
    return(

        <>
        
        <div className="rightimg">
            <img className="rightimg2" src={item.pic} />
           
        </div>
      
        <p className="assian">{item.Text}</p>
     
        <p className="viate">{item.subtext}</p>
        <hr />
        </>
    )
}

export const MainCras=CrasArray.map(CrasFun)




