import useFetch from "react-fetch-hook";
import Card from "./components/Card";
import Page from "./components/Page";
import Masonry from "react-masonry-css";
import Icon from "./components/Icon";
import "./Mansory.css";

export default function App() {
  var api_endpoint = new URL("http://192.168.1.19:8000");
  var search_endpoint = new URL("/search", api_endpoint);
  search_endpoint.search = new URLSearchParams({
    q: "кот плачет",
    limit: 20,
    min_score: 50,
    delay: 3,
  });

  const { isLoading, data, error } = useFetch(search_endpoint);

  return (
    <div className="App">
      <Page>
        <div class="flex justify-center overflow-y-scroll p-4 sm-scrollbar md:scrollbar">
          <div class="flex flex-col justify-center items-center mt-12">
            {isLoading && (
              <>
                <Icon name="loading" className="h-8 w-8 animate-spin" />
                <p class="mt-2">Loading</p>
              </>
            )}
            {error && (
              <>
                <Icon name="warning" className="h-8 w-8" />
                <p class="mt-2">There is a problem fetching the data:</p>
                <p>{error.toString()}</p>
              </>
            )}
          </div>

          {!isLoading && data && (
            <Masonry
              breakpointCols={{ default: 4, 960: 3, 730: 2, 500: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {data.results.map(({ id, text, images, score }) => {
                console.log(id, text, images, score);
                return (
                  <Card
                    key={text}
                    id={id}
                    images={images}
                    text={text}
                    score={score}
                  />
                );
              })}
            </Masonry>
          )}
        </div>
      </Page>
    </div>
  );
}
