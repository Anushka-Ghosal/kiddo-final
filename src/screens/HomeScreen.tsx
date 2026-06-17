import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";

import backToSchool from "../data/backToSchool.json";
import summer from "../data/summer.json";
import mystery from "../data/mystery.json";

import registry from "../registry/ComponentRegistry";
import { useCart } from "../store/cartStore";

export default function HomeScreen() {
  const count = useCart((state) => state.count);

  const [campaign, setCampaign] = useState(backToSchool);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: campaign.theme.background,
      }}
    >
      {/* Cart */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          padding: 15,
        }}
      >
        🛒 Cart: {count}
      </Text>

      {/* Campaign Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        <Pressable
          onPress={() => setCampaign(backToSchool)}
          style={{
            backgroundColor: "#FF9933",
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            School
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setCampaign(summer)}
          style={{
            backgroundColor: "#2196F3",
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Summer
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setCampaign(mystery)}
          style={{
            backgroundColor: "#D32F2F",
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Mystery
          </Text>
        </Pressable>
      </View>

      {/* Dynamic UI */}
      <FlashList
        data={campaign.layout}
        keyExtractor={(item: any) => item.id}
        estimatedItemSize={250}
        renderItem={({ item }) => {
          const Component = registry[item.type];

          if (!Component) return null;

          return <Component data={item} />;
        }}
      />
    </SafeAreaView>
  );
}