import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ url }) => {
  const [data, setData] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    deliveredOrders: 0,
    topItem: "N/A",
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`${url}/api/order/analytics`);

        if (res.data.success) {
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnalytics();
  }, [url]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Revenue</h3>
          <h2>₹{data.totalRevenue}</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Orders</h3>
          <h2>{data.totalOrders}</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Delivered Orders</h3>
          <h2>{data.deliveredOrders}</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Top Selling Item</h3>
          <h2>{data.topItem}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;