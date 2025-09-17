import React, { useEffect, useState } from "react";
import StaffTable from "./StaffTable";
import UpdateStaffForm from "./UpdateStaffForm";
import { getAllStaff } from "../../services/staffService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowAllStaff() {
  const [staffList, setStaffList] = useState([]);

  const fetchStaff = async () => {
    const data = await getAllStaff();
    setStaffList(data);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="p-6">
      <ToastContainer />
      <div>
        <h1 className="text-2xl font-bold mb-4">All Staff</h1>
        <StaffTable staffList={staffList} />
      </div>
      <div>
        <UpdateStaffForm refreshStaff={fetchStaff} />
      </div>
    </div>
  );
}

export default ShowAllStaff;
