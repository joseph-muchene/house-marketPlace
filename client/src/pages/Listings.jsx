import React from "react";
import Listing from "../Components/Listing.jsx";
import Pagination from "../Components/Pagination.jsx";

function Listings() {
  return (
    <div className="">
      <h1 className="text-4xl text-center my-3">Latest Listings</h1>
      <hr className="mb-3" />
      <div className="flex flex-col mx-3 md:grid grid-cols-3 gap-3 sm:grid-cols-2 lg:grid-cols-4  ">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </div>

      <Pagination />
    </div>
  );
}

export default Listings;
