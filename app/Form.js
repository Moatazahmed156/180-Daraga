import { View, Text, TextInput, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { Link } from "expo-router";

export default function DevHubForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    university_level: "",
    course: "",
  });

  const handleChange = (e, value) => {
    setFormData((prev) => ({
      ...prev,
      [e]: value,
    }));
  };

  const handleSubmit = async () => {
    setShowAlert(true);
    setMessage("Submitting...");
    try {
      await axios.post(
        "https://fake-form.onrender.com/api/courses/addStudent",
        formData
      );
      setMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        university: "",
        university_level: "",
        course: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to submit the form");
    }
  };

  return (
    <View className="flex items-center p-4 h-screen">
      <Text className="font-bold text-xl">Cautions</Text>
      <Text className="w-[85%] text-center mt-2">
        Be sure to check your E-mail after submitting the form!
      </Text>

      <View className="my-6 w-[90%]">
        <Text className="text-lg mb-1">Name</Text>
        <TextInput
          onChangeText={(text) => handleChange("name", text)}
          value={formData.name}
          className="bg-white w-full h-12 rounded-lg border border-gray-300 p-2"
        />

        <Text className="text-lg mb-1 mt-4">E-mail</Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={(text) => handleChange("email", text)}
          value={formData.email}
          className="bg-white w-full h-12 rounded-lg border border-gray-300 p-2"
        />

        <Text className="text-lg mb-1 mt-4">Phone</Text>
        <TextInput
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange("phone", text)}
          value={formData.phone}
          className="bg-white w-full h-12 rounded-lg border border-gray-300 p-2"
        />

        <Text className="text-lg mb-1 mt-4">University</Text>
        <View className="border border-gray-300 rounded-md">
          <Picker
            selectedValue={formData.university}
            onValueChange={(value) => handleChange("university", value)}
            className="w-full"
          >
            <Picker.Item label="Select an option:" value="" />
            <Picker.Item label="Cairo" value="Cairo" />
            <Picker.Item label="Ain Shams" value="Ain Shams" />
            <Picker.Item label="Helwan" value="Helwan" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <Text className="text-lg mb-1 mt-4">University Level</Text>
        <View className="border border-gray-300 rounded-md">
          <Picker
            selectedValue={formData.university_level}
            onValueChange={(value) => handleChange("university_level", value)}
            className="w-full"
          >
            <Picker.Item label="Select an option:" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
        </View>

        <Text className="text-lg mb-1 mt-4">Course</Text>
        <View className="border border-gray-300 rounded-md">
          <Picker
            selectedValue={formData.course}
            onValueChange={(value) => handleChange("course", value)}
            className="w-full"
          >
            <Picker.Item label="Select an option:" value="" />
            <Picker.Item label="C++" value="C++" />
            <Picker.Item label="OOP" value="OOP" />
            <Picker.Item label="Flutter" value="Flutter" />
            <Picker.Item label="DS & Algorithms" value="DS & Algorithms" />
            <Picker.Item label="UI/UX" value="UI/UX" />
          </Picker>
        </View>
      </View>

      <Pressable
        onPress={handleSubmit}
        className="bg-[#700608] py-2 px-16 rounded-xl"
      >
        <Text className="text-xl font-bold text-white">Submit</Text>
      </Pressable>

      <Modal isVisible={showAlert} onBackdropPress={() => setShowAlert(false)}>
        <View className="bg-white p-6 rounded-xl items-center">
          <Text
            className={`text-2xl font-bold text-center ${
              message === "Form submitted successfully!"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </Text>

          <Pressable
            onPress={() => setShowAlert(false)}
            className="bg-[#700608] py-2 px-6 rounded-lg mt-6"
          >
            <Text className="text-white text-lg">Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Link
        href="/"
        className="p-2 bg-[#700608] text-white text-lg mt-auto mr-auto rounded-xl "
      >
        ◀ Back to Home
      </Link>
    </View>
  );
}
