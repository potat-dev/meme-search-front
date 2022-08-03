import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import Page from "./components/Page";

export default function App() {
  const { isLoading, data, error } = useFetch(
    "http://127.0.0.1:8000/search/кот?limit=10&min_score=70"
  );

  // (debug) console.log(data) when data is loaded
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Page>
        <div class='flex justify-center overflow-y-scroll p-5 sm-scrollbar md:scrollbar'>
          {isLoading && <>
            <h2>Loading</h2>
            <progress class="progress w-56"></progress>
          </>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <div>
            {data &&
              data.results.map(({ id, text, images }) => (
                <div key={id} class="mb-5">
                  <div class="flex flex-row gap-x-2 overflow-x-scroll sm-scrollbar md:scrollbar">
                    {images.map((image) => (
                      <img src={image} alt={image.toString()} class="object-contain h-64 mb-3" />
                    ))}
                  </div>
                  {text}
                </div>
              ))}
          </div>
        </div>
      </Page>
    </div>
  );
}
