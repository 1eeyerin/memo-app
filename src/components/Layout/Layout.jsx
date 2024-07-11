import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { setLocalStorage } from '@/utils';
import Sidebar from './Sidebar';

const Layout = () => {
  const memos = useSelector(({ memo }) => memo.memos);

  useEffect(() => {
    setLocalStorage('memos', memos);
  }, [memos]);

  return (
    <StyledMain>
      <Sidebar />
      <Outlet />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: minmax(240px, 240px) 1fr;
  background-color: var(--color-base-background);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

export default Layout;
