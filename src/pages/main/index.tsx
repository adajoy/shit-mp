import React, { useEffect, useMemo, useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";

const shitNote1 = getImageCloudFileId("shit_note_1.webp");
const shitNote2 = getImageCloudFileId("shit_note_2.webp");
const shitNote3 = getImageCloudFileId("shit_note_3.webp");
const shitNote4 = getImageCloudFileId("shit_note_4.webp");
const shitNotes = [shitNote1, shitNote2, shitNote3, shitNote4];

const Index: React.FC = () => {
  const [isShitting, setIsShitting] = useState(false);
  const [sec, setSec] = useState(0);
  const shitNote = useMemo(() => {
    const index = Math.floor(sec / 4) % 4;
    return shitNotes[index];
  }, [sec]);
  useEffect(() => {
    let interval;
    if (isShitting) {
      interval = setInterval(() => setSec((v) => v + 1), 1000);
    }
    return () => {
      setSec(0);
      clearInterval(interval);
    };
  }, [isShitting]);
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
            onClick={() => Taro.navigateTo({ url: "/pages/form/index" })}
          ></Image>
          <Image
            className="button"
            webp
            src={getImageCloudFileId("main_about.webp")}
            onClick={() => Taro.navigateTo({ url: "/pages/about/index" })}
          ></Image>
        </View>
      )}
      {isShitting && <Image className="shit-note" webp src={shitNote}></Image>}
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
          <View
            className="action-button"
            onClick={() => {
              setIsShitting(false);
              Taro.navigateTo({ url: "/pages/form/index" });
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
          <Text className="timer">{sec}s</Text>
        </View>
      )}
    </View>
  );
};

export default Index;
