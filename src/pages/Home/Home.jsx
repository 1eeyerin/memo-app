import { useSelector } from 'react-redux';
import MemoEditor from '@/components/MemoEditor';

const Home = () => {
  const selectedMemoId = useSelector(({ memo }) => memo.selectedMemoId);

  return <MemoEditor id={selectedMemoId} />;
};

export default Home;
