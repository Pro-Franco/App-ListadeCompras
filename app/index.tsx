import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

/**
 * Tipo que representa um item da lista
 */
type ItemCompra = {
  id: string;
  nome: string;
  comprado: boolean;
};

export default function App() {

  // texto digitado no input
  const [nomeItem, setNomeItem] = useState<string>("");

  // lista de compras
  const [listaCompras, setListaCompras] = useState<ItemCompra[]>([]);

  /**
   * Adiciona um item na lista
   */
  function adicionarItem() {

    if (nomeItem.trim() === "") return;

    const novoItem: ItemCompra = {
      id: Date.now().toString(),
      nome: nomeItem,
      comprado: false
    };

    setListaCompras([...listaCompras, novoItem]);
    setNomeItem("");
  }

  /**
   * Marca ou desmarca item como comprado
   */
  function alternarComprado(id: string) {

    const novaLista = listaCompras.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          comprado: !item.comprado
        };
      }

      return item;

    });

    setListaCompras(novaLista);
  }

  /**
   * Remove item da lista
   */
  function removerItem(id: string) {

    const novaLista = listaCompras.filter(
      (item) => item.id !== id
    );

    setListaCompras(novaLista);
  }

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>
        🛒 Lista de Compras
      </Text>

      {/* Área de digitação */}
      <View style={estilos.areaInput}>

        <TextInput
          style={estilos.input}
          placeholder="Digite um item do mercado..."
          value={nomeItem}
          onChangeText={setNomeItem}
        />

        <TouchableOpacity
          style={estilos.botaoAdicionar}
          onPress={adicionarItem}
        >
          <Text style={estilos.textoBotao}>
            Adicionar
          </Text>
        </TouchableOpacity>

      </View>

      {/* Lista */}
      <FlatList
        data={listaCompras}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={estilos.itemLista}>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => alternarComprado(item.id)}
            >
              <Text
                style={[
                  estilos.textoItem,
                  item.comprado && estilos.itemComprado
                ]}
              >
                {item.nome}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => removerItem(item.id)}
            >
              <Text style={estilos.remover}>
                ✕
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

      <StatusBar style="auto" />

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  areaInput: {
    flexDirection: "row",
    marginBottom: 20
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginRight: 10
  },

  botaoAdicionar: {
    backgroundColor: "#27ae60",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center"
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold"
  },

  itemLista: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  textoItem: {
    fontSize: 18
  },

  itemComprado: {
    textDecorationLine: "line-through",
    color: "#999"
  },

  remover: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18
  }

});