import axios from "axios";
import React, { useEffect } from "react";

//const url = "https://static.openfoodfacts.org/data/openfoodfacts-products.jsonl.gz";
const url = "http://hn.algolia.com/api/v1/search?query=";

const FetchData = () => {
  const fetchRequest = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div>
      <h1> hello</h1>
    </div>
  );
};

export default FetchData;
