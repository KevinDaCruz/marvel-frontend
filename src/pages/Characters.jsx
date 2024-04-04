import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
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
        <h2>CHARACTERS</h2>
      </div>
      <div className="cards-content">
        {data.results.map((characters) => {
          return (
            <div className="cards">
              <div className="e">
                <div className="hero-title">
                  <div className="border-detail">
                    <h3>{characters.name}</h3>
                  </div>
                </div>
              </div>
              <img
                src={`${characters.thumbnail.path}/portrait_uncanny.${characters.thumbnail.extension}`}
                alt=""
              />
              <div className="background-desc">
                <p>{characters.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Characters;