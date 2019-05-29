import {
  MAP_ANNOTATION_ADDED,
  MAP_ANNOTATION_DELETED,
} from 'Constants';
import { createReducer } from 'util/reducers';

const initialState = {
  annotationList: [],
  mapList: [
    {
      id: 'map1',
      name: 'map1',
    },
    {
      id: 'map2',
      name: 'map2',
    },
    {
      id: 'map3',
      name: 'map3',
    },
    {
      id: 'map4',
      name: 'map4',
    },
  ],
};

const reducers = {
  [MAP_ANNOTATION_ADDED]: (state, action) => {
    const { annotationList } = state;
    const { annotation } = action;
    return {
      ...state,
      annotationList: [
        ...annotationList,
        {
          ...annotation,
          id: annotationList.length,
        },
      ],
    };
  },
  [MAP_ANNOTATION_DELETED]: (state, action) => {
    const { annotationList } = state;
    const { id } = action;
    return {
      ...state,
      annotationList: annotationList.filter(a => a.id !== id),
    };
  },
};

export default createReducer(initialState, reducers);
