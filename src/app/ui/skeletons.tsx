import React from "react";

export const CardsSkeletons = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <div className="d-flex align-items-center">
              <span className="placeholder bg-primary placeholder-icon"></span>
              <span className="ms-2 placeholder col-4"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <div className="d-flex align-items-center">
              <span className="placeholder bg-primary placeholder-icon"></span>
              <span className="ms-2 placeholder col-4"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <div className="d-flex align-items-center">
              <span className="placeholder bg-primary placeholder-icon"></span>
              <span className="ms-2 placeholder col-4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableSkeleton = () => {
  return (
    <div className="row mt-3">
      <div className="col-lg-10">
        <h3>Recent Blogs</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Repeat this row as many times as needed to represent the loading state */}
            <tr>
              <td>
                <span className="placeholder col-6"></span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    className="placeholder bg-secondary rounded-circle"
                    style={{ width: 30, height: 30 }}
                  ></span>
                  <span className="ms-2 placeholder col-4"></span>
                </div>
              </td>
              <td>
                <span className="placeholder col-4"></span>
              </td>
              <td>
                <span className="placeholder col-3"></span>
              </td>
              <td>
                <span className="placeholder col-4"></span>
              </td>
              <td>
                <div className="d-flex">
                  <span className="placeholder col-3 me-2"></span>
                  <span className="placeholder col-3"></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mb-3">
          <span className="placeholder col-1"></span>
        </div>
      </div>

      <div className="col-lg-2">
        <h3>Filter By Status</h3>
        <div className="form-check">
          <span className="placeholder col-12" style={{ height: 20 }}></span>
        </div>
        <div className="form-check">
          <span className="placeholder col-12" style={{ height: 20 }}></span>
        </div>
        <div className="form-check">
          <span className="placeholder col-12" style={{ height: 20 }}></span>
        </div>
      </div>
    </div>
  );
};
