import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }


    async getResults(query) {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = '6e7d1abc5692eb188256bf21d3527f37';

        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
