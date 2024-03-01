import { View, Text, Pressable, ActivityIndicator
} from 'react-native'
import {useRouter} from "expo-router"

import styles from './nearbyjobs.style'
import {COLORS} from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const NearbyJobs = () => {
    const router = useRouter();

    const {data,isLoading,error}=useFetch
    ("search",{
      query: "Rovaniemi",
      num_pages:1
    })

  return (
    <View style={styles.container}>

      <View style ={styles.header}>
        <Text style={styles.headerTitle}>Lähellä olevat työt</Text>

        <Pressable               
        onPress={()=>{router.push(`/search/${'Rovaniemi'}`)}}>
        <Text style={styles.headerBtn}
        >Näytä kaikki</Text>
        </Pressable>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ? (
          <Text>Something went wrong</Text>
        ): (
          data?.map((job)=> (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs