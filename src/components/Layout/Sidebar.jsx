import styled from 'styled-components';
import MemoList from './MemoList';
import MemoUtils from './MemoUtils';

const Sidebar = () => {
  return (
    <StyledAside>
      <MemoUtils />
      <MemoList />
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  height: 100%;
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
