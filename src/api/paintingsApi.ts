import { getPaintingsFailure, getPaintingsRequest, getPaintingsSuccess } from "../redux/reducers/paintings";
import { api } from "./axios";


export const Paintings = {
  getAll: async () => {
    return api.get(`products/3`);
  },
  getById: async () => {
    return api.get(`/appointment`);
  },

};


export const getPaintingsAll = async (dispatch:any) => {
    try {
      dispatch(getPaintingsRequest(''));
      const request = await Paintings.getAll();
      dispatch(getPaintingsSuccess(request.data.data));
    } catch (error) {
      dispatch(getPaintingsFailure(error));
    }
  };

  