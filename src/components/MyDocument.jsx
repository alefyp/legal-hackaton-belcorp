/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Document, Page, View, Text, StyleSheet,
} from '@react-pdf/renderer';
import groupBy from '../API/Helpers';
// import Logo from '../Assets/logoBel.svg';

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    // backgroundColor: '#E4E4E4',
  },
  section: { color: 'black', textAlign: 'center' },
  image: {
    image: {
      width: '60%',
      padding: 10,
    //   backgroundColor: 'grey',
    },
  },
});

// Create Document Component
const MyDocument = ({ project }) => {
  const grouped = groupBy(project.risks, 'type');
  const types = Object.keys(grouped);
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="portrait">
        {/* <View style={styles.section}> */}
        {/* <Image style={styles.image} src={uri: "https://user-images.githubusercontent.com/5600341/27505816-c8bc37aa-587f-11e7-9a86-08a2d081a8b9.png" method: 'GET', headers: {}, body: '' } /> */}

        {/* <Text>Section #1</Text> */}
        {/* </View> */}
        <View style={styles.section}>
          <Text>proyecto</Text>
          <Text>{project.name}</Text>
          <Text>cliente</Text>
          <Text>{project.owner}</Text>
          <Text>área</Text>
          <Text>{project.area}</Text>
          <Text>fecha de lanzamiento</Text>
          <Text>{project.date || '10/06/2020'}</Text>
          <Text>descripción</Text>
          <Text>
            {project.description}
          </Text>
          <Text>recomendaciones</Text>
          {
            project.recomendations.map((r) => <Text key={r.content}>{r.content}</Text>)
        }
          {
            //   console.log(grouped['Riesgo Consumidor'])
// console.log(grouped)
              console.log(types)
        // grouped.forEach((obj) => console.log(obj))
        }
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
