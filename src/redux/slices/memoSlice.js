import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getNewMemo = () => {
  return {
    id: uuidv4(),
    content: '',
    createdAt: Date.now(),
  };
};

const initMemo = getNewMemo();

const initialState = {
  memos: [],
  selectedMemoId: null,
};

export const memosSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    initializeMemos: (state, { payload: memos }) => {
      const initMemos = !memos.length ? [initMemo] : memos;

      state.memos = initMemos;
      state.selectedMemoId = initMemos[0].id;
    },
    updateMemoContent: (state, { payload: content }) => {
      const { memos, selectedMemoId } = state;

      const index = memos.findIndex((memo) => memo.id === selectedMemoId);
      memos[index].content = content;
    },
    addMemo: (state) => {
      const newMemo = getNewMemo();

      state.memos.unshift(newMemo);
      state.selectedMemoId = newMemo.id;
    },
    deleteMemo: (state) => {
      const { memos, selectedMemoId } = state;

      const index = memos.findIndex((memo) => memo.id === selectedMemoId);
      memos.splice(index, 1);
      state.selectedMemoId = memos[0].id;
    },
    updateSelectedMemoId: (state, { payload: id }) => {
      state.selectedMemoId = id;
    },
  },
});

export const {
  updateMemoContent,
  addMemo,
  deleteMemo,
  updateSelectedMemoId,
  initializeMemos,
} = memosSlice.actions;
export default memosSlice.reducer;
