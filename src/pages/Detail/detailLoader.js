import { updateSelectedMemoId } from '@/redux/slices/memoSlice';
import store from '@/redux/store';

const detailLoader = ({ params }) => {
  store.dispatch(updateSelectedMemoId(params.id));

  return null;
};

export default detailLoader;
