import React from "react";
import { Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const BackButton: React.FC = () => {
  return (
    <Image
      className="backButton"
      webp
      src={getImageCloudFileId("back.webp")}
      onClick={() => Taro.navigateBack()}
    ></Image>
  );
};

export default BackButton;
