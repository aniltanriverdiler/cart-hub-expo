import { Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}
