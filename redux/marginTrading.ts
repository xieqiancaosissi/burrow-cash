import { createSlice } from "@reduxjs/toolkit";

interface commonAssets {
  ReduxcategoryAssets1: any;
  ReduxcategoryAssets2: any;
  ReduxcategoryCurrentBalance1: any;
  ReduxcategoryCurrentBalance2: any;
}

const initialState: commonAssets = {
  ReduxcategoryAssets1: null,
  ReduxcategoryAssets2: null,
  ReduxcategoryCurrentBalance1: "",
  ReduxcategoryCurrentBalance2: "",
};

const marginCategory = createSlice({
  name: "marginCategories",
  initialState,
  reducers: {
    setCategoryAssets1(state, action) {
      state.ReduxcategoryAssets1 = action.payload;
    },
    setCategoryAssets2(state, action) {
      state.ReduxcategoryAssets2 = action.payload;
    },
    setReduxcategoryCurrentBalance1(state, action) {
      state.ReduxcategoryCurrentBalance1 = action.payload;
    },
    setReduxcategoryCurrentBalance2(state, action) {
      state.ReduxcategoryCurrentBalance2 = action.payload;
    },
  },
});

const {
  setCategoryAssets1,
  setCategoryAssets2,
  setReduxcategoryCurrentBalance1,
  setReduxcategoryCurrentBalance2,
} = marginCategory.actions;
const marginCategoryReducer = marginCategory.reducer;
export {
  setCategoryAssets1,
  setCategoryAssets2,
  setReduxcategoryCurrentBalance1,
  setReduxcategoryCurrentBalance2,
};
export default marginCategoryReducer;
