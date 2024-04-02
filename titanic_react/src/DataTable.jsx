import React from 'react';
import './DataTable.css'; // Assurez-vous de créer ce fichier CSS pour le style

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Survived</th>
          <th>Class</th>
          <th>Name</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Siblings/Spouses</th>
          <th>Parents/Children</th>
          <th>Ticket</th>
          <th>Fare</th>
          <th>Cabin</th>
          <th>Embarked</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.PassengerId}</td>
            <td>{item.Survived ? 'Yes' : 'No'}</td>
            <td>{item.Pclass}</td>
            <td>{item.Name}</td>
            <td>{item.Sex}</td>
            <td>{item.Age}</td>
            <td>{item.SibSp}</td>
            <td>{item.Parch}</td>
            <td>{item.Ticket}</td>
            <td>{item.Fare}</td>
            <td>{item.Cabin || 'N/A'}</td>
            <td>{item.Embarked}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;