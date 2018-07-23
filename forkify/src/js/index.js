import Search from './model/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearSpinnerLoader} from './views/base';

/**
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
        await searchView.clearInput();
        await searchView.clearResult();
        await renderLoader(elements.spinnerAfterSearch);
        //4) Search for recipes
        await state.search.getResults();
        //5) Render results on UI
        clearSpinnerLoader();
        searchView.renderResults(state.search.result);
    }
};
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
});


