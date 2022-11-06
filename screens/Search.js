import React, { useState, useEffect } from "react";
import {StyleSheet, Text, SafeAreaView, ActivityIndicator,} from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { searchAllSubjects } from "../gql/queries"
import { useQuery } from "@apollo/client";

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const { data } = useQuery(searchAllSubjects);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Materias disponibles</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!data ? (<ActivityIndicator size="large" />) : (<List searchPhrase={searchPhrase} data={data} setClicked={setClicked} setSearchPhrase={setSearchPhrase} />)}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#A9C2D9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 900,
    height: "70%"
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});