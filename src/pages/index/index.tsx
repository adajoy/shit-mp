import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.less";

const Index: React.FC = () => {
  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Image src="cloud://cloud1-7g43yedaae86d12f.636c-cloud1-7g43yedaae86d12f-1307849598/images/bathroom.png"></Image>
    </View>
  );
};

export default Index;
