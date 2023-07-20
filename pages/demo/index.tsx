// import { NextPage } from "next";
// import { MouseEventHandler } from "react";

// const MyPage: NextPage = () => {
//   const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
//     console.log("Mouse down event!");
//   };

//   return (
//     <div onMouseDown={handleMouseDown}>
//       Press and hold the mouse button on this div
//     </div>
//   );
// };

// export default MyPage;

import { Input } from "antd";
import { NextPage } from "next";
import { FocusEventHandler } from "react";

const MyPage: NextPage = () => {
  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    console.log("Element focused!");
  };

  return (
    <>
      <input type="text" onFocus={handleFocus} />
      <Input placeholder="hello" />
    </>
  );
};

export default MyPage;
