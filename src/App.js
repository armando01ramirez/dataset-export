import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';


const userData = [
  {
    id: 01,
    name: "tania",
    tel: "2391234455",
    note: "tareas",
    direction: "Avenida cuahutemoc",
  },
  {
    id: 02,
    name: "jose",
    tel: "2390381199",
    note: "cocina",
    direction: "juarez",
  },
  {
    id: 03,
    name: "ignacio",
    tel: "2391320978",
    note: "limpieza",
    direction: "Calle hidalgo",
  },
  {
    id: 04,
    name: "Rocio",
    tel: "2390987632",
    note: "cocina",
    direction: "5 sur",
  },
  {
    id: 05,
    name: "rogelio",
    tel: "2391185749",
    note: "Entregar pendientes",
    direction: "la rotonda",
  },
];
const [users, setUsers] = useState(userData);

const addUser = (user) => {
  user.id = uudiv4();
  setUsers([...users, user]);
};

const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id != id));
};

const [bandera, setBandera] = useState(false);
const [currentUser, setCurrentUser] = useState({
  id: null,
  name: "",
  tel: "",
  note: "",
  direction: "",
});

const editRow = (user) => {
  setBandera(true);
  setCurrentUser({
    id: user.id,
    name: user.name,
    tel: user.tel,
    note: user.note,
    direction: user.direction,
  });
};

const updateUser = (id, updateUser) => {
  setBandera(false);
  setUsers(users.map((user) => (user.id === id ? updateUser : user)));
};

  function App() {
    return (
      <div className="Tabla de Meses">
        <h1>exportar datos en React</h1>
        <hr/>
        
  
      <div ref={ref}>
        
        
      </div>
      
      <table>
          <tr>
            <td><h2>Exportar a  Excel</h2></td>
            <td><h2>Exportar a PDF</h2></td>
          </tr>
          <tr>
            <td>
            <ReactHTMLTableToExcel 
              id="react-data-table-component" //id se le coloca a la tabla
              className="btn btn-success" //es el nombre del boton
              table="table-to-xls" //nombre de la tabla y es igual al del id
              filename="tablexls" //nombre del archivo
              sheet="tablexls" //nombre de la hoja
              //nombre del boton
              buttonText="Download as XLS"/>  
              </td>
            <td>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Descargar en Pdf</button>}
              </Pdf>
  
            </td>
          </tr>
  
        </table>
  
      </div>
    );
  }


export default App;
