# A React based small app

This app was built to display images and data about products and allow the user to filter and search the products and drill down for more details. This app originally required a complete server reload of the page every time a user clicked a filter in the left menu. It did not contain a search function either. When a user clicked one of the thumbnails, an additional reload (server roundtrip) was required.

Adding React made the app lightning fast and the user did not need to wait for a page load every time they wanted more info or wanted to filter the products offered.

This app downloads all the data via JSON on initial load because it was built to work with Liferay (Java Portal) and I didn't think the client would approve of server side rendering using a node middleware.

Also, this example includes the JSON data for one of the categories (covers). The JSON was created from the Liferay portlets but the server URLs and endpoints weren't completely finished as of this writing due to approval from the system architect.

On the production build, my thought was a request would be made each time a user switched categories. All the data for a category would be requested once the user selected that category. I did not break the data down to smaller requests at this time since the JSON file for all products in a category was at most (155kb), which seemed an acceptable size for one request.

If more products were added, we might want to break this data into smaller chunks.

I used the dangerouslySetHTML function on the details page to display the HTML because the data is currently stored as HTML in the DB and the business did not intend to break this data into a more structured format at the time. I thought this would be acceptable use of the dangerouslySetHTML function since the html that would be displayed would never be changed or manipulated by the user. In fact the only way to change this data was through the Oracle system.

## License

MIT
