import React from "react";
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const Index: React.FC = () => {
  return (
    <View className="index">
      <Image
        className="index-bg"
        src={getImageCloudFileId("index_bg.jpg")}
      ></Image>
      <Image
        className="index-title"
        webp
        src={getImageCloudFileId("index_title.webp")}
      ></Image>
      <Image
        className="index-button"
        webp
        src={getImageCloudFileId("index_button.webp")}
        onClick={() => Taro.navigateTo({ url: "/pages/main/index" })}
      ></Image>
    </View>
  );
};

export default Index;
