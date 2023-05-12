import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import close from '../img/close.png';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import { getuserProductwishlist } from '../features/user/userSlice';

const ListePrefere = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    getwish();
  }, []);

  const getwish = () => {
    dispatch(getuserProductwishlist());
  };

  const wishlistState = useSelector((state) => state.auth.Addwishlist);

  if(wishlistState) {
    console.log("Raed :", wishlistState)
  return (
    <>
      <BreadCrumb title="liste-prefere" />
      <Container class1="liste-prefere home-2 py-5">
        <div className="row">
          {wishlistState?.map((item, index) => (
            <div className="col-3" key={index}>
              <div className="comparer-produit-card position-relative">
                <img src={close} alt="" className="position-absolute img-fluid close" />
                <div className="comparer-image-card">
                  <img src={item?.images[0].url} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="comparer-detail-produit py-3 ">
                <h5 className="title">{item?.title}</h5>
                <h6 className="price mb-3">{item?.price}</h6>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
}

export default ListePrefere;
