import { get } from 'lodash';
import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput, View,Text,ActivityIndicator } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getDataByKeyDucks } from './ducks';

const Home = () => {
  const [value, onChangeText] = React.useState('');

  const loadingByKey = useSelector(state=>get(getDataByKeyDucks.selector(state),`${value}.isFetching`,false));
  const dataByKey = useSelector(state => get(getDataByKeyDucks.selector(state),`${value}.payload.data.items`,[]));
  const dispatch = useDispatch();

  console.log(dataByKey);
  return (
    <View style={{marginLeft:20,marginRight:20 }}>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop:200}}
      onChangeText={
        text => {
          onChangeText(text);
          
          dispatch(getDataByKeyDucks.requestActions.fetch({test: text}));
        }
      }
      // value={value}
      keyboardType='default'
    />
    {loadingByKey && <ActivityIndicator />}
    {dataByKey.map(item =>(
        <Text key={item.id}>
          {item.name}
        </Text>
    )
    )}
    
    </View>
    
  );
}

export default Home;