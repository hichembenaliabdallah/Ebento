export const checkStatus = axios
  .get("http://localhost:3001/isAuthenticated", { withCredentials: true })
  .then((response) => {
    if (response.data.isAuthenticated) {
      router.replace("/timeline");
      console.log("Successfully logged in");
    } else {
      console.log("no");
    }
  });

export const getUser = (id) =>
  axios
    .get("http://localhost:3001/user/" + id, { withCredentials: true })
    .then((response) => {
      if (response.data.isAuthenticated) {
        router.replace("/timeline");
        console.log("Successfully logged in");
      } else {
        console.log("no");
      }
    });
