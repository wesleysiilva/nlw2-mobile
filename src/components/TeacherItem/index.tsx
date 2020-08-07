import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem () {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri:'https://github.com/wesleysiilva.png'}} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Wesley Silva</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Wesley Oliveira da Silva (Fortaleza, 6 de setembro de 1988), mais conhecido como Wesley Safadão,[1] é um cantor, compositor produtor musical, empresário e apresentador brasileiro. 
        {'\n'} {'\n'}
        Começou a carreira em 2003 liderando a banda Garota Safada e, a partir de 2007, ganhou notoriedade na região nordeste, e logo passou a ter projeção nacional, se apresentando em todas as regiões do Brasil. 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon}></Image> */}
            <Image source={unfavoriteIcon}></Image>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;