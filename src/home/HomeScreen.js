import { get } from 'lodash';
import React, { useCallback, useRef } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsDataDucks, getNewsDataByKeyDucks } from './ducks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 44
  }
});

const HomeScreen = () => {
  const key = useRef(1);
  const dispatch = useDispatch();

  const loading = useSelector(state => getNewsDataDucks.selector(state).isFetching);
  const data = useSelector(state => get(getNewsDataDucks.selector(state), `payload.news`, []));

  const loadingByKey = useSelector(state => get(getNewsDataByKeyDucks.selector(state), `${key.current}.isFetching`, false));
  const dataByKey = useSelector(state => get(getNewsDataByKeyDucks.selector(state), `${key.current}.payload.news`, []));

  const onPress = useCallback(() => {
    dispatch(getNewsDataDucks.requestActions.request());
  }, [dispatch]);

  const onPressByKey = useCallback(() => {
    dispatch(getNewsDataByKeyDucks.requestActions.fetch({key: key.current}));
  }, [dispatch]);

  return <View style={styles.container}>
    <Text style={styles.text}>
      Demo
    </Text>
    <Button title='获取' onPress={onPress} />
    {loading && <ActivityIndicator />}
    {data.map(item => (
      <Text key={item.type}>
        {`type: ${item.type}`}
      </Text>
    ))}
    <Button title='根据参数获取' onPress={onPressByKey} />
    {loadingByKey && <ActivityIndicator />}
    {dataByKey.map(item => (
      <Text key={item.type}>
        {`type: ${item.type}`}
      </Text>
    ))}
  </View>
}

export default HomeScreen;