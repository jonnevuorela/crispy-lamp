import {useState} from 'react'
import { View, Text, Pressable,FlatList, ActivityIndicator
} from 'react-native'
import {useRouter} from "expo-router"

import styles from './popularjobs.style'
import {COLORS,SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
    const router = useRouter();

    const {data,isLoading,error}=useFetch
    ("search",{
      query: "React developer",
      num_pages:1
    })
    console.log(data);

  return (
    <View style={styles.container}>

      <View style ={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>

        <Pressable>
          <Text style={styles.headerBtn}>Show all</Text>
        </Pressable>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList

            data={[1,2,3,4]}
            renderItem  ={({item})=>(

              <PopularJobCard
                item={item}
              />

            )}
            keyExtractor={item=>item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs