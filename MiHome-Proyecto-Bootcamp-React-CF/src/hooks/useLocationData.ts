import { useState } from "react";

export const useLocationData = () => {
  const [locationData, setLocationData] = useState({
    city: "",
    province: "",
  });
};
