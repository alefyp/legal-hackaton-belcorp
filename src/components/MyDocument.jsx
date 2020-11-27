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
  },
  subtitle: {
    color: '#91A1BE',
    fontWeight: 'bold',
    fontSize: '5mm',
  },
  text: {
    fontSize: '3mm',
    color: 'black',
  },
  section: {
    display: 'flex',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
  },
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
  const grouped = groupBy(project.risks, 'countries');
  const types = Object.keys(grouped);
  return (
    <Document style={styles.page}>
      <Page size="A4" style={styles.page} orientation="portrait">
        {/* <View style={styles.section}> */}
        {/* <Image style={styles.image} src={uri: "https://user-images.githubusercontent.com/5600341/27505816-c8bc37aa-587f-11e7-9a86-08a2d081a8b9.png" method: 'GET', headers: {}, body: '' } /> */}

        {/* <Text>Section #1</Text> */}
        {/* </View> */}
        <View>
          <Text style={styles.title}>Informe Legal</Text>
          <Text style={styles.subtitle}>Proyecto: </Text>
          <Text>{project.name}</Text>
          <Text style={styles.subtitle}>Cliente:  </Text>
          <Text style={styles.text}>{project.owner}</Text>
          <Text style={styles.subtitle}>Área: </Text>
          <Text style={styles.text}>{project.area}</Text>
          <Text style={styles.subtitle}>Fecha de lanzamiento: </Text>
          <Text style={styles.text}>{project.date || '10/06/2020'}</Text>
          <Text style={styles.subtitle}>Descripción: </Text>
          <Text style={styles.text}>
            {project.description}
          </Text>
          <Text style={styles.subtitle}>Recomendaciones</Text>
          {
            // eslint-disable-next-line max-len
            project.recomendations.map((r) => <Text style={styles.text} key={r.content}>{r.content}</Text>)
        }
          {
              types.map((type) => grouped[type].map((e, i) => (
                <View key={`${e.title}0923${i}`}>
                  <Text
                  >
                    {`> ${e.type}`}

                  </Text>
                  <Text
                  >
                    {`+ ${e.level}`}

                  </Text>
                  {
                    e.countries.map((c) => (
                      <Text key={`${c}0923${i}`}
                  >
                        {`- ${c}, `}

                      </Text>
                    ))
                  }
                  {
                    e.attachments.map((a) => (
                      <Text key={`${a.title}0923${i}`}
                  >
                        {`- ${a.title}, `}

                      </Text>
                    ))
                  }
                </View>
              )))

        }
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
