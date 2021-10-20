import React from "react";
import { Image, View } from "@tarojs/components";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const WhiteBoard: React.FC = ({ children }) => {
  return (
    <View className="whiteboard-wrapper">
      <Image
        className="whiteboard"
        src={getImageCloudFileId("whiteboard.png")}
      ></Image>
      {children}
    </View>
  );
};

export default WhiteBoard;
