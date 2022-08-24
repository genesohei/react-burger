import { API_URL } from "./constants";

export const ApiService = {
    checkResponse(resolve, reject, result) {
        return new Promise(async () => {
            if (!result.ok) {
                return reject(`Ошибка ${result.status}`);
            }
            const data = await result.json();
            if (data.success) {
                return resolve(data);
            }
            return reject('Отсутствуют данные');
        })
    },
    get(resource) {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(`${API_URL}${resource}`);
            await this.checkResponse(resolve, reject, result);
        });
    },
    post(resource, options = {}) {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(`${API_URL}${resource}`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(options)
            });
            await this.checkResponse(resolve, reject, result);
        })
    },
};

export const Orders = {
    makeAnOrder(options) {
        return ApiService.post('/orders', options);
    }
};

export const Ingredients = {
    getIngredients() {
        return ApiService.get('/ingredients');
    }
};