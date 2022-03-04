import { get, isEqual } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRepositoryDucks } from "./ducks";

export const useSearch = (keyword, preKeyword) => {
  const preKeywordRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => get(searchRepositoryDucks.selector(state), `${keyword}.isFetching`));
  const repositories = useSelector(state => {
    const preRepositories = get(searchRepositoryDucks.selector(state), `${preKeyword}.payload`);
    return get(searchRepositoryDucks.selector(state), `${keyword}.payload`, preRepositories);
  });

  useEffect(() => {
    // if (keyword?.length > 0) {
      dispatch(searchRepositoryDucks.requestActions.fetch({ keyword }));
    // }
  }, [dispatch, keyword]);

  return [repositories, loading];
}