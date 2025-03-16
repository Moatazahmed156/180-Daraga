import { View, Text, Image } from "react-native";

export default function Card({ info, textColor }) {
  return (
    <View className="flex gap-1  my-2 items-center">
      <Image source={info.image} className="size-56 rounded-full" />
      <Text style={{ color: textColor }} className="text-2xl font-bold ">
        {info.name}
      </Text>
      <Text style={{ color: textColor }} className="text-xl">
        -{info.role}-
      </Text>
    </View>
  );
}
