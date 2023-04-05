import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import news_data from "./src/news_data.json";
import NewsCard from "./src/Components/NewsCard";
import bannerData from "./src/news_banner_data.json";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const keys = (item, index) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>NEWS</Text>
      <FlatList
        ListHeaderComponent={() => (
          // burda bir değişiklik yapılacak
          <ScrollView
            style={styles.headStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {bannerData.map((bannerNews) => (
              <Image
                style={styles.imageStyle}
                source={{ url: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
          // burda bir değişiklik yapılacak
        )}
        keyExtractor={keys}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,2,0,0.8)",
  },

  imageStyle: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 2,
  },

  headerText: {
    textAlign: "center",
    fontSize: 50,
    padding: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 6,
    width: Dimensions.get("window").width / 1,
    alignItems: "center",
  },

  headStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
});
