import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Card from "../components/Card";
import president from "../assets/president-20af57a5.jpg";
import Cairo from "../assets/cairo-47c1773a.jpg";
import Helwan from "../assets/helwan-37cdb9d1.jpg";
import General from "../assets/general-e5243858.jpg";
import Pr1 from "../assets/Mohamed Mohsen-5ac89bca.jpg";
import Pr2 from "../assets/Shrouk Ezzat-4e183a35.jpg";
import Pr3 from "../assets/Ayman-Abokhalifa-d72d1923.jpg";
import tech1 from "../assets/Johnathan Eskander-7fcd3036.jpg";
import tech2 from "../assets/Basel Hamdi-0bf62cf9.jpg";
import "../global.css";

export default function index() {
  const Highboard = [
    { name: "Mariem", role: "President", image: president },
    { name: "Abdullah", role: "Cairo Coordinator", image: Cairo },
    { name: "Mazen", role: "Helwan Coordinator", image: Helwan },
    { name: "Omar", role: "General Coordinator", image: General },
  ];
  const PR = [
    { name: "Mohamed Mohsen", role: "committee head", image: Pr1 },
    { name: "Shrouk Ezzat", role: "Vice committee head", image: Pr2 },
    { name: "Ayman Abo Khalifa", role: "Vice committee head", image: Pr3 },
  ];
  const tech = [
    { name: "Johnathan Eskander", role: "committee head", image: tech1 },
    { name: "Basel Hamdi", role: "Vice committee head", image: tech2 },
  ];
  return (
    <ScrollView>
      <View className="flex justify-center items-center ">
        <View className="mt-4 px-2 flex flex-row justify-between w-full">
          <Link
            href="/Scanner"
            className="p-2 bg-[#700608] text-white text-lg rounded-xl mb-4"
          >
            To Scanner
          </Link>
          <Link
            href="/Form"
            className="p-2 bg-[#700608] text-white text-lg rounded-xl mb-4"
          >
            To DevHub Form
          </Link>
        </View>
        <View className="my-4">
          <Text className="text-4xl font-bold text-[#700608] text-center my-4">
            Highboard
          </Text>
          {Highboard.map((e, i) => {
            return <Card info={e} key={i} />;
          })}
        </View>
        <View className="py-16 bg-[#700608] w-full">
          <Text className="text-4xl font-bold text-center my-4 text-white">
            PR Committee
          </Text>
          {PR.map((e, i) => {
            return <Card info={e} textColor="white" key={i} />;
          })}
        </View>
        <View className="py-16  w-full">
          <Text className="text-4xl font-bold text-center my-4 text-[#700608]">
            Technical Committee
          </Text>
          {tech.map((e, i) => {
            return <Card info={e} key={i} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}
