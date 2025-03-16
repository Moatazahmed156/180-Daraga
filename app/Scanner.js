import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Linking } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/logo-2e33b7a0.png";
import "../global.css";

export default function App() {
  const [permission, setPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!permission?.granted) {
      setPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Linking.openURL(data);
  };

  if (!permission) {
    return (
      <View>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Camera permission not granted</Text>
        <TouchableOpacity onPress={setPermission}>
          <Text>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex justify-center items-center pt-24 bg-[#700608] h-screen">
      <Image
        source={Logo}
        style={{ width: 165, height: 160, marginBottom: 20 }}
      />
      <Text className="text-3xl font-bold text-white mb-2">
        QR Code Scanner
      </Text>
      <Text className="text-xl text-white mb-8">
        Point the camera at a QR code.
      </Text>
      <View className="w-4/5 aspect-square rounded-xl overflow-hidden mb-5">
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          zoom={0.6}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
      {scanned && (
        <TouchableOpacity
          className="bg-[#222] p-2 rounded-lg mt-2"
          onPress={() => setScanned(false)}
        >
          <Text className="text-xl font-bold text-white">Scan Again</Text>
        </TouchableOpacity>
      )}
      <Link
        href="/"
        className="p-2 bg-[#ffffff] ml-4 font-bold text-lg mt-auto  mr-auto rounded-xl mb-4"
      >
        ◀ Back to Home
      </Link>
    </View>
  );
}
