import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import ManageServiceData from "../ManageServiceData/ManageServiceData";

const ManageService = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://travel-management-service.herokuapp.com/getService")
      .then(res => res.json())
      .then(data => setServiceData(data));
  }, []);
  return (
    <div>
      <h4 className="text-center">You can delete service from here</h4>
      {serviceData.length === 0 ? (
        <Loading />
      ) : (
        <ManageServiceData rows={serviceData} />
      )}
    </div>
  );
};

export default ManageService;
