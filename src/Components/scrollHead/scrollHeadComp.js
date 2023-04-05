import React from "react";
import { ScrollView , Image  } from "react-native";
import styles from "./scrollHead.style";



const scrollComp = ({head}) => {
  return(
    <ScrollView style={styles.headStyle} horizontal={true} showsHorizontalScrollIndicator={false}>
        {head.map((bannerNews) => (
          <Image
            style={styles.imageStyle}
            source={{ url: bannerNews.imageUrl}}
          />
        ))}
    </ScrollView>
)}

export default scrollComp;