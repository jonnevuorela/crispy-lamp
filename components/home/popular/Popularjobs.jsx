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
      query: 'Finland',
      num_pages: '1',
      page: '1',
    });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);

    setSelectedJob(item.job_id);
    setTimeout(() => {
      setSelectedJob(null);
    }, 1000);
  };

  return (
    <View style={styles.container}>

      <View style ={styles.header}>
        <Text style={styles.headerTitle}>Suositut työt</Text>

        <Pressable>
          <Text style={styles.headerBtn}>Näytä kaikki</Text>
        </Pressable>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ? (
          <Text>Jotain meni pieleen</Text>
        ): (
          <FlatList

            data={data}
            renderItem  ={({item})=>(

              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
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