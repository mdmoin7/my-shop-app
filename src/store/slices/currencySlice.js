import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR",
  reducers: {
    // action : (state, action_info)=>{ return updated_data_to_store}
    // state : current data inside the store
    // action_info : some information related to the action dispatched
    changeCurrency: (state, action) => {
      return action.payload;
    },
  },
});

// actions are used by components to do the data changes in the store
export const { changeCurrency } = currencySlice.actions;
// reducer is used by the store to manage the data
export default currencySlice.reducer;
