 export const expactArrFun={
    mainheading:"What can you expect?",
 }
 const SafeArray=[
    {mainheading:"Safe & high-speed hosting"},
    {subheading:"Pallentesque nibh pharetra urna elementum viverra elit duis faucibus augue tempor eleifend",},
    {paratext:"Tiramisu cotton candy caramels cake biscuit jelly-o chupa chups chocolate. Tootsie roll lollipop topping. Macaroon ice cream cookie powder dessert gingerbread oat cake. Pudding cake powder icing tart sugar plum sesame snaps.",},
    {paraText:" Fruitcake tootsie roll candy. Sweet roll toffee donut. Chocolate cake gummi bears fruitcake cookie biscuit cotton candy marshmallow.",},
    {paraText2:"Liquorice macaroon marshmallow macaroon cheesecake sweet soufflé. Cheesecake cookie dessert jelly-o. Fruitcake tart topping.",},
 ]
 const SafeFun=(item)=>{
    return(
        <>
        <p className="mainHead2">{item.mainheading}</p>
        <p className="subHead">{item.subheading}</p>
        <p className="Gracy">{item.paratext}</p>
        <p className="Gracy">{ item.paraText}</p>
        <p className="Gracy">{ item.paraText2}</p>
        </>
    )
 }
 export const mainSafeArray=SafeArray.map(SafeFun)



 const expactArray=[
  {
   icon:'fas fa-globe',
    heading:"Aliquam nibh quam iaculis tempis",
    subheading:"Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie.",
    
  },
  {
   icon:'fas fa-file',
    heading:"Aliquam nibh quam iaculis tempis",
    subheading:"Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie.",
    
  },
  {
   icon:'fas fa-laptop-code',
    heading:"Aliquam nibh quam iaculis tempis",
    subheading:"Candy powder. Carrot cake ice cream toffee bonbon. Donut marzipan chupa chups cookie tart dessert fruitcake brownie.",
    
  },
  
 ]
 const exportFun =(item) =>{
    return(
        <>
        <hr />
        {/* <div className="pic2"><img className="picBox2" src={item.pic} /></div> */}
        <i id="icn2" class={item.icon} ></i>
        <p className="itemHeading">{item.heading}</p>
        <p className="itemSubheading">{item.subheading}</p>
        </>
    )
 }
 export const mainEXportFun=expactArray.map(exportFun)