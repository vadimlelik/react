import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchAll } from "../fakeApi/api";
import Search from "../components/Search";

const Home = () => {
  const [episode, setEpisode] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  console.log(search);

  const hendleSearch = (str) => {
    setFilteredArray(
      filteredArray.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate(`${pathname}?search=` + str);
  };

  useEffect(() => {
    fetchAll().then((data) => {
      setEpisode(data);
      setFilteredArray(
        search
          ? data.filter((item) =>
              item.name
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data
      );
    });
  }, [search]);

  return (
    <div className="App">
      <Search cb={hendleSearch} />

      {episode
        ? filteredArray.map((item) => {
            return (
              <div key={item.id} style={{ display: "flex" }}>
                <div>Name : {item.name}</div>
                <div>Date : {item.airDate}</div>
              </div>
            );
          })
        : "loading"}
    </div>
  );
};

export default Home;
