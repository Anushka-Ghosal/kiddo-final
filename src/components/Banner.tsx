import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Banner({ data }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {data.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 12,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  title: {
    position: "absolute",
    bottom: 15,
    left: 15,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default React.memo(Banner);