import React from "react";
import DriveLogo from "../../images/drive.png";
import "./style.css";

const Drive = () => {
  return (
    <div className="drive-container">
      <div className="drive-img-text-container">
        <div className="Drive-img-container">
          <img src={DriveLogo} alt="" />
        </div>
        <div className="drive-text-container">
          <h2 className="drive-text-h2">
            Find the perfect car&nbsp;
            <span className="drive-text-span">to try before you buy</span>
          </h2>

          <p className="drive-text-container-sec-para">
            Make sure your future wheels work well with your lifestyle by taking
            your time in the driver's seat.
          </p>
          <button className="browse-car-btn">Browse Cars</button>
        </div>
      </div>
    </div>
  );
};

export default Drive;
