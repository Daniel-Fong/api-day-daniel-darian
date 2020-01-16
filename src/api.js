const BASE_URL = 'https://thinkful-list-api.herokuapp.com/daniel-darian';

function getItems() {    
return fetch(`${BASE_URL}/items`)
};

function createItem(name) {
    let newItem = JSON.stringify({
        name: name,
    });
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
};

export default {
    createItem,
    getItems
};