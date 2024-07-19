// import React, { useEffect, useState } from "react";

// const Sidebar = ({ setDataArray }) => {
//   const [collapse, setCollapse] = useState(false);
//   const [searchData, setSearchData] = useState([]);

//   //   useEffect(() => {
//   //     const chatData = JSON.parse(localStorage.getItem("data")) || [];
//   //     setSearchData(chatData);
//   //   }, [searchData]);

//   //   const handleChat = () => {
//   //     localStorage.clear();
//   //     setDataArray([]);
//   //   };
//   return (
//     <div className="col-lg-2">
//       <div className="sidebarContainer">
//         <div className="mainHead"></div>
//         <div className="previous5Charts">
//           <h6>Previous 5 Chats</h6>
//           {/* {searchData.map((item) => {
//             return <p>{item}</p>;
//           })} */}
//           <p>Emma and Hans argue over a</p>
//           <p>Werner visits the CSSD and wi </p>
//           <p>Inge laughs with Emma about ···</p>
//         </div>
//         <div className="previous30DaysCharts">
//           <h6>Previous 30 Days Chats</h6>
//           <p>Emma and Hans argue over a</p>
//           <p>Werner visits the CSSD and wi </p>
//           <p>Inge laughs with Emma about ···</p>
//         </div>
//         <div
//           className=""
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "end",
//             height: "260px",
//           }}
//         >
//           <div>
//             <div class="btn-group dropup">
//               <span
//                 type="button"
//                 class="btn-secondary dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Andreas Elisch
//               </span>
//               <ul class="dropdown-menu">
//                 <li></li>
//               </ul>
//             </div>
//             <p>
//               <i class="fa-solid fa-person-circle-plus"></i>
//               <span style={{ marginLeft: "7px" }}>
//                 Invite Person to the team
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
