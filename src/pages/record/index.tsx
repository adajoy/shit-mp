import React from "react";
import { View, Image, ScrollView, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import WhiteBoard from "../../components/WhiteBoard";
import BackButton from "../../components/BackButton";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const DATA = [
  {
    time: "2020-10-10",
    success: false,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
  {
    time: "2020-10-10",
    success: true,
    duration: 40,
  },
];

const Index: React.FC = () => {
  return (
    <View className="record">
      <Image
        className="bathroom"
        src={getImageCloudFileId("bathroom.png")}
      ></Image>
      <WhiteBoard>
        <ScrollView className="scroll-view" scrollY>
          {DATA.map((i, index) => (
            <View
              className="item"
              key={index}
              onClick={() =>
                Taro.navigateTo({ url: "/pages/form/index?isDetail=true" })
              }
            >
              <Image
                className="item-bg"
                webp
                src={getImageCloudFileId("item_bg.webp")}
              ></Image>
              <Text className="item-text">
                {i.time} {i.success ? "花费" + i.duration + "s" : "没拉出来"}
              </Text>
            </View>
          ))}
        </ScrollView>
      </WhiteBoard>
      <BackButton></BackButton>
    </View>
  );
};

export default Index;
