import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


export default function Profile() {
  const {signOut} = useAuth()
  const router = useRouter()

  const handlesignout = async () =>{
    await signOut()
    router.replace("/(auth)/login")
  }
  return (
    <View>
      <Button title="logout" onPress={handlesignout}/>
    </View>
  )
}