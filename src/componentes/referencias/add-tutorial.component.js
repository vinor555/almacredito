import React, { Component } from "react";
import TutorialDataService from "../../services/services";
import { Link } from "react-router-dom";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeTelefonoOficina = this.onChangeTelefonoOficina.bind(this);
    this.onChangeParentesco = this.onChangeParentesco.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      nombre: "",
      direccion: "",
      telefono: "",
      telefonoOficina: "",
      parentesco: "",
      published: false,

      submitted: false,
    };
  }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }

  onChangeDireccion(e) {
    this.setState({
      direccion: e.target.value,
    });
  }

  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value,
    });
  }

  onChangeTelefonoOficina(e) {
    this.setState({
      telefonoOficina: e.target.value,
    });
  }

  onChangeParentesco(e) {
    this.setState({
      parentesco: e.target.value,
    });
  }

  saveTutorial() {
    var data = {
      codigoCliente: "099000015004",
      nombreCompleto: this.state.nombre,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
      telefonoOficina: this.state.telefonoOficina,
      parentesco: this.state.parentesco,
    };

    TutorialDataService.create(data)
      .then((response) => {
        this.setState({
          nombre: response.data.nombre,
          direccion: response.data.direccion,
          telefono: response.data.telefono,
          telefonoOficina: response.data.telefonoOficina,
          parentesco: response.data.parentesco,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      nombre: "",
      direccion: "",
      telefono: "",
      telefonoOficina: "",
      parentesco: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Referencia personal creada correctamente!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Crear Nuevo
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                name="nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                required
                value={this.state.Direccion}
                onChange={this.onChangeDireccion}
                name="direccion"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                required
                value={this.state.telefono}
                onChange={this.onChangeTelefono}
                name="telefono"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefonoOficina">Teléfono Oficina</label>
              <input
                type="text"
                className="form-control"
                id="telefonoOficina"
                required
                value={this.state.telefonoOficina}
                onChange={this.onChangeTelefonoOficina}
                name="telefonoOficina"
              />
            </div>

            <div className="form-group">
              <label htmlFor="parentesco">Parentesco</label>
              <input
                type="text"
                className="form-control"
                id="parentesco"
                required
                value={this.state.parentesco}
                onChange={this.onChangeParentesco}
                name="parentesco"
              />
            </div>
            <Link to="/tutorials"><button className="btn btn-success">Atras</button></Link>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Guardar
            </button>
          </div>
        )}
      </div>
    );
  }
}
