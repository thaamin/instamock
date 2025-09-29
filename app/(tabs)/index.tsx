import { Text, View , TouchableOpacity, ScrollView} from "react-native";
import { styles } from "../../styles/feed.styles";
import { Link, useRouter } from "expo-router";
import { SignedOut, useAuth } from "@clerk/clerk-expo";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader } from "@/components/Loader";
import Post from "@/components/Post";

export default function Index() {
  const {signOut} = useAuth()
  const router = useRouter()

  const posts = useQuery(api.posts.getFeedPosts)

  if (posts === undefined) return <Loader/>

  if (posts.length === 0) return <NoPostFound/>
  
  const handlesignout = async () =>{
    await signOut()
    router.replace("/(auth)/login")
  }
    
  return (
    <View style= {styles.container}>
      <View style= {styles.header}>
        <Text style = {styles.headerTitle}>Instamock</Text>
        <TouchableOpacity onPress={()=> handlesignout()}>
          <Ionicons name="log-out-outline" size={24} color= {COLORS.white}/>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}  
      >
        <ScrollView 
          horizontal
          showsVerticalScrollIndicator={false}
          style={styles.storiesContainer}
        >

            {STORIES.map((story) => (
              <Story key = {story.id} story={story}/>
            ))}
        </ScrollView>
        {posts.map((post)=> (
          <Post key = {post._id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}


const NoPostFound = () => (
  <View 
    style= {{
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{fontSize:20, color:COLORS.primary}}>No posts yet</Text>
    </View>
)