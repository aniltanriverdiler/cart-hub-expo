import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View>
      <Text className="text-center text-blue-500 mt-20 text-2xl font-bold">Welcome to Cart Hub</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
      <Link href="/(auth)/sign-up">Sign Up</Link>
    </View>
  );
};

export default Index;
