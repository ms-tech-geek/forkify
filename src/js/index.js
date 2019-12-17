import Search from "./models/Search"


/* Global State of App
* - Search Object
* - Current Recipe Object
* - Shopping List Object
* - Like Recipes
*/

const state = {};

const search = new Search(`pizza`);
search.getResults();