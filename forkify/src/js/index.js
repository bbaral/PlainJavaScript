import Search from './model/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearSpinnerLoader} from './views/base';
import Recipe from "./model/Recipe";

/**
 * added added
 * Global state of the app
 * Search Object
 * Current recipe object
 * shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = async () => {
    //1) Get query from view
    const query = searchView.getInput(); //TODO
    if (query) {
        //2) New search object and add to state
        state.search = new Search(query);
        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.spinnerAfterSearch);
        //4) Search for recipes
        try {
            await state.search.getResults();
            //5) Render results on UI
            clearSpinnerLoader();
            searchView.renderResults(state.search.result);
        } catch (e) {
            console.log('Something went wrong ->' + e);
            clearSpinnerLoader();
        }
    }
};
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if (btn) {
        try {
            const goToPage = parseInt(btn.dataset.goto, 10);
            searchView.clearResults();
            searchView.renderResults(state.search.result, goToPage);
            console.log(goToPage);
        } catch (e) {
            console.log(e);
        }

    }
});

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
  const id = window.location.hash.replace('#', '');
  console.log(id);
  if (id) {
      state.recipe = new Recipe(id);
      try {
          // get recipe data
          await state.recipe.getRecipe();
          // calculate servings and time
          state.recipe.calcTime();
          state.recipe.calcServings();
          //render recipe
          console.log(state.recipe);
      } catch (e) {
          console.log(e);
      }

  }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
