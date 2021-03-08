import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/fotoperfil.jpeg';
import Card from './components/Card/index';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', '');
        break;
      case 'github':
        Alert.alert('Meu Github', '');
        break;
      case 'instagram':
        Alert.alert('Meu instagram', '');
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cbecalho}>
          <Image source={foto} />
          <Text style={style.nome}>CLAUDIA DIANA</Text>
          <Text style={style.funcao}>Quality Assurance</Text>
          <View style={style.redes}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
            <Card titulo="Formação Acadêmica" />
            <Card titulo="Experiências Profissional" />
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  container_cbecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
