import http, { individual, catalogo } from "../http-common";

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

  getDepartamentosAll() {
    return catalogo.get("/departamentos/all");
  }

  getMunicipiosByCodigoDepartamento(departamento) {
    return catalogo.get(
      `/municipios/findAllByCodigoDepartamento?codigoDepartamento=${departamento}`
    );
  }

  getPaisesAll() {
    return catalogo.get("/paises/all");
  }

  getTiposDocumentoAll() {
    return catalogo.get("/tiposDocumento/all");
  }

  getGenerosAll() {
    return catalogo.get("/generos/all");
  }

  getEstadosCivilesAll() {
    return catalogo.get("/estadosCiviles/all");
  }

  getNivelesAcademicosAll() {
    return catalogo.get("/nivelesAcademicos/all");
  }

  getProfesionesAll() {
    return catalogo.get("/profesiones/all");
  }

  getOcupacionesAll() {
    return catalogo.get("/ocupaciones/all");
  }
}

export default new TutorialDataService();
