"use client";
import { useQuery } from "@apollo/client";
import { FaUsers } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { TbWorldDownload } from "react-icons/tb";

import { GET_STATS } from "@/src/requests/queries";

import { CardsSkeletons } from "@/src/app/ui/skeletons";

const Stats = () => {
  const { data: stats, loading } = useQuery(GET_STATS);

  if (loading) return <CardsSkeletons />;
  return (
    <>
      <div className="row">
        <div className="col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <div className="d-flex align-items-center">
                <FaUsers className="text-primary" size={30} />
                <span className="ms-2">{stats?.getStats?.totalUsers}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Published Blogs</h5>
              <div className="d-flex align-items-center">
                <TbWorldDownload className="text-primary" size={30} />
                <span className="ms-2">
                  {stats?.getStats?.totalPublishedBlogs}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Draft Blogs</h5>
              <div className="d-flex align-items-center">
                <MdDrafts className="text-primary" size={30} />
                <span className="ms-2">{stats?.getStats?.totalDraftBlogs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
