import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

function DynamicCollection({ data }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {data.title}
      </Text>

      <FlatList
        horizontal
        data={data.products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              ₹{item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 15,
  },

  card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginLeft: 15,
    elevation: 3,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    marginTop: 10,
    color: "#FF6B00",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default React.memo(DynamicCollection);