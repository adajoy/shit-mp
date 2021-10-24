import React, { useState } from "react";
import { View, Image } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import BackButton from "../../components/BackButton";
import { getImageCloudFileId } from "../../js/utils";
import "./index.less";
import ContentBlock from "../../components/ContentBlock";
import {
  shapeOptions,
  colorOptions,
  smellOptions,
  feelingOptions,
} from "./options";

const Index: React.FC = () => {
  const { params } = useRouter<{ isDetail: "true" | undefined }>();
  const [mode, setMode] = useState<"form" | "detail">(
    params.isDetail ? "detail" : "form"
  );
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("");
  const [smell, setSmell] = useState("");
  return (
    <View className="form">
      <Image
        className="bathroom"
        src={getImageCloudFileId("bathroom.png")}
      ></Image>
      <View className="form">
        <Image
          className="form-bg"
          src={require("../../images/select_bg.png")}
        ></Image>
        <View className="form-content">
          <Image
            className="title shape-title"
            src={require("../../images/shape_title.png")}
          ></Image>
          <ContentBlock>
            {mode === "form" && (
              <View className="shape-option-wrapper">
                {shapeOptions.map((i) => (
                  <Image
                    className="shape"
                    src={i.img}
                    key={i.value}
                    mode="aspectFit"
                  />
                ))}
              </View>
            )}
            {mode === "detail" && shapeOptions[0].desc}
          </ContentBlock>
          <Image
            className="title color-title"
            src={require("../../images/color_title.png")}
          ></Image>
          <ContentBlock height={mode === "form" ? 40 : undefined}>
            {mode === "form" && (
              <View className="color-option-wrapper">
                {colorOptions.map((i) => (
                  <Image
                    className="color"
                    src={i.img}
                    key={i.value}
                    mode="aspectFit"
                  />
                ))}
              </View>
            )}
            {mode === "detail" && colorOptions[0].desc}
          </ContentBlock>
          <Image
            className="title smell-title"
            src={require("../../images/smell_title.png")}
          ></Image>
          <ContentBlock height={mode === "form" ? 60 : undefined}>
            {mode === "form" && (
              <View className="smell-option-wrapper">
                {smellOptions.map((i) => (
                  <Image
                    className="smell"
                    src={i.img}
                    key={i.value}
                    mode="aspectFit"
                  />
                ))}
              </View>
            )}
            {mode === "detail" && smellOptions[0].desc}
          </ContentBlock>
          {mode === "form" && (
            <>
              <Image
                className="title feel-title"
                src={require("../../images/smell_title.png")}
              ></Image>
              <ContentBlock height={50}>
                <View className="feeling-option-wrapper">
                  {feelingOptions.map((i) => (
                    <Image
                      className="feeling"
                      src={i.img}
                      key={i.value}
                      mode="aspectFit"
                    />
                  ))}
                </View>
              </ContentBlock>
            </>
          )}
        </View>

        {mode === "form" && (
          <Image
            className="confirm"
            src={require("../../images/confirm.png")}
            onClick={() => setMode("detail")}
          ></Image>
        )}
      </View>
      <BackButton />
    </View>
  );
};

export default Index;
