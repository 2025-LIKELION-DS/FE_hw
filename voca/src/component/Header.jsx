import { Link } from "react-router-dom";
import { HeaderContainer, HeaderMenu, HeaderLink } from '../styles/GlobalStyles';
export default function Header(){
  return(
    <HeaderContainer>
      <h1>
        <Link to="/">영어 단어장 만들기</Link>
      </h1>
      <HeaderMenu>
        <HeaderLink as={Link} to="/create_word">
          단어 추가
        </HeaderLink>
        <HeaderLink as={Link} to="/create_day">
          Day 추가
        </HeaderLink>
      </HeaderMenu>
    </HeaderContainer>
  );
}