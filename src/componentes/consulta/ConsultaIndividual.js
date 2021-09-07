import React, { Component } from "react";
import TutorialDataService from "../../services/services";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

export default class ConsultaIndividual extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",

      page: 1,
      count: 0,
      pageSize: 10,
    };

    this.pageSizes = [10, 15, 20];
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
    this.retrieveTutorials();
  }

  getRequestParams(searchTitle, page, pageSize) {
    let params = {};

    if (searchTitle) {
      params["nombreCompleto"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    //params["codigoCliente"] = "099000015004";

    return params;
  }

  retrieveTutorials() {
    const { searchTitle, page, pageSize } = this.state;

    const params = this.getRequestParams(searchTitle, page, pageSize);

    TutorialDataService.getAllIndividual(params)
      .then((response) => {
        const { totalPages } = response.data;
        const tutorials = response.data.data;
        this.setState({
          tutorials: tutorials,
          count: totalPages,
        });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveTutorials();
      }
    );
  }

  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1,
      },
      () => {
        this.retrieveTutorials();
      }
    );
  }

  render() {
    const {
      searchTitle,
      tutorials,
      currentTutorial,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return (
      <div className="list row">
        <div className="col-md-7">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.retrieveTutorials}
              >
                Buscar
              </button>
            </div>
            
          </div>
        
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.nombreCompleto}
                </li>
              ))}
          </ul>

          <div className="mt-3">
            <Pagination
              className="my-3"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={this.handlePageChange}
            />
            {"Items por página: "}
            <select onChange={this.handlePageSizeChange} value={pageSize}>
              {this.pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <Link to="/formularioIndividual">
            <button
              className="m-3 btn btn-sm btn-primary"
              color='#3f51b5'
              //onClick={this.removeAllTutorials}
            >
              Crear Nuevo
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          {console.log(currentTutorial)}
          {currentTutorial ? (
            <div>
              <h4>{currentTutorial.nombreCompleto}</h4>
              
              <div>
                <label>
                  <strong>Codigo Cliente:</strong>
                </label>{" "}
                {currentTutorial.codigoCliente}
              </div>
              <div>
                <label>
                  <strong>Número Id:</strong>
                </label>{" "}
                {currentTutorial.numeroDocumentoIdentificacion}
              </div>
              <div>
                <label>
                  <strong>Nit:</strong>
                </label>{" "}
                {currentTutorial.nit}
              </div>
              

              <Link
                to={"/formularioIndividual/" + currentTutorial.codigoCliente}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Click en un cliente...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
