import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceTimes = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Church Service Times</h2>

      <div className="card p-3 mb-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Day</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Main Worship Service</td>
              <td>10:00 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Bible Study</td>
              <td>6:00 PM - 7:30 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Prayer Meeting</td>
              <td>7:00 PM - 8:30 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Youth Fellowship</td>
              <td>4:00 PM - 6:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <p>We welcome you to join us in worship and fellowship! 🙏</p>
      </div>
    </div>
  );
};

export default ServiceTimes;
