import { 
  catalogRequest, 
  catalogRequestSusccess, 
  catalogRequestFailure,
  categoriesRequestSusccess,
} from '../reducers/reducerCatalog';

export const fetchCatalog = async (dispatch, id = 0, more = 0) => {
  let path  = id === 0 ? '/api/items' : `/api/items?categoryId=${id}`;
  if (more > 0 && id === 0) {
    path += '?'
  } else if (more > 0 && id > 0) {
    path += '&'
  }
  if (more > 0) {
    path += `offset=${more}`
  }
  dispatch(catalogRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(catalogRequestSusccess(data));
  } catch (e) {
    dispatch(catalogRequestFailure(e.message));
  }
}

export const fetchCategories = async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(categoriesRequestSusccess(data));
  } catch (e) {
    dispatch(catalogRequestFailure(e.message));
  }
}
