// fetches API data  

fetch('http://localhost:8080/item/all', { cache: "no-cache" })
    .then(
        (response) => {
            if (response.ok) {
                return response.json();
            }
        throw new Error("Request failed!");
        },
        (networkError) => {
            console.log(networkError.message);
        }
)
.then((jsonResponse) => {
  // Navigates the jsonResponse and accesses the required array
    const products = jsonResponse._embedded.productList;

  // Passes the retrieved products array into the rendering function
    addProductCards(products);

  // Adds event listeners to all newly created edit/delete modals
    addEventListeners();
});

