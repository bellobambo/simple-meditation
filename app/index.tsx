import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView className="flex-1 pz-1 justify-between mx-5 my-12">
            <View>
              <Text className="text-center text-white font-bold text-4xl mt-10">
                Simple Medication
              </Text>
              <Text className="text-center text-white font-bold text-regular text-2xl mt-3">
                Simplifying Medication for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/test")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
