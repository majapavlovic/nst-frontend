import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MemberState {
  members: { id: number; firstName: string, lastName: string }[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  members: [],
  loading: false,
  error: null,
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    fetchMembersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMembersSuccess(state, action: PayloadAction<{ id: number; firstName: string, lastName: string}[]>) {
      state.loading = false;
      state.members = action.payload;
    },
    fetchMembersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMembersRequest,
  fetchMembersSuccess,
  fetchMembersFailure,
} = memberSlice.actions;

export default memberSlice.reducer;
