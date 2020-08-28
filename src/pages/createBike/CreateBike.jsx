import React, { useState, useEffect } from "react";
import "./createbike.css";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";

function CreateBike() {
  const [categories, setCategory] = useState([]);
  const [state, setState] = useState({});
  const { id } = useParams();

  if (id === undefined) {
    console.log("creating");
  } else {
    console.log(id);
  }

  useEffect(() => {
    if (id !== undefined) {
      fetch(`https://localhost:44322/api/car/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setState({
            name: data.name,
            priceBike: data.priceBike,
            available: data.available,
            favorite: data.favorite,
            categoryID: data.categoryID,
          });
        }); 
    }
  }, []);

  useEffect(() => {
    fetch("https://localhost:44322/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const onSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    };
    fetch("https://localhost:44322/api/car", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  console.log(state);
  return (
    <div className="container">
      <div className="form-row d-flex justify-content-center">
        <div className="form-group col-md-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={(e) =>
              setState({
                ...state,
                name: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="form-group col-md-1">
          <label>Available</label>
          <select
            id="input"
            className="form-control"
            onChange={(e) =>
              setState({
                ...state,
                available: Boolean(e.target.value),
              })
            }
          >
            <option selected></option>
            <option value={true} selected={state.available === true}>
              yes
            </option>
            <option value={false} selected={state.available === false}>
              no
            </option>
          </select>
        </div>
        <div className="form-group col-md-1">
          <label>Favorite</label>
          <select
            id="input"
            className="form-control"
            onChange={(e) =>
              setState({
                ...state,
                favorite: Boolean(e.target.value),
              })
            }
          >
            <option selected></option>
            <option value={true} selected={state.favorite === true}>
              Yes
            </option>
            <option value={false} selected={state.favorite === false}>
              No
            </option>
          </select>
        </div>
        <div className="form-group col-md-1">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            value={state.priceBike}
            onChange={(e) =>
              setState({
                ...state,
                priceBike: parseInt(e.target.value),
              })
            }
          ></input>
        </div>
        <div className="form-group col-md-2">
          <label>Category</label>
          <select
            id="inputState"
            className="form-control"
            onChange={(e) =>
              setState({
                ...state,
                categoryID: parseInt(e.target.value),
              })
            }
          >
            <option selected>Select</option>
            {categories.map((category, i) => {
              return (
                <option
                  value={category.id}
                  selected={state.categoryID === category.id}
                >
                  {category.categoryName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="form-group d-flex justify-content-center">
        <button type="button" className="btn btn-primary" onClick={onSubmit}>
          Add Bike
        </button>
      </div>
    </div>
  );
}

export default CreateBike;
