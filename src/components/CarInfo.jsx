import React from "react";

const CarInfo = () => {
  return (
    <div className="container mt-5">
      {/* Header */}
      <h2 className="text-center mb-4">Cars</h2>

      {/* Grid Section */}
      <div className="row align-items-center">
        {/* Left Column - Text */}
        <div className="col-md-6">
          <h3>About This Car</h3>
          <p>
            This car offers outstanding performance and design. Built with a
            powerful engine and cutting-edge technology, it provides a smooth,
            efficient, and luxurious driving experience.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"
            alt="Car"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
