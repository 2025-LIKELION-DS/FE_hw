/**
 * BlogButton 컴포넌트입니다.
 * 버튼 내 텍스트와 클릭 시 동작을 외부에서 주입받아 재사용할 수 있는 버튼 컴포넌트입니다.
 * 사용자가 정의한 함수와 텍스트로 다양한 액션 버튼 UI를 구성할 수 있습니다.
 *
 * @param {string} label - 버튼에 표시될 텍스트
 * @param {function} onClick - 버튼 클릭 시 실행할 함수
 *
 * @example
 * <BlogButton label="글 작성하기" onClick={handleClick} />
 *
 * @author 김서윤
 **/

import * as B from "../ui/Button.style";

function BlogButton({ label, onClick }) {
  return <B.BlogButton onClick={onClick}>{label}</B.BlogButton>;
}

export default BlogButton;
