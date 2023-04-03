import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import news_data from "./src/news_data.json";
import NewsCard from "./src/Components/NewsCard";
import bannerData from "./src/news_banner_data.json";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const keys = (item, index) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bannerData.map((bannerNews) => (
          <Image
            style={styles.imageStyle}
            source={{ url: bannerNews.imageUrl }}
          />
        ))}
      </ScrollView>
      <FlatList keyExtractor={keys} data={news_data} renderItem={renderNews} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,4,10,0.2)",
  },

  imageStyle: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 2,
  },
});
