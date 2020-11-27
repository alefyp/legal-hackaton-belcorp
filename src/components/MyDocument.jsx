/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font, Image,
} from '@react-pdf/renderer';
import groupBy from '../API/Helpers';
// import Logo from '../Assets/logoBel.svg';

function toDataURL(url, callback) {
  const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

let result = '';
toDataURL('https://firebasestorage.googleapis.com/v0/b/belcorp-lh.appspot.com/o/photoBelcorp.jpg?alt=media&token=dd83cbe1-07fa-4b99-8481-e81586549006', (dataUrl) => {
  console.log('RESULT:', dataUrl);
  result = dataUrl;
});

// Register font
Font.register({ family: 'Castoro', src: 'https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&display=swap' });
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: '1cm',
  },
  title: {
    color: '#91A1BE',
    fontWeight: 'bold',
    fontSize: '8mm',
    textAlign: 'center',
    margin: 'auto auto auto 2mm',
  },
  project: {
    fontSize: '5mm',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#702785',
    fontWeight: 'bold',
    fontSize: '4mm',
    padding: '2mm ',
    flexDirection: 'row',
  },
  info: {
    fontSize: '4mm',
    color: 'black',
    padding: '2mm ',
  },
  text: {
    fontSize: '3.5mm',
    color: 'black',
    padding: '3mm',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91A1BE',
  },
  image: {
    width: '20%',
    padding: '2mm',
    // backgroundColor: '#702785',
    // position: 'relative',
  },
  // ---------------
  projectInfo: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'pink',
    margin: '3mm 1mm',
    // width: '100%',
  },
  subtitleTypeRisk:
    {
      color: '#702785',
      fontWeight: 'bold',
      fontSize: '4mm',
      padding: '1mm',
      lineHeight: '1',
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
    // padding: '1mm',
    maxWidth: '33%',
    margin: '2mm',
    // backgroundColor: 'pink',
  },
  risksContainerBox: {
    // padding: '2mm',
    flex: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',

    // backgroundColor: 'yellow',
    margin: '4mm 3mm',
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
const MyDocument = ({ project, name }) => {
  const grouped = groupBy(project.risks, 'type');
  const types = Object.keys(grouped);
  return (
    <Document style={styles.page}>
      <Page size="A4" style={styles.page} orientation="portrait">
        {/* <View style={styles.section}> */}
        {/* <Image style={styles.image} src="https://user-images.githubusercontent.com/5600341/27505816-c8bc37aa-587f-11e7-9a86-08a2d081a8b9.png" />

        {/* <Text>Section #1</Text>   */}
        {/* </View> */}
        <View>
          <View style={styles}>

            <View style={styles.projectInfo}>
              <Image
                style={styles.image}
                // src="../Assets/photoBelcorp.jpg"
                source={result}
          />
              <Text style={styles.title}>Informe Legal</Text>
            </View>

            <Text style={styles.subtitle}>Proyecto: </Text>
            <Text style={styles.info}>{name}</Text>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Cliente:  </Text>
              <Text style={styles.info}>{project.owner}</Text>
              <Text style={styles.subtitle}>Área: </Text>
              <Text style={styles.info}>{project.area}</Text>
              <Text style={styles.subtitle}>Fecha de lanzamiento: </Text>
              <Text style={styles.info}>{project.date || '10/06/2020'}</Text>
            </View>

            <Text style={styles.subtitle}>Descripción: </Text>
            <Text style={styles.text}>{project.description}</Text>
          </View>

          <View>
            <Text style={styles.subtitle}>Recomendaciones: </Text>
            {// eslint-disable-next-line max-len
            project.recomendations.map((r, index) => <Text style={styles.text} key={r.content}>{index + 1 + r.content}</Text>)
          }
          </View>
          <View>
            <Text style={styles.subtitle}>Riesgos:</Text>
            <View style={styles.risksContainerBox}>

              {console.log(types)}
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
