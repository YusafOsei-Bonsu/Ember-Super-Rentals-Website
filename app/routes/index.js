import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ["Condo", "Townhouse", "Apartment"]

class IndexRoute extends Route {
    async model() {
        // Getting the JSON data from the local dummy API
        let response = await fetch('/api/rentals.json');
        let { data } = await response.json();

        return data.map(model => {
            let type, { attributes } = model;

            COMMUNITY_CATEGORIES.includes(attributes.category) ? type = "Community" : type = "Standalone";

            return { type, ...attributes };
        });
    }
}

export default IndexRoute;