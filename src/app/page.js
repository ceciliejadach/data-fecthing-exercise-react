export default async function Page() {
  let response = await fetch("https://dummyjson.com/recipes");
  let data = await response.json();
  return (
    <ul className="grid grid-cols-4">
      {data.recipes.map((recipe) => (
        <li className="py-4 px-4" key={recipe.id}>
          <div className="grid">
            <span>
              <strong>{recipe.name}</strong>
            </span>
            <span> {recipe.ingredients}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
