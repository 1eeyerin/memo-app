import { useParams } from 'react-router-dom';
import MemoEditor from '@/components/MemoEditor';

const Detail = () => {
  const { id } = useParams();

  return <MemoEditor id={id} />;
};

export default Detail;
