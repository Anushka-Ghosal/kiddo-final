import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { useCart } from "../store/cartStore";

function ProductGrid({ data }: any) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.title}</Text>

      <View style={styles.grid}>
        {data.products.map((item: any) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>
              ₹{item.price}
            </Text>

            <Pressable
              style={styles.button}
              onPress={addToCart}
            >
              <Text style={styles.buttonText}>
                ADD TO CART
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  name: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },

  price: {
    color: "#FF6B00",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#FF6B00",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default React.memo(ProductGrid);