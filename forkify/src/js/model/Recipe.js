import axios from 'axios';
import {key, proxy} from "../forkifyAPI";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            console.log(res);
        } catch (error) {
            alert(error);
        }
    }
}