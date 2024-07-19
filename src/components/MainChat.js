// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import MainChatScreen from "./MainChatScreen";
// import ClientReference from "./ClientReference";

// const MainChatReference = () => {
//   const [dataArray, setDataArray] = useState([]);
//   useEffect(() => {
//     const chatData = JSON.parse(localStorage.getItem("data")) || [];
//     setDataArray(chatData);
//   }, [dataArray]);
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <Sidebar setDataArray={setDataArray} />
//         {dataArray.length > 0 ? <ClientReference /> : <MainChatScreen />}
//       </div>
//     </div>
//   );
// };

// export default MainChatReference;
