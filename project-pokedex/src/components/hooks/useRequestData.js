import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  console.log("initialData, url", initialData, url)
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("response", response)
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  console.log("data", data)
  return data;
};

export default useRequestData;