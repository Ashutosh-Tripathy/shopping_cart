import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
    {
        id: 'Sugar',
        quantity: 1,
        price: 5,
        discount: .5
    },
    {
        id: 'Salt',
        quantity: 1,
        price: 3,
        discount: .3
    },
    {
        id: 'Chocklate',
        quantity: 1,
        price: 20,
        discount: 0
    }
];

class ItemApi {
    static getAllItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], items));
            }, delay);
        });
    }


    static deleteItem(itemId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = items.findIndex(item => {
                    item.id == itemId;
                });
                items.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ItemApi;