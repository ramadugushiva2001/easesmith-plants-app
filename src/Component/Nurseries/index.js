import './index.css'

const nurseriesList = [
    {
        "id": 1,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729358072/Ellipse_63_wty8xw.png"
    },
    {
        "id": 2,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729357730/Ellipse_71_mldtkh.png"
    },
    {
        "id": 3,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729357681/Ellipse_70_l62wlj.png"
    },
    {
        "id": 4,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729357608/Ellipse_69_l5esay.png"
    },
    {
        "id": 5,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729357598/Ellipse_68_fjqqpz.png"
    },
    {
        "id": 6,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729358834/Ellipse_62_nmnkao.png"
    },
    {
        "id": 7,
        "image": "https://res.cloudinary.com/dmmpu2exc/image/upload/v1729358865/Ellipse_64_wrswlv.png"
    }
]

const Nurseries = () => (
    <div className="nurseries-gallery">
        {nurseriesList.map(nursery => (
            <div key={nursery.id} className="nursery-card">
                <img src={nursery.image} alt={`Nursery ${nursery.id}`} className="nursery-image" />
                <p className="nursery-description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
            </div>
        ))}
    </div>
)

export default Nurseries
