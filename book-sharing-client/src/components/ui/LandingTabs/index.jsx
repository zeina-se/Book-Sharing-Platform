import React, { useState } from "react";
import "./style.css";
import TabButton from "../TabButton";
import {
  AiFillAlert,
  AiFillAliwangwang,
  AiFillAndroid,
  AiFillApi,
  AiFillApple,
} from "react-icons/ai";

const LandingTabs = ({ onTabChanged }) => {
  const [selectedTab, setSelectedTab] = useState("android");

  const selectHandler = (value) => {
    setSelectedTab(value);

    onTabChanged(value);
  };

  return (
    <div className="flex row fullWidth landingTabs">
      <TabButton
        icon={<AiFillAlert />}
        name={"Bikfaya"}
        selected={selectedTab === "Bikfaya"}
        value={"Bikfaya"}
        onSelected={(value) => selectHandler(value)}
      />
      <TabButton
        icon={<AiFillAliwangwang />}
        name={"Raoucheh"}
        selected={selectedTab === "Raoucheh"}
        value={"Raoucheh"}
        onSelected={(value) => selectHandler(value)}
      />
      <TabButton
        icon={<AiFillAndroid />}
        name={"Batroun"}
        selected={selectedTab === "Batroun"}
        value={"Batroun"}
        onSelected={(value) => selectHandler(value)}
      />
      <TabButton
        icon={<AiFillApi />}
        name={"All"}
        selected={selectedTab === "all"}
        value={"all"}
        onSelected={(value) => selectHandler(value)}
      />
      <TabButton
        icon={<AiFillApple />}
        name={"Apple"}
        selected={selectedTab === "apple"}
        value={"apple"}
        onSelected={(value) => selectHandler(value)}
      />
    </div>
  );
};

export default LandingTabs;
