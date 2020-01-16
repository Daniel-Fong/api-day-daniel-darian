const BASE_URL = 'https://thinkful-list-api.herokuapp.com/daniel-darian';

const listApiFetch = function (...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
  
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }

        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

function getItems() {    
return listApiFetch(`${BASE_URL}/items`);
};

function createItem(name) {
    let newItem = JSON.stringify({
        name: name,
    });
    return listApiFetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
};

function deleteItem(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
        method: 'DELETE',
    });
};

function updateItem(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
};

export default {
    createItem,
    getItems,
    updateItem,
    deleteItem
};