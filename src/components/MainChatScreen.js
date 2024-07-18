import React, { useEffect, useState } from "react";

const MainChatScreen = () => {
  const [search, setSearch] = useState();
  const [information, setInformation] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const chatData = JSON.parse(localStorage.getItem("data")) || [];
    console.log(chatData);
    setInformation(chatData);
  }, []);

  const handleArrow = () => {
    const updatedInformation = [...information, search];
    setInformation(updatedInformation);
    localStorage.setItem("data", JSON.stringify(updatedInformation));
    setSearch("");
  };
  return (
    <div className="col-lg-9" style={{ alignContent: "center" }}>
      <div className="row">
        <div className="col">
          <div class="dropdown">
            <button
              class="btn border dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Smart MultiReader
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mainScreen">
        <div className="col">
          <h1>RINVENTIX'S CHAT APP</h1>
          <p>Maintained by Elon Musk, Donald Trump, and Andrew Huberman</p>
          <p className="text-center">
            The »Smart Smart Multi-Robot Storyboard Creator« knows four
            characters so far: Jack (Production Assistant), Andy (Artist), Lora
            (Admin Manager), Donna (Stack Representative), Rosy (Director),
            Tyring (Head of CDFI), Derya (Head of Action), and Louis Litt (Legal
            Employee).
          </p>
        </div>
        <div className="row">
          <div className="col d-flex">
            <div className="border p-4 m-2">
              Jack and Andy argue over a patient’s file.
            </div>
            <div className="border p-4 m-2">
              Rosy and Tyring meet in the hallway.
            </div>
            <div className="border p-4 m-2">
              Derya and Litt clean the CSSD after work.
            </div>
            <div className="border p-4 m-2">
              Illustrate Mauricio, Derya and Hans hav...
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div class="input-group mb-3 rounded">
            <span class="input-group-text">
              <img src="/image.png" alt="noImage" height={20} width={20} />
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
              onChange={handleInput}
              value={search}
            />
            <span class="input-group-text">
              <i class="fa-solid fa-arrow-up" onClick={handleArrow}></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChatScreen;
