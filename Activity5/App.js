import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1', 
    title: 'Morning: Taking a breakfast',
    color: '#FFCDB2', 
    selectedColor: '#00008B'
  },
  {
    id: '2', 
    title: 'Taking a bath', 
    color: '#FFB4A2', 
    selectedColor: '#00008B'
  },
  {
    id: '3', 
    title: 'Bebe time', 
    color: '#E5989B', 
    selectedColor: '#00008B'
  },
  {
    id: '4', 
    title: 'Nood Movie', 
    color: '#B5828C', 
    selectedColor: '#00008B'
  },
  {
    id: '5', 
    title:'Nood Anime', 
    color: '#FCE7C8', 
    selectedColor: '#00008B'
  },
  {
    id: '6', 
    title: 'Laro ML', 
    color: '#B1C29E', 
    selectedColor: '#00008B'
  },
  {
    id: '7', 
    title: 'Pag natalo "charge muna ako pre"', 
    color: '#FADA7A',
    selectedColor: '#00008B'
  },
  {
    id: '8', 
    title: 'Afternoon: Taking a Lunch', 
    color: '#F0A04B', 
    selectedColor: '#00008B'
  },
  {
    id: '9', 
    title: 'Watching Movie', 
    color: '#5C7285', 
    selectedColor: '#00008B'
  },
  {
    id: '10', 
    title: 'Playing Online Games', 
    color: '#818C78', 
    selectedColor: '#000000'
  },
  {
    id: '11', 
    title: 'Bebe Time ulit', 
    color: '#A7B49E', 
    selectedColor: '#FF69B4'
  },
  {
    id: '12', 
    title: 'Drawing', 
    color: '#E2E0C8', 
    selectedColor: '#ADD8E6'
  },
  {
    id: '13', 
    title: 'Gagala, iikot kung saan saan', 
    color: '#FFDAB3', 
    selectedColor: '#FFB6C1'
  },
  {
    id: '14', 
    title: 'Evening: Pag uwi Taking a Dinner', 
    color: '#C8AAAA', 
    selectedColor: '#90EE90'
  },
  {
    id: '15', 
    title: 'Playing Online Games w/ Bebe Time', 
    color: '#9F8383', 
    selectedColor: '#FFFFE0'
  },
  {
    id: '16', 
    title: 'Gagawa assignment', 
    color: '#574964', 
    selectedColor: '#FFA07A'
  },
  {
    id: '17', 
    title: 'Mag r-relapse saglit', 
    color: '#727D73', 
    selectedColor: '#E6E6FA'
  },
  {
    id: '18', 
    title: 'Tas laro ulit', 
    color: '#AAB99A', 
    selectedColor: '#FFFFFF'
  },
  {
    id: '19', 
    title: 'Makikinig ng music', 
    color: '#D0DDD0', 
    selectedColor: '#F5DEB3'
  },
  {
    id: '20', 
    title: 'Manonood sa tiktok', 
    color: '#F0F0D7', 
    selectedColor: '#696969'
  },
  {
    id: '21', 
    title: 'Makikipag bardagulan', 
    color: '#BAD8B6', 
    selectedColor: '#696969'
  },
  {
    id: '22', 
    title: 'MAglalaro ng robulox', 
    color: '#E1EACD', 
    selectedColor: '#696969'
  },
  {
    id: '23', 
    title: 'Bebe time magdamag', 
    color: '#F9F6E6', 
    selectedColor: '#696969'
  },
  {
    id: '24', 
    title: 'Makikipag away sa bebe', 
    color: '#8D77AB', 
    selectedColor: '#696969'
  },
  {
    id: '25', 
    title: 'Sleep well na', 
    color: '#7C444F', 
    selectedColor: '#696969'
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? item.selectedColor : item.color;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;