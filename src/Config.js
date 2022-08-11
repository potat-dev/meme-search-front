const config = {
  app_name: "Meme Search",
  api_endpoint: "http://192.168.1.42:8000",
  // api_endpoint: "http://localhost:8000",
  search_endpoint: "/search",
  themes: [
    { name: "Light", id: "winter", icon: "sun" },
    { name: "Dark", id: "dark", icon: "moon" },
    { name: "Synthwave", id: "synthwave", icon: "star" },
    { name: "Cyberpunk", id: "cyberpunk", icon: "code" },
  ],
  mansory_columns: {
    default: 4,
    960: 3,
    730: 2,
    500: 1,
  },
  results_count: [10, 25, 50, 100], // up to 4 values
};

export default config;
