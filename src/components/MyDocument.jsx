/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font,
} from '@react-pdf/renderer';
import groupBy from '../API/Helpers';
// import Logo from '../Assets/logoBel.svg';

// Register font
Font.register({ family: 'Castoro', src: 'https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&display=swap' });
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: '2cm',
  },
  title: {
    color: '#91A1BE',
    fontWeight: 'bold',
    fontSize: '8mm',
    textAlign: 'center',
  },
  project: {
    fontSize: '5mm',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#91A1BE',
    fontWeight: 'bold',
    fontSize: '5mm',
    padding: ' 4mm ',
    flexDirection: 'row',
  },
  info: {
    fontSize: '4mm',
    color: 'black',
  },
  text: {
    fontSize: '3.5mm',
    color: 'black',
    padding: '5mm',
  },
  section: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '20%',
    padding: '5mm',
  },
});

// Create Document Component
const MyDocument = ({ project }) => {
  const grouped = groupBy(project.risks, 'type');
  const types = Object.keys(grouped);
  return (
    <Document style={styles.page}>
      <Page size="A4" style={styles.page} orientation="portrait">
        {/* <View style={styles.section}> */}
        {/* <Image style={styles.image} src="https://user-images.githubusercontent.com/5600341/27505816-c8bc37aa-587f-11e7-9a86-08a2d081a8b9.png" />

        {/* <Text>Section #1</Text>  <Image
            style={styles.image}
            src="../Assets/logoBel.svg"
        /> */}
        {/* </View> */}
        <View>
          <Text style={styles.title}>Informe Legal</Text>

          <Text style={styles.subtitle}>Proyecto: </Text>
          <Text style={styles.info}>{project.name}</Text>
          <Text style={styles.subtitle}>Cliente:  </Text>
          <Text style={styles.info}>{project.owner}</Text>
          <Text style={styles.subtitle}>Área: </Text>
          <Text style={styles.info}>{project.area}</Text>
          <Text style={styles.subtitle}>Fecha de lanzamiento: </Text>
          <Text style={styles.info}>{project.date || '10/06/2020'}</Text>

          <Text style={styles.subtitle}>Descripción: </Text>
          <Text style={styles.text}>{project.description}</Text>
          <Text style={styles.subtitle}>Recomendaciones: </Text>
          {
            // eslint-disable-next-line max-len
          project.recomendations.map((r, index) => <Text style={styles.text} key={r.content}>{index + 1 + r.content}</Text>)
        }

          {console.log(types)}

        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
