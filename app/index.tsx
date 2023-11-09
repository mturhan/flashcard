import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE_KEY } from "../data/api";

const Page = () => {
  const [hasId, setHasId] = useState(false);

  useEffect(() => {
    const loadId = async () => {
      const id = await AsyncStorage.getItem(USER_STORAGE_KEY);

      if (!id) {
        const randomUserId = Math.random().toString(36);
        await AsyncStorage.setItem(USER_STORAGE_KEY, randomUserId);
      }
      setHasId(true);
    };
    loadId();
  }, []);

  if (hasId) {
    return <Redirect href="/(tabs)/sets" />;
  } else {
    return <View />;
  }
};

export default Page;
