import api from './Api';

const DragonService = {
    getAll: () => api.get('/dragon'),
    getById: (id) => api.get(`/dragon/${id}`),
    create: (data) => api.post('/dragon', data),
    update: (id, data) => api.put(`/dragon/${id}`, data),
    delete: (id) => api.delete(`/dragon/${id}`)
};

export default DragonService;
