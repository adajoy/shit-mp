import React from "react";
import { View, Image } from "@tarojs/components";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const Index: React.FC = () => {
  return (
    <View className="main">
      <Image
        className="bathroom"
        src={getImageCloudFileId("bathroom.png")}
      ></Image>
      <Image
        className="main-toilet"
        webp
        src={getImageCloudFileId("main_toilet.webp")}
      ></Image>
      <Image
        className="main-character"
        webp
        src={getImageCloudFileId("main_character.webp")}
      ></Image>
      <View className="button-group">
        <Image
          className="button"
          webp
          src={getImageCloudFileId("main_start.webp")}
        ></Image>
        <Image
          className="button"
          webp
          src={getImageCloudFileId("main_record.webp")}
        ></Image>
        <Image
          className="button"
          webp
          src={getImageCloudFileId("main_analyze.webp")}
        ></Image>
        <Image
          className="button"
          webp
          src={getImageCloudFileId("main_about.webp")}
        ></Image>
      </View>
    </View>
  );
};

export default Index;
