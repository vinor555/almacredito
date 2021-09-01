import React from "react";
import {
  List,
  Datagrid,
  TextField,
  
  EditButton,
  DeleteButton,
} from "react-admin";

const ListaReferenciasPersonales = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source='data.codigoTipoPersona' />
          <TextField source='data.descripcion' />
          <EditButton basePath='/referenciasPersonales' />
          <DeleteButton basePath='/referenciasPersonales' />
      </Datagrid>
  </List>;
};

export default ListaReferenciasPersonales;
