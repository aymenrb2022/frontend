
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import view from '../img/view.png'
import random from '../img/random.png'
import shopping from '../img/shopping.png'
import heart from '../img/heart.png'
import { useDispatch } from 'react-redux'
import { Addwishlist } from "../features/product/productSlice";


const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch()

  let location = useLocation();

  const addToWish = (id)=>{
    dispatch(Addwishlist(id));
  };
  return (
    <>
      {Array.isArray(data) && data.map((item, index) => (
        
        <div
          key={index}
          className={`${
            location.pathname === '/NotreMagasin' ? `gr-${grid}` : "col-3" 
          } `}
        >
          <div to={`/product/${item?._id}`} className='Product-card position-relative gap-3'>
            <div className='love-icon position-absolute'>
              <button className="border-0 bg-transparent"
               onClick={() => addToWish(item._id)}>
                <img src={heart} className='img-aad-card image-container' alt='love' 
                />
              </button>
            </div>
            <div className='Product-image'>
           {item?.images && Array.isArray(item.images) && (
              <>
      <img src={item.images[0]?.url} className='img-fluid' alt='Product-image' />
      <img src={item.images[1]?.url} className='img-fluid' alt='Product-image' />
    </>
  )}
</div>

            <div className='Product-detail'>
              <h6 className='brand'>{item?.brand}</h6>
              <h5 className='Product-titre'>{item?.title}</h5>
              <ReactStars
                count={5}
                value={item?.totalrating.toString()}
                size={24}
                edit='false'
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                {item?.description}
              </p>

              <p className='prix'>{item?.price}TND  </p>
            </div>

            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                <Link>
                  <img src={random} className='img-aad-card ' alt='addcart' />
                </Link>
                <Link to={`/product/${item?._id}`}>
                  <img src={view} className='img-aad-card ' alt='addcart' />
                </Link>
                <Link>
                  <img src={shopping} className='img-aad-card  ' alt='addcart' />
                </Link>

              </div>
            </div>
          </div>

        </div>
      ))}
    </>
  );
};

export default ProductCard;
