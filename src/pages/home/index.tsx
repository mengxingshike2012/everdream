import React, { useState } from "react";
// import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtCurtain, AtProgress } from "taro-ui";

const Home = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <View>
      <Text>God Bless you!</Text>
      <AtCurtain isOpened={isOpen} onClose={() => toggleOpen(false)}>
        <Image
          style="width:100%;height:250px"
          src="https://i0.hdslb.com/bfs/bangumi/image/82d628408f5472f1440982e880b0b4f0146862ad.png@130w_175h.png"
        />
      </AtCurtain>
      <AtButton
        type="primary"
        onClick={() => {
          // bad grammer error
          // Taro.atMessage({ type: "success", message: "good luck!" });
          toggleOpen(true);
        }}
      >
        Pray
      </AtButton>
      <AtProgress percent={75} color="cyan" />
    </View>
  );
};

export default Home;
