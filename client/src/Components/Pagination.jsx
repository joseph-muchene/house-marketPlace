import React from "react";

function Pagination() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div>
        <div class="btn-group grid grid-cols-2">
          <button class="btn btn-outline">Previous page</button>
          <button class="btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
