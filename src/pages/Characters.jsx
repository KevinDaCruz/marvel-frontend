import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-marvel--zv98mr42qr6r.code.run/characters"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div>
        <h2>CHARACTERS</h2>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search a character by name..."
        />
      </div>
      <div className="cards-content">
        {data.results
          .filter((characters) =>
            characters.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((characters) => {
            return (
              <Link to={`/comics/${characters._id}`} key={characters._id}>
                <div className="cards">
                  <div className="copy-card">
                    {characters.description ? (
                      <div className="background-desc">
                        <p>{characters.description}</p>
                      </div>
                    ) : null}
                  </div>
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
                </div>
              </Link>
            );
          })}
      </div>
    </main>
  );
};
export default Characters;
