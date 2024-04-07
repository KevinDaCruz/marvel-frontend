import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-marvel--zv98mr42qr6r.code.run/comics"
        );
        console.log(response.data);
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
        <h2>Comics</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Search a comic by title..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="caroussel">
          {data.results
            .filter((comics) =>
              comics.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((comics) => {
              return (
                <div className="comic-card" key={comics._id}>
                  <p className="comic-title">{comics.title}</p>
                  <img
                    src={`${comics.thumbnail.path}/portrait_incredible.${comics.thumbnail.extension}`}
                    alt=""
                  />
                  <p className="comic-desc">{comics.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};
export default Comics;
