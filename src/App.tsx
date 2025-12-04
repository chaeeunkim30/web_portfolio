import React from 'react';
import styled from '@emotion/styled';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/organism/Header';

function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        credits={{ enabled: false }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <MainTitle>
                  <p>WEB FRONT-END PORTFOLIO</p>
                  <span>매일 성장하는 개발자 <b>김채은</b>입니다.</span>
                </MainTitle>
                <MainSub>
                  <span><img src="./assets/img/캐릭터1.png" alt="" /></span>
                  <MainContents>
                    <p>
                      안녕하세요. 꾸준함과 책임감을 바탕으로 성장하는 김채은입니다.<br />
                      어떤 일이든 끝까지 해내며, 매일 한 걸음씩 발전해 나가고 있습니다.<br />
                      문의는 아래에서 편하게 연락 주세요.
                    </p>
                    <div className="sub">
                      <a href="mailto:chaeeunkim30@gmail.com">EMAIL</a>
                      <a href="https://github.com/chaeeunkim30.git">GITHUB</a>
                      <a href="sms:01064000581">SMS</a>
                    </div>
                  </MainContents>
                </MainSub>
              </div>
              
              <div className="section">
                스킬입니돳
              </div>

              <div className="section">

              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background: var(--green-300, #4caf50); /* 변수가 없다면 임시 색상 */
  color: #fff;
  & > p {
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;
  }
  & > span {
    font-size: 22px;
  }
`;

const MainSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50vh;
  & > span {
    display: block;
    max-width: 280px;
    width: 100%;
    & > img {
      width: 100%;
    }
  }
`

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    text-align: center;
    padding: 30px;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    color: #fff;
    background: var(--green-300);
    border-radius: 4px;
  }
  & > .sub {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    & > a {
      text-align: center;
      width: 100px;
      padding: 12px 0;
      background: var(--green-200);
      border: 1px solid var(--green-300);
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      line-height: 120%;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: var(--green-300);
      }
    }
  }

`