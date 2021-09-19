import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { JIcon } from './src/components/utils/JIcon';
import { categories } from './src/interfaces/category/Category';

export default function App() {

  // TODO: Change extension to .ts

  return (
    <View style={styleIndex.container}>
      <View style={styleIndex.header}>
        <TouchableHighlight style={styleIndex.menuIcon}>
          <Svg
            style={{ width: 20, height: 20, marginLeft: "10%" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 341.333 341.333"
            xmlSpace="preserve"
          >
            <Path d="M0 277.333H341.333V320H0z" />
            <Path d="M0 149.333H341.333V192H0z" />
            <Path d="M0 21.333H341.333V64H0z" />
          </Svg>
        </TouchableHighlight>
        <View style={styleIndex.logoStyle}>
          <Image
            source={require('./assets/joda-logo.jpg')} style={{ width: 100, height: "100%" }}
          />
        </View>
        <TouchableHighlight style={styleIndex.plusStyle}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 20, height: 20, marginRight: "10%" }}
            viewBox="0 0 448 448"
          >
            <Path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0" />
          </Svg>
        </TouchableHighlight>

      </View>
      <View>
        <View style={styleIndex.contentContainer}>
          <Text style={categoriesStyle.subtitle}>¿Se sale?</Text>
          <View style={categoriesStyle.categoriesImgContainer}>
            <View style={categoriesStyle.categoriesContainerUP}>
              {categories.map((category, index) => {
                return (
                  <JIcon
                    key = {index}
                    text = {category.name}
                    imgSrc = {category.logoSrc}
                    categoriesStyle = {categoriesStyle}
                  />
                )
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styleIndex = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    borderBottomWidth: "1px",
    borderBottomColor: "#c1c1c1",
    flex: 0.2,
    flexDirection: 'row',
    alignItems: "strech",
    justifyContent: 'space-between',
    height: "1%",
    //backgroundColor:'red'
  },
  menuIcon: {
    width: "33.3%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    //backgroundColor:'dodgerblue'
  },
  logoStyle: {
    height: "100%",
    //backgroundColor:'dodgerblue'
  },
  plusStyle: {
    width: "33.3%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    //backgroundColor:'pink'
  },
  contentContainer: {
    alignItems: 'center',
  }
});

const categoriesStyle = StyleSheet.create({
  subtitle: {
    marginTop: "15px",
    fontSize: "30px",
    fontWeight: "400",
    marginBottom: "5%",
  },
  categoriesImgContainer: {
    width: "90%", 
    alignItems: "center",
  },
  categoriesContainerUP: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-around",
  },
  categoriesContainerDOWN: {
    flexDirection: "row",
    width: '65%',
    justifyContent: "space-between",
  },
  categorieIMG: {
    width: "100px", 
    height: "100px", 
    borderRadius: "100%",
    marginBottom: "10px",
  },
  categorieTouchable: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  specialTitle: {
    padding: "5px",
    backgroundColor: "#D553DD",
    fontWeight: "450",
    borderRadius: 100,
  },  
  specialTitleContainer: {
    padding: "5px",
    backgroundColor: "#C215B4",
    borderRadius: 100,
  },

});