import {
  MAP_ANNOTATION_DELETED,
} from 'Constants';

export const deleteAnnotation = id => (dispatch) => {
  dispatch({
    type: MAP_ANNOTATION_DELETED,
    id,
  });
};
