import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import UserProfileCard from "./components/UserProfileCard";

export default function App() {
  function handleFollow() {
    console.log("Você começou a seguir Ana!");
  }

  return (
    <View style={styles.container}>
      <UserProfileCard
        name="Ana"
        role="Desenvolvedora"
        avatar="https://i.pravatar.cc/150?img=47"
        bio="Desenvolvedora sênior apaixonada por DevOps"
        isOnline={true}
        onFollow={handleFollow}
      />

      <UserProfileCard
        name="michel"
        role="acadêmico"
        avatar="https://i.pravatar.cc/150?img=50"
        isOnline={false}
        bio="olá!"
        onFollow={handleFollow}
      />

      <UserProfileCard
        name="Maria Oliveira"
        role="influencer digital"
        avatar="https://i.pravatar.cc/150?img=32"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
});
