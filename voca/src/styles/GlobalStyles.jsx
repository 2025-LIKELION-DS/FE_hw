import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

// 2. .App 클래스 스타일

export const AppContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

// 3. .header 클래스 스타일
export const HeaderContainer = styled.div`
  position: relative;
`;

// 4. .header .menu 클래스 스타일
export const HeaderMenu = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

// 5. .header .link 클래스 스타일
export const HeaderLink = styled(styled.a)` 
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;

// 6. .list_day 클래스 스타일
export const DayListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

// 7. .list_day li 클래스 스타일
export const DayListItem = styled.li`
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
`;

// 8. .list_day a 클래스 스타일
export const DayLink = styled(styled.a)`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
`;

// 9. table 관련 스타일
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableCell = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;

  &:first-child { 
    width: 10%;
  }
`;

// 10. .off 클래스 스타일
export const OffRow = styled.tr` 
  &.off td { 
    background: #eee;
    color: #ccc;
  }
`;

// 11. 버튼 관련 스타일
export const CommonButton = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
`;

export const DeleteButton = styled(CommonButton)` 
  margin-left: 10px;
  color: #fff;
  background-color: firebrick;
`;

// 12. 입력 영역 스타일
export const InputArea = styled.div`
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
`;

export const StyledSelect = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
`;