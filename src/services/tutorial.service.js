import http from "../http-common";

class TutorialDataService {
  getAll(params) {
    return http.get("/clientes/referenciaPersonal", { params });
  }

  get(id) {
    return http.get(
      `/clientes/referenciaPersonal/getById?codigoCliente=099000015004&codigoReferenciaPersonal=${id}`
    );
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    console.log(data);
    return http.post(`/clientes/referenciaPersonal/save`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete("/tutorials");
  }
}

export default new TutorialDataService();
