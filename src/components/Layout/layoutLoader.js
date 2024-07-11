import { getLocalStorage } from '@/utils';
import { initializeMemos } from '@/redux/slices/memoSlice';
import store from '@/redux/store';

const layoutLoader = () => {
  const memos = getLocalStorage('memos');
  store.dispatch(initializeMemos(memos || []));

  return null;
};

export default layoutLoader;
