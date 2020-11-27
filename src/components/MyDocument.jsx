/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font, Image,
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
    color: '#702785',
    fontWeight: 'bold',
    fontSize: '5mm',
    padding: '4mm ',
    flexDirection: 'row',
  },
  info: {
    fontSize: '4mm',
    color: 'black',
  },
  text: {
    fontSize: '3.5mm',
    color: 'black',
    padding: '3mm',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: '20%',
    padding: '5mm',
    backgroundColor: 'green',
  },
  // ---------------
  subtitleTypeRisk:
    {
      color: '#702785',
      fontWeight: 'bold',
      fontSize: '4mm',
      padding: '1mm',
      lineHeight: '1.6',
      textDecoration: 'underline',
    },
  subtitleAttachments:
    {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '3mm',
      padding: '2mm 0',
    },
  risksContainer: {
    padding: '2mm',
    maxWidth: '33%',
  },
  risksContainerBox: {
    padding: '3mm',
    flex: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    margin: '3mm',
  },
  textRisk: {
    fontSize: '3mm',
    color: 'black',
    margin: '0 3mm',
  },
  textRiskLevel: {
    fontSize: '3mm',
    color: 'black',
    padding: '2mm',
    fontWeight: 'bold',
  },
});

// Create Document Component
const MyDocument = ({ project }) => {
  const grouped = groupBy(project.risks, 'countries');
  const types = Object.keys(grouped);
  return (
    <Document style={styles.page}>
      <Page size="A4" style={styles.page} orientation="portrait">
        {/* <View style={styles.section}> */}
        {/* <Image style={styles.image} src="https://user-images.githubusercontent.com/5600341/27505816-c8bc37aa-587f-11e7-9a86-08a2d081a8b9.png" />

        {/* <Text>Section #1</Text>   */}
        {/* </View> */}
        <View>
          <View style={styles.section}>
            <Image
              style={styles.image}
              src="../Assets/photoBelcorp.jpg"
          />
            <Text style={styles.title}>Informe Legal</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Proyecto: </Text>
            <Text style={styles.info}>{project.name}</Text>
            <Text style={styles.subtitle}>Cliente:  </Text>
            <Text style={styles.info}>{project.owner}</Text>
            <Text style={styles.subtitle}>Área: </Text>
            <Text style={styles.info}>{project.area}</Text>
            <Text style={styles.subtitle}>Fecha de lanzamiento: </Text>
            <Text style={styles.info}>{project.date || '10/06/2020'}</Text>
          </View>

          <Text style={styles.subtitle}>Descripción: </Text>
          <Text style={styles.text}>{project.description}</Text>
          <Text style={styles.subtitle}>Recomendaciones: </Text>
          {// eslint-disable-next-line max-len
            project.recomendations.map((r, index) => <Text style={styles.text} key={r.content}>{index + 1 + r.content}</Text>)
          }
          {/* <View></View> */}
          <View>
            <Text style={styles.subtitle}>Riesgos:</Text>

            <View style={styles.risksContainerBox}>

              {
    types.map((type) => grouped[type].map((e, i) => (
      <View style={styles.risksContainer} key={`${e.title}0923${i}`}>
        <Text style={styles.subtitleTypeRisk}>
          {`${e.type}`}
        </Text>
        <Text
          style={styles.textRiskLevel}
        >
          {` ${e.level}`}

        </Text>
        {
          e.countries.map((c) => (
            <Text
              key={`${c}0923${i}`}
              style={styles.textRisk}
        >
              {`- ${c}, `}

            </Text>
          ))
        }
        <Text style={styles.subtitleAttachments}>Archivos Adjuntos</Text>
        {
          e.attachments.map((a) => (
            <Text
              key={`${a.title}0923${i}`}
              style={styles.textRisk}
        >
              {`- ${a.title}, `}

            </Text>
          ))
        }
      </View>
    )))
}
            </View>

          </View>

        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
