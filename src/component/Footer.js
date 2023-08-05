export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <p>
          주)고우니 컴퍼니 | 사업자등록번호: 123-12-12345 | 대표자: 고우니 |
          경기도 수원시 영통구 | 대표번호: 1644-1111 | 이메일: hhh3901@gmail.com
        </p>
        <p>
          개인정보 보호 책임자: 고우니 | 호스팅 서비스 사업자: Aws |
          통신판매업신고: 제 2022-경기수원-1000 호 (사업자정보확인) |
          개인정보처리방침 | 이용약관{" "}
        </p>
      </div>
      <div>
        고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을
        체결하여 보장해드리고 있습니다. 서비스 가입사실 확인 © 마이코스메
        대한민국
      </div>
      {/* <div className="footerLeft">
        <p>C/S Center</p>
        <p>070.123.1234</p>
        <p>평일 AM 10:00 ~ PM 18:00 | 점심시간 12:00 ~ 13:00</p>
        <p>토,일, 공휴일 휴무</p>
      </div> */}
      {/* <div className="footerRight">
        <p>COMPANY INFO</p>
        <p>
          상호 : (주)고우니코스메틱 | 대표 : 고우니 | 사업자등록번호 :
          111-11-11111
        </p>
        <p>통신판매업신고 : 2022-수원영통-00000 (사업자정보확인)</p>
        <p>전화 : 070.123.1234 | 주소 : 경기도 수원시 영통구 123</p>
        <p>COPYRIGHT 2022(주)고우니코스메틱 ALL RIGHTS RESERVED</p>
      </div> */}
      <style jsx>{`
        .footerContainer {
          display: inline-block;
          width: 100%;
          border-top: 1px solid gray;
          font-size: 10px;
          padding: 15px;
          line-height: 10px;
          text-align: center;
          margin: 0 auto;
        }
        .footerTop {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
