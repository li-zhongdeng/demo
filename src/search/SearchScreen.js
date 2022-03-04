import { get } from 'lodash';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  FlatList,
  SafeAreaView, 
  StyleSheet, 
  TextInput, 
  View, 
  Text,
  ActivityIndicator 
} from 'react-native';
import { usePrevious } from 'react-use';
import { useSearch } from './hook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  activityIndicator: {
    position: 'absolute',
    right: 0,
    width: 44,
    height: 44,
  },
  itemContainer: {
    height: 44,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 16,
    backgroundColor: '#CCC'
  },
  emptyContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.full_name}</Text>
    </View>
  );
}

const SearchScreen  = () => {
  const [keyword, setKeyword] = useState('');
  const preKeywordRef = useRef(null);
  const [repositories, loading] = useSearch(keyword, preKeywordRef.current);

  const onChangeText = useCallback(text => {
    if (text.length > 0) {
      preKeywordRef.current = keyword;
    }
    setKeyword(text);
  }, [setKeyword, keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={keyword} 
          onChangeText={onChangeText} 
        />
        {loading && <ActivityIndicator style={styles.activityIndicator} />}
      </View>
      <FlatList
        data={repositories}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text>找不到相关仓库</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default SearchScreen;