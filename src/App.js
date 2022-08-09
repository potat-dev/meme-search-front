import useFetch from "react-fetch-hook";
import Page from "./components/Page";
import Loading from "./components/Loading";
import MansoryGrid from "./components/MansoryGrid";

import config from "./Config";

export default function App() {
  var api_url = new URL(config.api_endpoint);
  var search_url = new URL(config.search_endpoint, api_url);
  search_url.search = new URLSearchParams({
    q: "кот",
    limit: 20,
    min_score: 50,
    delay: 1,
  });

  const { isLoading, data, error } = useFetch(search_url);

  return (
    <div className="App">
      <Page>
        <div class="flex justify-center overflow-y-scroll p-4 sm-scrollbar md:scrollbar">
          <Loading isLoading={isLoading} error={error} />
          <MansoryGrid isLoading={isLoading} data={data} />
        </div>
      </Page>
    </div>
  );
}
