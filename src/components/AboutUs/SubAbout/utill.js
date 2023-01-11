export const mainInterArray={
  img:"pic1.jpg",
  img2:"pic2.jpg",
  mainhead:"Interdum et malesuada fames ac ante ipsum",
  subhead:"Quisque ligula mauris, pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est. Sed hendrerit turpis lobortis, auctor ante eget, mattis nisi. Nam scelerisque blandit nisi eget tempus aliquam erat volutpat.",
  subhead2:"Nunc molestie enim eu felis convallis, vitae blandit ligula elementum. Ut tincidunt id nisi eget ultricies integer amet sollicitudin urna. Donec tempus augue ut diam imperdiet.",
  
}

const InterArray =[
    {Mainhead:"Interdum et malesuad",subhead:"Nunc molestie enim eu felis convallis, vitae blandit ligula elementum. Ut tincidunt id nisi eget ultricies integer amet sollicitudin urna. Donec tempus augue ut diam imperdiet."},
    {Mainhead:"Fames ac ante ipsum",subhead:"Quisque ligula mauris, pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est."}
    ,
]
const InterFun=(item)=>{
    return(
        <>
        <p className="internal">{item.Mainhead}</p>
        <p className="subgray">{item.subhead}</p>
        </>
    )
}
export const Internal=InterArray.map(InterFun)

