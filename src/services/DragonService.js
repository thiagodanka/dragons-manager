import api from './Api';

const DragonService = {
    getAll: () => api.get('/dragons'),
    getById: (id) => api.get(`/dragons/${id}`),
    create: (data) => api.post('/dragons', data),
    update: (id, data) => api.put(`/dragons/${id}`, data),
    delete: (id) => api.delete(`/dragons/${id}`)
};

export default DragonService;
