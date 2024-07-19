import React from "react";
import { useNavigate } from "react-router-dom";

const MainchatReference = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="MainContainer">
        <div className="sideBar">
          <svg
            width="220"
            height="24"
            viewBox="0 0 220 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 3.75C4.30964 3.75 3.75 4.30964 3.75 5V19C3.75 19.6904 4.30964 20.25 5 20.25H8.25V3.75H5ZM9.75 3.75V20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V5C20.25 4.30964 19.6904 3.75 19 3.75H9.75ZM5 21.75H9H19C20.5188 21.75 21.75 20.5188 21.75 19V5C21.75 3.48122 20.5188 2.25 19 2.25H9H5C3.48122 2.25 2.25 3.48122 2.25 5V19C2.25 20.5188 3.48122 21.75 5 21.75ZM16.5303 9.53033C16.8232 9.23744 16.8232 8.76256 16.5303 8.46967C16.2374 8.17678 15.7626 8.17678 15.4697 8.46967L12.4697 11.4697C12.1768 11.7626 12.1768 12.2374 12.4697 12.5303L15.4697 15.5303C15.7626 15.8232 16.2374 15.8232 16.5303 15.5303C16.8232 15.2374 16.8232 14.7626 16.5303 14.4697L14.0607 12L16.5303 9.53033Z"
              fill="#030712"
              fill-opacity="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M214.905 3.15533L214.905 3.1553C215.163 2.89814 215.511 2.75368 215.875 2.75368C216.239 2.75368 216.587 2.89816 216.845 3.15533C217.102 3.4125 217.246 3.7613 217.246 4.125C217.246 4.48869 217.102 4.83749 216.845 5.09467L216.845 5.0947L207.832 14.1084L214.905 3.15533ZM214.905 3.15533L207.832 14.1087C207.683 14.2568 207.5 14.3653 207.299 14.4241L207.299 14.4241L204.864 15.1359L205.576 12.7023L205.576 12.702C205.635 12.5009 205.743 12.3179 205.892 12.1698L205.892 12.1693L214.905 3.15533ZM215.875 1.25368C215.113 1.25368 214.383 1.55619 213.845 2.09467L213.845 2.0947L204.832 11.1082L204.832 11.1086L204.832 11.1087C204.505 11.4346 204.266 11.8372 204.136 12.2797L204.136 12.2805L203.296 15.1535L203.296 15.154C203.233 15.3691 203.229 15.5972 203.285 15.8142C203.341 16.0313 203.454 16.2294 203.612 16.3879C203.771 16.5463 203.969 16.6593 204.186 16.7149C204.403 16.7705 204.631 16.7667 204.846 16.704L204.846 16.7039L207.719 15.8639C208.162 15.7346 208.566 15.4958 208.892 15.1696L208.892 15.1693L217.905 6.15533L217.905 6.1553C218.444 5.61682 218.746 4.88651 218.746 4.125C218.746 3.36348 218.444 2.63314 217.905 2.09467C217.367 1.55619 216.636 1.25368 215.875 1.25368ZM201 2.25C200.271 2.25 199.571 2.53973 199.055 3.05546C198.54 3.57118 198.25 4.27065 198.25 5V19C198.25 19.7293 198.54 20.4288 199.055 20.9445C199.571 21.4603 200.271 21.75 201 21.75H215C215.729 21.75 216.429 21.4603 216.945 20.9445C217.46 20.4288 217.75 19.7293 217.75 19V12C217.75 11.5858 217.414 11.25 217 11.25C216.586 11.25 216.25 11.5858 216.25 12V19C216.25 19.3315 216.118 19.6495 215.884 19.8839C215.649 20.1183 215.332 20.25 215 20.25H201C200.668 20.25 200.351 20.1183 200.116 19.8839C199.882 19.6495 199.75 19.3315 199.75 19V5C199.75 4.66848 199.882 4.35054 200.116 4.11612C200.351 3.8817 200.668 3.75 201 3.75H208C208.414 3.75 208.75 3.41421 208.75 3C208.75 2.58579 208.414 2.25 208 2.25H201Z"
              fill="#030712"
              fill-opacity="0.5"
            />
          </svg>
          <div className="rectangle">
            <div className="previous5Charts">
              <h6>Previous 5 Days</h6>
              <p>Emma and Hans argue over a</p>
              <p>Werner visits the CSSD and wi </p>
              <p>Inge laughs with Emma about ···</p>
            </div>
            <div className="previous30DaysCharts">
              <h6>Previous 30 Days </h6>
              <p>Emma and Hans argue over a</p>
              <p>Werner visits the CSSD and wi </p>
              <p>Inge laughs with Emma about ···</p>
            </div>
            <div className="footer">
              <div class="btn-group dropup">
                <span
                  type="button"
                  class="btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/profile.webp"
                    alt="noImage"
                    height={28}
                    width={28}
                    style={{ marginRight: "7px" }}
                  />
                  Andreas Elisch
                </span>
              </div>
              <div>
                <i class="fa-solid fa-user-plus"></i> Invite people to Team
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="dropDown">
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
                <li></li>
              </ul>
            </div>
          </div>
          <div className="mainPhoto">
            <img
              src="/BotImage.png"
              alt="noImage"
              height={100}
              width={100}
              className="mainImage"
            />
          </div>
          <div>
            <span className="mainHeading">Smart Character Content Creator</span>
            <span style={{ marginLeft: "12px", marginBottom: "4px" }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3333 1.83333C14.3333 1.00491 13.6618 0.333334 12.8333 0.333334C12.0049 0.333334 11.3333 1.00491 11.3333 1.83333V3.66667V5.5C11.3333 6.32843 12.0049 7 12.8333 7C13.6618 7 14.3333 6.32843 14.3333 5.5V5.16667H19.25C20.0784 5.16667 20.75 4.49509 20.75 3.66667C20.75 2.83824 20.0784 2.16667 19.25 2.16667H14.3333V1.83333ZM1.25 3.66667C1.25 2.83824 1.92157 2.16667 2.75 2.16667H9.16667C9.99509 2.16667 10.6667 2.83824 10.6667 3.66667C10.6667 4.49509 9.99509 5.16667 9.16667 5.16667H2.75C1.92157 5.16667 1.25 4.49509 1.25 3.66667ZM11 9.5C10.1716 9.5 9.5 10.1716 9.5 11C9.5 11.8284 10.1716 12.5 11 12.5H19.25C20.0784 12.5 20.75 11.8284 20.75 11C20.75 10.1716 20.0784 9.5 19.25 9.5H11ZM1.25 11C1.25 10.1716 1.92157 9.5 2.75 9.5H5.83333V9.16667C5.83333 8.33824 6.50491 7.66667 7.33333 7.66667C8.16176 7.66667 8.83333 8.33824 8.83333 9.16667V11V12.8333C8.83333 13.6618 8.16176 14.3333 7.33333 14.3333C6.50491 14.3333 5.83333 13.6618 5.83333 12.8333V12.5H2.75C1.92157 12.5 1.25 11.8284 1.25 11ZM13.1667 18.3333V16.5C13.1667 15.6716 13.8382 15 14.6667 15C15.4951 15 16.1667 15.6716 16.1667 16.5V16.8333H19.25C20.0784 16.8333 20.75 17.5049 20.75 18.3333C20.75 19.1618 20.0784 19.8333 19.25 19.8333H16.1667V20.1667C16.1667 20.9951 15.4951 21.6667 14.6667 21.6667C13.8382 21.6667 13.1667 20.9951 13.1667 20.1667V18.3333ZM1.25 18.3333C1.25 17.5049 1.92157 16.8333 2.75 16.8333H11C11.8284 16.8333 12.5 17.5049 12.5 18.3333C12.5 19.1618 11.8284 19.8333 11 19.8333H2.75C1.92157 19.8333 1.25 19.1618 1.25 18.3333Z"
                  fill="#00A97A"
                  fill-opacity="0.5"
                />
              </svg>
            </span>
            <p>
              Maintained by Elon Musk, Donald Trump, and Andrew Huberman{" "}
              <i class="fa-solid fa-user-group"></i>
            </p>
            <p className="text-center">
              The »Smart Smart Multi-Robot Storyboard Creator« knows four
              characters so far: Jack (Production Assistant), Andy (Artist),
              Lora (Admin Manager), Donna (Stack Representative), Rosy
              (Director), Tyring (Head of CDFI), Derya (Head of Action), and
              Louis Litt (Legal Employee).
            </p>
          </div>
          <div className="row">
            <div className=" col d-flex">
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
                placeholder="Message a new illusion instruction"
              />
              <span
                class="input-group-text"
                style={{ color: "green" }}
                onClick={() => {
                  navigate("/userReference");
                }}
              >
                <i class="fa-solid fa-arrow-up"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainchatReference;
