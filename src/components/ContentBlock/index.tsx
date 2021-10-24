import React from "react";
import { View } from "@tarojs/components";
import "./index.less";

interface ContentBlockProps {
  height?: number;
}
const ContentBlock: React.FC<ContentBlockProps> = ({
  children,
  height = 100,
}) => {
  return (
    <View className="content-block" style={{ height: `${height}px` }}>
      {children}
    </View>
  );
};

export default ContentBlock;
