import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";
import WhiteBoard from "../../components/WhiteBoard";
import BackButton from "../../components/BackButton";

const Index: React.FC = () => {
  return (
    <View className="about">
      <Image
        className="bathroom"
        src={getImageCloudFileId("bathroom.png")}
      ></Image>
      <WhiteBoard>
        <Image
          className="about-content"
          src={require("../../images/about.png")}
        ></Image>
      </WhiteBoard>
      <BackButton></BackButton>
    </View>
  );
};

export default Index;
