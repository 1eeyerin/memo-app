import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { addMemo, deleteMemo } from '@/redux/slices/memoSlice';

const MemoUtils = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const { memoLength, selectedMemoId } = useShallowEqualSelector(({ memo }) => {
    return {
      memoLength: memo.memos.length,
      selectedMemoId: memo.selectedMemoId,
    };
  });

  const handleAddMemo = () => {
    dispatch(addMemo());
    setIsUpdating(true);
  };

  const handleDeleteMemo = () => {
    if (memoLength <= 1) {
      alert('하나 이상의 메모는 남겨두어야 합니다.');
      return;
    }

    dispatch(deleteMemo());
    setIsUpdating(true);
  };

  useEffect(() => {
    if (!isUpdating) return;
    navigate(`/detail/${selectedMemoId}`);
    setIsUpdating(false);
  }, [selectedMemoId, navigate, isUpdating]);

  return (
    <StyledHeader>
      <StyledButton type="button" onClick={handleAddMemo}>
        새 메모 작성하기
      </StyledButton>
      <StyledButton type="button" onClick={handleDeleteMemo}>
        삭제
      </StyledButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: var(--color-base-background);
  border-top-left-radius: 10px;
`;

const StyledButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  background-color: none;
  color: var(--color-foreground);
  transition: all 120ms ease 0s;
  padding: 4px 8px;

  &:hover {
    color: #121212;
    font-weight: 600;
  }
`;

export default MemoUtils;
