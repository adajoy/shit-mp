import React, { useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const Index: React.FC = () => {
  const [isShitting, setIsShitting] = useState(false);
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
      {!isShitting && (
        <View className="button-group">
          <Image
            className="button"
            webp
            src={getImageCloudFileId("main_start.webp")}
            onClick={() => setIsShitting(true)}
          ></Image>
          <Image
            className="button"
            webp
            src={getImageCloudFileId("main_record.webp")}
            onClick={() => Taro.navigateTo({ url: "/pages/record/index" })}
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
            onClick={() => Taro.navigateTo({ url: "/pages/about/index" })}
          ></Image>
        </View>
      )}
      {isShitting && (
        <View>
          <View
            className="action-button"
            onClick={() => {
              setIsShitting(false);
            }}
          >
            <Image
              className="action-button__bg"
              webp
              src={getImageCloudFileId("shit_result_bg.webp")}
            ></Image>
            <Image
              className="action-button__foreground"
              webp
              src={getImageCloudFileId("shit_fail.webp")}
            ></Image>
          </View>
          <View className="action-button" onClick={() => setIsShitting(false)}>
            <Image
              className="action-button__bg"
              webp
              src={getImageCloudFileId("shit_result_bg.webp")}
            ></Image>
            <Image
              className="action-button__foreground"
              webp
              src={getImageCloudFileId("shit_success.webp")}
            ></Image>
          </View>
        </View>
      )}
      {isShitting && (
        <View className="timer-wrapper">
          <Image
            className="timer-bg"
            webp
            src={getImageCloudFileId("timer_bg.webp")}
          ></Image>
          <Text className="timer">00:00</Text>
        </View>
      )}
    </View>
  );
};

export default Index;
