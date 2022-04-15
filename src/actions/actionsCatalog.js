import { catalogRequest, catalogRequestSusccess, catalogRequestFailure } from '../reducers/reducerCatalog';

export const fetchTotal = async (dispatch) => {
  dispatch(catalogRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(catalogRequestSusccess(data));
  } catch (e) {
    dispatch(catalogRequestFailure(e.message));
  }
}