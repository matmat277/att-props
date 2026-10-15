import { View, Text, Image, Pressable, StyleSheet } from "react-native";

interface UserProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  isOnline?: string;
  onFollow?: () => void;
}

export default function UserProfileCard(props: UserProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />

      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.role}>{props.role}</Text>

      {props.bio && <text style={styles.bio}>{props.bio}</text>}

      {props.isOnline !== undefined && (
        <Text style={props.isOnline ? styles.online : styles.offline}>
          {props.isOnline ? "Online" : "Offline"}
        </Text>
      )}

      {props.onFollow && (
        <Pressable style={styles.followButton} onPress={props.onFollow}>
          <Text style={styles.followButtonText}>Seguir</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  online: {
    color: "green",
    fontWeight: "bold",
    marginTop: 8,
  },

  offline: {
    color: "gray",
    fontWeight: "bold",
    marginTop: 8,
  },

  card: {
    padding: 20,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },

  bio: {
    fontSize: 14,
    color: "#444444",
    marginTop: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  role: {
    fontSize: 16,
    color: "#666666",
  },

  followButton: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },

  followButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
