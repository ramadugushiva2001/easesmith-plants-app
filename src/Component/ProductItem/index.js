import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';

const ProductItem = (props) => {
    const { plantDetails } = props;
    const {  name, imageUrl } = plantDetails;
    
    return (
        <li className="product-list-item">
            <div className="plant-image-container">
                <img
                    src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729406026/wishicon_jauqor.png"
                    alt="wish"
                    className="wish-icon"
                />
                <img src={imageUrl} alt={name} className="plant" />
                <Popup 
                    className='popup-container' 
                    modal 
                    trigger={<button className="view-product-button">View Product</button>}
                    contentStyle={{ width: '453px', height: '661px' }} // Set the width and height here
                >
                    {close => (
                        <div className='cart-container'>
                            <button type="button" className="close-button" onClick={() => close()}>X</button>
                            <h1>Your Cart</h1>
                            <hr className='cart-hr-line' />
                            <h1>Congratulations<br /> Order Placed!</h1>
                            <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729420177/pot_d83thk.png" alt="pot" className='plant-pot' />
                            <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
                            <button className='continue-shopping-button'>CONTINUE SHOPPING</button>
                        </div>
                    )}
                </Popup>
            </div>
            <div>
                <h2>{name}</h2>
                <p>Indoor Plant, Low maintenance</p>
                <div className="ratings-container">
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729406982/5startRating_pafxzb.png" className="star-rating-image" alt="rating" />
                    <p>4.9</p>
                </div>
                <p>₹399 <span>₹ 299</span></p>
                <div className="buttons-container">
                    <div className="add-to-cart-button-container">
                        <button className="add-to-cart-button">-</button>
                        <button className="add-to-cart-button">Add to Cart</button>
                        <button className="add-to-cart-button">+</button>
                    </div>
                    <button className="buy-button">Buy on Rent</button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
