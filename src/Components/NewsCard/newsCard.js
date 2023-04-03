import React from "react";
import { View, Text , Image } from "react-native";
import styles from "./newsCard.style"

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{url : news.imageUrl}}/>
        <View style={styles.innerContainer}>
            <Text style={styles.cardHeadText}>{news.title}</Text>
            <Text style={styles.cardDescriptionText}>{news.description}</Text>
            <Text style={styles.cardPersonText}>{news.author}</Text>
        </View>
        </View>
    )
}

export default NewsCard;