import { get } from 'lodash';
import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput, View,FlatList,ActivityIndicator,StyleSheet,Text } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getDataByKeyDucks } from './ducks';

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:30,
    // marginBottom:0
  },
  search:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop:120,
    borderRadius:5
  },
  list:{
    lineHeight:30,
    fontSize:17
  }
})

let timer = null

const Home = () => {
  
  const [value, onChangeText] = React.useState('');
  const key = useRef(value)
  useEffect(()=>{
    key.current = value
  },[value])
  
  function throttle(text){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      dispatch(getDataByKeyDucks.requestActions.fetch({test: text}))
    },300)
  }
  
  
  const loadingByKey = useSelector(state=>get(getDataByKeyDucks.selector(state),`${value}.isFetching`,false));
  const dataByKey =  loadingByKey ? useSelector(state => get(getDataByKeyDucks.selector(state),`${key.current}.payload.data.items`,[])) :useSelector(state => get(getDataByKeyDucks.selector(state),`${value}.payload.data.items`,[]));
  
  console.log(loadingByKey);
  const dispatch = useDispatch();
  
  const renderItem = ({ item }) => (
      <Text style={styles.list}>{item.full_name}</Text>
  )
  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.search}
      onChangeText={
        text => {
          onChangeText(text);
          // dispatch(getDataByKeyDucks.requestActions.fetch({test: text}))
          throttle(text)
        }
      }
      keyboardType='default'
    />
    {/* {loadingByKey && <ActivityIndicator />} */}
        <FlatList 
        data={dataByKey}
        keyExtractor={item=>item.id}
        renderItem={renderItem}
        />
    </View>
    
  );
}

export default Home;