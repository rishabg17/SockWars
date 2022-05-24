import React, { useEffect, useState } from "react";
import axios from 'axios';


const Eliminations = () => {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/fe557b31-4e38-489c-81db-d048fb75d6d8')
      .then((incomingData) => {
        setAPIData(incomingData.data);
      })
  }, []);

  return (
  <div>
    {APIdata.map((data) => {
    return (
      <div>
      <table class="eliminations">
        <thead>
          <tr>
            <th>Eliminated Player</th>
            <th>Date Eliminated</th>
          </tr>
        </thead>
        <tbody>
          <td>{data.EliminatedPlayer}</td>
          <td>{data.EliminationDate}</td>
        </tbody>
      </table>
      </div>
    )
  })}
    </div>
  )
}

export default Eliminations;
