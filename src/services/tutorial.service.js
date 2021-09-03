import http, { individual } from "../http-common";

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
    return http.post("/clientes/referenciaPersonal", data);
  }

  update(data) {
    return http.put(`/clientes/referenciaPersonal`, data);
  }

  delete(data) {
    return http.delete(
      `/clientes/referenciaPersonal?codigoCliente=${data.codigoCliente}&codigoReferenciaPersonal=${data.codigoReferenciaPersonal}`
    );
  }

  deleteAll() {
    return http.delete("/tutorials");
  }
  //personaIndividual
  getAllIndividual(params) {
    return individual.get("/clientes/individual", { params });
  }

  getIndividualById(id) {
    return individual.get(`/clientes/individual/getById?codigoCliente=${id}`);
  }
}

export default new TutorialDataService();
