import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils";

const fetchFilesData = async () => {
  const data = await fetchData();
  return data;
};

export const FilesDataTable = () => {
  const [filesData, setFilesData] = useState([]);

  useEffect(() => {
    fetchFilesData().then((data) => {
      setFilesData(data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <table className="table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {filesData.map((file, index) => (
                <tr key={index}>
                  <td>{file.file}</td>
                  <td>
                    {file.lines.map((line, index) => (
                      <p key={index}>{line.text}</p>
                    ))}
                  </td>
                  <td>
                    {file.lines.map((line, index) => (
                      <p key={index}>{line.number}</p>
                    ))}
                  </td>
                  <td>
                    {file.lines.map((line, index) => (
                      <p key={index}>{line.hex}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
