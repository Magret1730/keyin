import React, { useState, useEffect } from "react";

const HappyHolidays = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Its December!!!</h1>
      {showMessage && <h1>Happy Holidays Hurrah!</h1>}
    </div>
  );
};

export default HappyHolidays;
