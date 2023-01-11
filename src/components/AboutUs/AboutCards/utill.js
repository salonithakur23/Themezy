import { Col } from "react-bootstrap"
const ProfileArray = [
    {
        image: "sa1.jpg",
        Name: "Sarah James",
        data: "Pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est.",
    },
    {
        image: "sa2.jpg",
        Name: "Chris Harris",
        data: "Pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est.",
    },
    {
        image: "sa3.jpg",
        Name: "Monique Smith",
        data: "Pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est.",
    },
    {
        image: "sa4.jpg",
        Name: "James Mark",
        data: "Pretium nec tincidunt sit amet, pellentesque aliquet metus. Morbi id elementum est.",
    },
]
const ProfileFun = (items) => {
    return (
        <>
            <Col sm={3} >
                <div className="images">
                    <img className="imagesBox"  src={items.image} />
                </div>
                <p className="sarah">{items.Name}</p>
                <p className="pretium">{items.data}</p>
            </Col>

        </>
    )
}
export const Mainprofile = ProfileArray.map(ProfileFun)