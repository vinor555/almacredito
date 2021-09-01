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
    console.log(data);
    return http.post("/clientes/referenciaPersonal/save", data);
  }

  update(data) {
    return http.post(`/clientes/referenciaPersonal/save`, data);
  }

  delete(data) {
    return http.delete(`/clientes/referenciaPersonal`, data);
  }

  deleteAll() {
    return http.delete("/tutorials");
  }
}

export default new TutorialDataService();
