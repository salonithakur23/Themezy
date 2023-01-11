const servArray=[
    {
        maintext:"Duis ac scelerisque lacus nulla non dolor id dui venenatis laoreet fusce vitae",
        subtext:"Aliquam nibh quam iaculis tempus dignissim quis faucibus etiam dignissim tempus nibh nec venenatis turpis bibendum vivamus laoreet odio eleifend iaculis",
    },
    {
        maintext:"lorem ipsum dolor smit ipsum amemte kanta non id dui veatus ",
        subtext:"Nibh quam iaculis tempusquis faucibus etiam dignissim tempus nibh nec venenatis ",
    }
]
const servFun =(item)=>{
    return(
        <>
        <p className="Duis">{item.maintext}</p>
        <p className="nibah">{item.subtext}</p>
        </>
    )
}
export const serveMain=servArray.map(servFun)