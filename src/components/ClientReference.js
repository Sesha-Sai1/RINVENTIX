// import React, { useEffect, useState } from "react";

// const ClientReference = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const chatData = JSON.parse(localStorage.getItem("data")) || [];
//     setData(chatData);
//   }, [data]);

//   const handleArrow = () => {
//     const updatedData = [...data, search];
//     setData(updatedData);
//     localStorage.setItem("data", JSON.stringify(updatedData));
//     setSearch("");
//   };

//   const handleInput = (e) => {
//     setSearch(e.target.value);
//   };
//   return (
//     <div className="col-lg-9">
//       <div className="row">
//         <div className="col">
//           {data.length > 0
//             ? data.map((item) => {
//                 return <h5 style={{ color: "red" }}>{item}</h5>;
//               })
//             : ""}
//         </div>
//       </div>
//       <div className="row" style={{ marginTop: "340px" }}>
//         <div class="input-group mb-3 rounded">
//           <span class="input-group-text">
//             <img src="/image.png" alt="noImage" height={20} width={20} />
//           </span>
//           <input
//             type="text"
//             class="form-control"
//             aria-label="Amount (to the nearest dollar)"
//             value={search}
//             onChange={handleInput}
//           />
//           <span class="input-group-text">
//             <i class="fa-solid fa-arrow-up" onClick={handleArrow}></i>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientReference;
