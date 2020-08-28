import { Link } from "react-router-dom";
import "./admin.css";
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";

function Admin() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44322/api/car")
      .then((response) => response.json())
      .then((data) => {
        setBikes(data);
      });
  }, []);
  return (
    <React.Fragment>
      <div class="container">
        <caption>Admin table</caption>
        <div className="btn-table">
          <Link to="/createoredit">
            <button className="btn btn-primary" type="submit">
              Add bike
            </button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Available</th>
              <th>Favorite</th>
              <th>Price Bike</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike, i) => {
              return (
                <tr>
                  <td>
                    <div className="btn-edit">
                    <Link to={`/createoredit/${bike.id}`}>  <FiEdit></FiEdit></Link>
                    </div>
                  </td>
                  <td>{bike.id}</td>
                  <td>{bike.name}</td>
                  <td>{bike.available === true ? "yes" : "no"}</td>
                  <td>{bike.favorite === true ? "yes" : "no"}</td>
                  <td>{bike.priceBike}</td>
                  <td>{bike.category.categoryName}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Admin;
