import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = () =>{
  const [location, setLocation] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      {location && (
        <View style={{ marginTop: 20 }}>
          <QRCode value={location} size={200} />
        </View>
      )}
    </View>
  );
}

export default QRCodeGenerator;
