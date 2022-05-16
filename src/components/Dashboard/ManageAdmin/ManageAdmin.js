import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import ManageAdminData from "../ManageAdminData/ManageAdminData";
import "./ManageAdmin.css";

const ManageAdmin = () => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch("https://travel-management-service.herokuapp.com/getAdmin")
      .then(res => res.json())
      .then(data => setAdmin(data));
  }, []);
  return (
    <div className="manage-admin-width">
      <h4 className="text-center">You can Delete Admin From Here</h4>
      {admin.length === 0 ? <Loading /> : <ManageAdminData rows={admin} />}
    </div>
  );
};

export default ManageAdmin;
