import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { ellipsisText, formatDate } from '@/utils';
import { ellipsisStyle } from '@/styles/utils';

const MemoList = () => {
  const { memos, selectedMemoId } = useShallowEqualSelector(({ memo }) => {
    return {
      memos: memo.memos,
      selectedMemoId: memo.selectedMemoId,
    };
  });

  return (
    <StyledUl>
      {memos.map((memo) => (
        <li key={memo.id}>
          <StyledLink
            to={`/detail/${memo.id}`}
            $selected={selectedMemoId === memo.id}
          >
            <StyledStrong>
              {ellipsisText(memo.content, 14) || '새로운 메모'}
            </StyledStrong>
            <StyledTime>
              {formatDate(memo.createdAt, 'A h:mm').toKor()}
            </StyledTime>
          </StyledLink>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  height: 56px;
  border-radius: 4px;
  background-color: ${({ $selected }) =>
    $selected ? 'var(--color-primary)' : 'var(--color-background)'};
  width: 100%;
  padding: 12px 24px;
  display: block;
`;

const StyledStrong = styled.strong`
  margin: 0px 0px 2px;
  font-size: 13px;
  font-weight: 700;
  display: block;
  ${ellipsisStyle(1)};
`;

const StyledTime = styled.time`
  font-size: 12px;
  color: #404040;
`;

export default MemoList;
