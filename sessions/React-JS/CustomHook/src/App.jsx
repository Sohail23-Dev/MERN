import React from "react";
import Custom from "./Custom";
const App = () => {
  const [data] = Custom("https://jsonplaceholder.typicode.com/posts");
  // console.log(data)
  return (
    <>
      {data &&
        data.map((items) => {
          return (
            <div class="bg-white dark:bg-gray-900 ...">
              <h3 class="text-gray-900 dark:text-white ...">
                {items.id}
              </h3>
              <p class="text-gray-500 dark:text-gray-400 ...">
                {items.title}{items.body}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default App;
