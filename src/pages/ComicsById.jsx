import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicsById = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--zv98mr42qr6r.code.run/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <h2>Comics for this character</h2>
      <div className="caroussel">
        {data.comics.map((comic) => {
          return (
            <div className="comic-card" key={comic._id}>
              <p className="comic-title">{comic.title}</p>
              <img
                src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                alt="comics for a specific character"
              />
              <p className="comic-desc">{comic.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default ComicsById;
