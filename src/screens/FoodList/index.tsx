import { useMemo, useState } from "react";
import { FlatList, View } from "react-native";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { dbFirebase } from "../../../firebaseConfig";

import { Container, ScrollableContainer, Title } from "./styles";

import { SearchBar } from "../../components/SearchBar";
import { CategoriesList } from "../../components/CategoriesList";
import { FoodCard } from "../../components/FoodCard";
import { FoodProps } from "../../@types/FoodProps";

export default function FoodList() {
  const [isLoading, setIsLoading] = useState(false);
  const [foods, setFoods] = useState([] as FoodProps[]);

  useMemo(() => {
    const unsubscribe = onSnapshot(collection(dbFirebase, "foods"), (snap) => {
      setIsLoading(true);
      const docs = snap.docs.map((doc) => doc.data() as FoodProps);

      setFoods(docs);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <SearchBar />
      <ScrollableContainer>
        <View>
          <Title>Categorias</Title>

          <CategoriesList />
        </View>

        <View style={{ marginTop: 40 }}>
          <Title>Pratos</Title>

          <View style={{ marginTop: 16 }}>
            <FlatList
              data={foods}
              renderItem={({ item }) => <FoodCard food={item} />}
            />
          </View>
        </View>
      </ScrollableContainer>
    </Container>
  );
}
