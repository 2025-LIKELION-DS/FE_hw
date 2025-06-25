import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
const HEADER_MENU = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  `;

const HEADER_LINK=styled(Link)`
 border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;
const HEAD =styled.div`
  position: relative;
  `;

return (
<HEAD>
<h1>
<Link to="/">영어 단어장 만들기</Link>
</h1>
<HEADER_MENU>
<HEADER_LINK to="/create_word" >
단어 추가
</HEADER_LINK>
<HEADER_LINK to="/create_day">
Day 추가
</HEADER_LINK>
</HEADER_MENU>
</HEAD>

);
}