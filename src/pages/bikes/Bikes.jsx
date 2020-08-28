import React, { useState, useEffect } from "react";
import "./bikes.css";
import { Animated } from "react-animated-css";
import Loader from "../../components/loader/Loader";
import { RiCloseLine } from "react-icons/ri";

function Bikes() {
  const [categories, setCategory] = useState([]);
  // const [availabilityFilter , setAvailable] = useState(false);
  const [searchTermFilter, setSearchTerm] = useState("");
  const [isAscendingFilter, setSort] = useState(true);
  const [selectedCategoryId, setCategoryId] = useState(0);
  const [bikes, setBikes] = useState([]);
  const [loading, setloading] = useState(true);
  const [modal, setModal] = useState({
    selectedBike: null
  });

  useEffect(() => {
    fetch("https://localhost:44322/api/car")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setBikes(data);
          setloading(false);
        }, 1100);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:44322/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  let filteredBikes = !searchTermFilter
    ? bikes
    : bikes.filter((bike) =>
        bike.name.toLowerCase().includes(searchTermFilter.toLowerCase())
      );

  filteredBikes =
    selectedCategoryId === 0
      ? filteredBikes
      : bikes.filter((a) => a.categoryID === selectedCategoryId);

  filteredBikes = filteredBikes.sort((a, b) => {
    return isAscendingFilter
      ? a.priceBike - b.priceBike
      : b.priceBike - a.priceBike;
  });

  // filteredBikes = filteredBikes.filter((x) => x.available === availabilityFilter )

  return (
    <React.Fragment>
      <Animated
        animationIn="flash"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        {loading && <Loader />}
      </Animated>
      <div className="container">
        <div class="bikes-components">
          <div class="input-group mb-3 input-comp">
            <div class="input-group-prepend">
              <label
                class="input-group-text"
                for="inputGroupSelect01"
                id="custom-select-text"
              >
                Category
              </label>
            </div>
            <select
              className="custom-select"
              onChange={(e) => {
                setCategoryId(parseInt(e.target.value));
              }}
            >
              <option value={selectedCategoryId}>--Select category--</option>
              {categories.map((category, i) => (
                <option value={category.id}>{category.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="btn-sort">
            <button
              type="button"
              onClick={() => {
                setSort(!isAscendingFilter);
              }}
            >
              Price low to high
            </button>
            {/* <button
          type="button"
          onClick={() => setAvailable(!availabilityFilter)}>
           Available
          </button> */}
          </div>
          <div className="bikes-search">
            <input
              placeholder="Search your bike"
              type="text"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <Animated
        animationIn="bounceIn"
        animationOut="fadeOutLeft"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div id="bikes-container">
          {filteredBikes.map((bike, i) => {
            return (
              <div className="col-sm-4">
                <section id={`bike-${i}`} className="bike-wrapper">
                  <img
                    className="img-thumbnail"
                    src={`https://localhost:44322/${bike.img}`}
                    alt={bike.name}
                  />
                  <div className="bike-name">
                    <h2>{bike.name}</h2>
                  </div>
                  <div className="bike-description">
                    <p className="responsive-text">{bike.descriptionBike}</p>
                  </div>
                  <div className="bike-price">
                    <p>
                      Price:{" "}
                      <p className="bike-price-color">${bike.priceBike}</p>
                    </p>
                  </div>
                  <div className="bike-category">
                    <p>
                      Bike category:
                      <p className="mBike">{bike.category.categoryName}</p>
                    </p>
                  </div>
                  <div className="bike-available">
                    <p className="responsive-text">
                      <CategoryAvailable available={bike.available} />
                    </p>
                  </div>
                  <div className="bike-btn-details">
                    <Animated
                      animationIn="fadeIn"
                      animationOut="fadeOut"
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      isVisible={true}
                    >
                      <button
                        type="submit"
                        href={`bike-${i}`}
                        rel="modal"
                        className="btn btn-info"
                        id="btn-details"
                        onClick={() =>
                          setModal({
                            selectedBike: bike,
                          })
                        }
                      >
                        Details
                      </button>
                    </Animated>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </Animated>

      {modal.selectedBike && (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <div className="bike-modal">
            <div className="bike-modal-body">
              <div className="btn-modal">
                <RiCloseLine
                  className="btn-modal-close"
                  onClick={() =>
                    setModal({
                      selectedBike: null,
                    })
                  }
                ></RiCloseLine>
              </div>
              <p>{modal.selectedBike.name}</p>
            </div>
          </div>
        </Animated>
      )}
    </React.Fragment>
  );
}

const CategoryAvailable = (props) => {
  if (props.available === true) {
    return (
      <div className="available">
        <p className="font-color-available">Available: </p>
        <span className="checkmark">
          <div className="checkmark_circle"></div>
          <div className="checkmark_stem"></div>
          <div className="checkmark_kick"></div>
        </span>
      </div>
    );
  } else {
    return (
      <div className="not-available">
        <p className="font-color-not-available">Not available: </p>
        <span className="not-checkmark">
          <div className="not-checkmark_circle"></div>
          <div className="not-checkmark_stem"></div>
          <div className="not-checkmark_kick"></div>
        </span>
      </div>
    );
  }
};

// class Bikes extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bikes: [],
//     };
//   }

//   componentWillMount() {
//     fetch("https://localhost:44322/api/car")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           ...this.state, // facem "spread" la state-ul existent ca sa nu pierdem age:50
//           bikes: data, // facem override la bikes din, bikes: [], in bikes: data
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.bikes.map((bike) => {
//           return <h1>{bike.name}</h1>;
//         })}
//       </div>
//     );
//   }
// }

export default Bikes;
