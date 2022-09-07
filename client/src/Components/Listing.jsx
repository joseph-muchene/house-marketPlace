import React from "react";
import ReactStars from "react-rating-stars-component";
function Listing() {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <ReactStars count={5} onChange="" size={24} activeColor="#ffd700" />
        </div>
      </div>
    </div>
  );
}

export default Listing;
