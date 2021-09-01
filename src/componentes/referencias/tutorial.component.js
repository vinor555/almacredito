import React, { Component } from "react";
import TutorialDataService from "../../services/tutorial.service";
import { Link } from "react-router-dom";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombreCompleto = this.onChangeNombreCompleto.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeTelefonoOficina = this.onChangeTelefonoOficina.bind(this);
    this.onChangeParentesco = this.onChangeParentesco.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeNombreCompleto(e) {
    const nombreCompleto = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          nombreCompleto: nombreCompleto,
        },
      };
    });
  }

  onChangeDireccion(e) {
    const direccion = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        direccion: direccion,
      },
    }));
  }

  onChangeTelefono(e) {
    const telefono = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        telefono: telefono,
      },
    }));
  }

  onChangeTelefonoOficina(e) {
    const telefonoOficina = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        telefonoOficina: telefonoOficina,
      },
    }));
  }

  onChangeParentesco(e) {
    const parentesco = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        parentesco: parentesco,
      },
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data.data[0],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status,
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then((response) => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(this.state.currentTutorial)
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "Referencia Personal fue actualizada correctamente!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    var data = {
      codigoCliente: this.state.currentTutorial.codigoCliente,
      codigoReferenciaPersonal:
        this.state.currentTutorial.codigoReferenciaPersonal,
    };
    TutorialDataService.delete(data)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(data);
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Referencia Personal</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={currentTutorial.nombreCompleto}
                  onChange={this.onChangeNombreCompleto}
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  value={currentTutorial.direccion}
                  onChange={this.onChangeDireccion}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  value={currentTutorial.telefono}
                  onChange={this.onChangeTelefono}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefonoOficina">Teléfono Oficina</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefonoOficina"
                  value={currentTutorial.telefonoOficina}
                  onChange={this.onChangeTelefonoOficina}
                />
              </div>

              <div className="form-group">
                <label htmlFor="parentesco">Parentesco</label>
                <input
                  type="text"
                  className="form-control"
                  id="parentesco"
                  value={currentTutorial.parentesco}
                  onChange={this.onChangeParentesco}
                />
              </div>
            </form>
            <Link to="/tutorials">
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Atras
              </button>
            </Link>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Borrar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Actualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
