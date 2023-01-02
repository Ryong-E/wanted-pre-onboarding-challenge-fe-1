import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../constants/route';

export default function (RequestedComponent: any, option: boolean | null) {
  // option
  // null : 아무나 출입이 가능항 페이지
  // true : 로그인한 유저만 출입이 가능한 페이지
  // false : 로그인한 유저는 출입불가한 페이지

  function AuthenticationCheck() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
      console.log('aa');
      // 로그아웃 api 요청 -> 현재 페이지에 들어온 사람의 상태정보(로그인여부, 회원여부 등)을 hoc에 가지고 와서 자격이 된다면 해당페이지로 가게해주고 아니면 다른 페이지로 보냄
      // 현재는 logout api 요청은 없어서 sessionStorage에 토큰이 있냐 없냐고 로그인 여부 검증
      const isToken = localStorage.getItem('jwtToken');

      if (!isToken) {
        // 로그인 하지않은 샅애
        if (option) {
          // option===true(로그인유저만 사용할 수 있는 페이지)인 페이지 접근 시 Login페이지로 이동시킴
          alert('로그인이 필요한 서비스입니다.');
          navigate(ROUTE.LOGIN.link, { state: pathname });
        }
        return;
      }
      if (option === false) {
        navigate(ROUTE.TODO.link);
      }
    }, []);

    return <RequestedComponent />;
  }

  return AuthenticationCheck;
}
