import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';


const tabladatos = [
  {
    "asd": 90065,
    "dfg": 56704,
    "wer": 55753,
    "sdf": 40115,
    "gf": 251
  },
  {
    "asd": 66394,
    "dfg": 57181,
    "wer": 97939,
    "sdf": 64688,
    "gf": 50230
  },
  {
    "asd": 47191,
    "dfg": 41619,
    "wer": 12265,
    "sdf": 69306,
    "gf": 8014
  },
  {
    "asd": 42955,
    "dfg": 18653,
    "wer": 46940,
    "sdf": 64105,
    "gf": 91455
  },
  {
    "asd": 75550,
    "dfg": 17897,
    "wer": 49162,
    "sdf": 10597,
    "gf": 67008
  },
  {
    "asd": 30418,
    "dfg": 85466,
    "wer": 4027,
    "sdf": 57753,
    "gf": 19945
  },
  {
    "asd": 85836,
    "dfg": 41965,
    "wer": 57308,
    "sdf": 93971,
    "gf": 64581
  },
  {
    "asd": 69945,
    "dfg": 82904,
    "wer": 64146,
    "sdf": 84745,
    "gf": 93279
  },
  {
    "asd": 18918,
    "dfg": 7428,
    "wer": 20542,
    "sdf": 83785,
    "gf": 80091
  },
  {
    "asd": 93810,
    "dfg": 19664,
    "wer": 619,
    "sdf": 88109,
    "gf": 24985
  },
  {
    "asd": 57686,
    "dfg": 70181,
    "wer": 73862,
    "sdf": 6001,
    "gf": 34777
  },
  {
    "asd": 21539,
    "dfg": 9045,
    "wer": 58548,
    "sdf": 55064,
    "gf": 25255
  },
  {
    "asd": 54898,
    "dfg": 66064,
    "wer": 97977,
    "sdf": 25894,
    "gf": 60091
  },
  {
    "asd": 92720,
    "dfg": 87942,
    "wer": 95630,
    "sdf": 11663,
    "gf": 8464
  },
  {
    "asd": 28069,
    "dfg": 7382,
    "wer": 60196,
    "sdf": 45487,
    "gf": 99375
  },
  {
    "asd": 56740,
    "dfg": 37846,
    "wer": 70644,
    "sdf": 9452,
    "gf": 26219
  },
  {
    "asd": 65183,
    "dfg": 4276,
    "wer": 14429,
    "sdf": 2345,
    "gf": 35759
  },
  {
    "asd": 2741,
    "dfg": 49964,
    "wer": 80240,
    "sdf": 1984,
    "gf": 56064
  },
  {
    "asd": 39101,
    "dfg": 68523,
    "wer": 40057,
    "sdf": 11703,
    "gf": 23818
  },
  {
    "asd": 16563,
    "dfg": 13643,
    "wer": 10954,
    "sdf": 52273,
    "gf": 46414
  },
  {
    "asd": 67488,
    "dfg": 59040,
    "wer": 74629,
    "sdf": 94245,
    "gf": 84277
  },
  {
    "asd": 2479,
    "dfg": 79384,
    "wer": 54333,
    "sdf": 16832,
    "gf": 23279
  },
  {
    "asd": 65790,
    "dfg": 86619,
    "wer": 15155,
    "sdf": 80706,
    "gf": 29544
  },
  {
    "asd": 26954,
    "dfg": 13783,
    "wer": 55731,
    "sdf": 7070,
    "gf": 74408
  },
  {
    "asd": 80064,
    "dfg": 74231,
    "wer": 29211,
    "sdf": 32768,
    "gf": 44072
  },
  {
    "asd": 59783,
    "dfg": 32319,
    "wer": 23858,
    "sdf": 32237,
    "gf": 97896
  },
  {
    "asd": 48500,
    "dfg": 96137,
    "wer": 61134,
    "sdf": 66123,
    "gf": 88819
  },
  {
    "asd": 54737,
    "dfg": 96759,
    "wer": 65820,
    "sdf": 49817,
    "gf": 69670
  },
  {
    "asd": 53332,
    "dfg": 61901,
    "wer": 86237,
    "sdf": 463,
    "gf": 72846
  },
  {
    "asd": 77676,
    "dfg": 9525,
    "wer": 69906,
    "sdf": 24580,
    "gf": 63820
  },
  {
    "asd": 18734,
    "dfg": 62647,
    "wer": 83554,
    "sdf": 75101,
    "gf": 68885
  }
];

const columnas = [
  {
    name: 'ENERO',
    selector: 'asd',
    sortable: true  
  },
  {
    name: 'FEBRERO',
    selector: 'dfg',
    sortable: true  
  },
  {
    name: 'MARZO',
    selector: 'wer',
    sortable: true  
  },
  {
    name: 'ABRIL',
    selector: 'sdf',
    sortable: true  
  },
  {
    name: 'MAYO',
    selector: 'gf',
    sortable: true  
  },
];

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#FFFFFF',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

const titulo = "Tabla de Meses";

function App() {
  return (
    <div className="Container">
    <DataTable columns={columnas} data={tabladatos} title={titulo} theme="solarized" pagination/>
    </div>

    
  );

  function App() {
    return (
      <div className="container">
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
}

export default App;
