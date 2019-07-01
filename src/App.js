import React, { useState } from 'react';
import './App.css';
import { data_a, headers_a, data_b, headers_b, data_c, headers_c } from './data.js';
import TableA from './components/TableA';
import TableBC from './components/TableBC';


// const [row, setRow] = useState('');

function App() {
  return (
    <body>
      <TableA data={data_a} headers={headers_a} />
      <TableBC dataB={data_b} headersB={headers_b} dataC={data_c} headersC={headers_c} />
    </body>
  );
}

export default App;
