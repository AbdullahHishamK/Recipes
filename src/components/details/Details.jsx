import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Details = () => {
  const { idMeal } = useParams();

  const { data, error, isLoading } = useQuery(`details-${idMeal}`, async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const meal = data?.meals?.[0];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <div className="container mx-auto p-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">
              {meal?.strMeal}
            </h1>
            <div className="grid gap-4 items-stretch lg:grid-cols-2">
              <div>
                <img src={meal?.strMealThumb} alt="" className="w-full rounded-2xl mb-8" />
                <ul className="flex gap-4 justify-center">
                  <li className="bg-red-600 text-white py-2 px-4 rounded-lg flex gap-2 justify-center items-center">
                  <i className="fa-brands fa-youtube"></i>
                    <a
                      target="_blank"
                      href={`https://www.youtube.com/watch?v=${meal?.strYoutube}`}
                      className="flex gap-2 justify-center items-center"
                    >
                      youtube
                    </a>
                  </li>
                  <li className="bg-[#21ba75] text-white py-2 px-4 rounded-lg flex gap-2 justify-center items-center">
                  <i className="fa-solid fa-globe"></i>
                    <a
                      target="_blank"
                      href={meal?.strSource}
                      className="flex gap-2 justify-center items-center"
                    >
                      source
                    </a>
                  </li>
                </ul>
              </div>
              <p className="font-pacifico">{meal?.strInstructions}</p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white rounded-2xl p-4">
              <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">{meal?.strMeal}</h3>
              {ingredients.map((item, index) => (
                <div key={index} className="flex justify-between p-2 border-b-2 last-of-type:border-b-0">
                  <span>{item.ingredient}</span>
                  <span>{item.measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;