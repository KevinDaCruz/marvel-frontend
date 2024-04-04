import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div>
        <h2>Comics</h2>
        {data.results.map((comics) => {
          return (
            <div key={comics._id}>
              <p>{comics.title}</p>
              <img
                src={`${comics.thumbnail.path}/portrait_small.${comics.thumbnail.extension}`}
                alt=""
              />
              <p>{comics.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Comics;
