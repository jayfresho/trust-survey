"use client";

import { ThreeDots } from "react-loader-spinner";

const DotsLoader = ({
  height = "80",
  width = "80",
  color = "blue",
  visible = true,
}) => {
  return (
    <span>
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={visible}
      />
    </span>
  );
};

export default DotsLoader;
