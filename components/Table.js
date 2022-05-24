import React, { useEffect, useState } from "react";
import axios from 'axios';


const Table = () => {
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
        <table class="content-table">
            <thead>
              <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Number Eliminated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{data.Rank}</td>
                  <td>{data.Player}</td>
                  <td>{data.NumberEliminated}</td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  })}
    </div>
  )
}

export default Table;
