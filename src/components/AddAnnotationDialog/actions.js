import {
  MAP_ANNOTATION_ADDED,
} from 'Constants';

export const addAnnotation = annotation => (dispatch) => {
  dispatch({
    type: MAP_ANNOTATION_ADDED,
    annotation,
  });
};
