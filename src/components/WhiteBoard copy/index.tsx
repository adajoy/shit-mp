import React from "react";
import { Image } from "@tarojs/components";
import { getImageCloudFileId } from "../../js/utils";

const WhiteBoard: React.FC = () => {
  return (
    <Image
      className="whiteboard"
      src={getImageCloudFileId("whiteboard.png")}
    ></Image>
  );
};

export default WhiteBoard;
