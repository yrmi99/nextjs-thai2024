
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Kor() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Function to update the current date
    const updateDate = () => {
      const dateObj = new Date();
      const year = dateObj.getFullYear();
      const month = dateObj.getMonth() + 1;
      const day = dateObj.getDate();
      setCurrentDate(`${year}년 ${month}월 ${day}일`);
    };

    // Update date initially
    updateDate();

    // Update date every minute
    const interval = setInterval(updateDate, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="bg-white max-w-screen-lg w-80% p-5 m-auto border border-[#B3A369] flex flex-col">
      <div className="flex justify-end">
        <div className="flex-shrink-0">
          <Image
            src="/animationheader-ezgif.com-crop.gif"
            alt="header image"
            width={0}
            height={0}
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full border border-b-[#B3A369] border-t-[#B3A369] border-l-white border-r-white flex justify-between">
        <span>선교 모금 편지</span>
        <span>{currentDate}</span>
      </div>

      <div className="mt-5">
        친애하는 믿음의 동역자님께<br></br>
      </div>
    
      <div className="mt-2">
        <span className="font-bold">소개</span><br></br>
        <span>샬롬! 서여람입니다. 먼저, 이 편지를 읽으시는 분께서 주님의 은혜 안에 평안하시길 바랍니다. 
        작년에 이어 다가오는 6월, 태국 선교를 통해 한 달간의 방학을 주님께 온전히 드리기로 하였습니다. 
        많은 기도와 후원이 필요하기에 이 편지를 작성합니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">장소</span><br></br>
        <span>저는 6월 1일부터 28일까지, 미국 대학생 선교 단체 SOON Movement Global(ICCC 산하조직)을 통해 
            태국 이싼 지역에 있는 우돈타니로 선교를 갑니다. 현재 태국은 국민의 93%가 불교이며, 기독교인은 단 1%밖에 차지하지 않습니다. 
            특히나 최근 마약 매매와 트렌스젠더 비율이 급속도로 높아져 복음 전파가 시급한 국가입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">방법</span><br></br>
        <span>저희는 라자밧 대학교와 우동타니 농업 기술 대학에서 영어 학교를 운영하며 전도할 예정입니다.
            3주차에는 학생들의 흥미와 호응을 불러일으켰던 무언극과 찬양, 케이팝 무대 등을 선보일 
            Friend’s Night이라는 전도 집회를 열 계획입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">목적</span><br></br>
        <span>작년 선교 동안 하나님의 은혜로 잊지 못할 추억과 친구들을 많이 얻었기에, 근 몇 달간 여름 계획을 놓고
            하나님의 인도 하심을 구하였습니다. 하나님께서는 제 예상과 달리, 가능할 것 같았던 다른 선택지들의 문을 닫으시고
            작년에 만난 태국 동생들을 생각나게 하시며 마음을 움직이셨습니다. 하나님의 부르심이라고 믿는 만큼,
            친구들을 다시 만나 예수님에 대해 더 깊이 전하고, 보내주신 하나님의 뜻을 알기 바라는 마음입니다. </span>
      </div>

      <div className="mt-2">
        <span className="font-bold">요청</span><br></br>
        <span>한 달간 태국에서 하나님을 섬기기 위해서는 여러분의 기도와 재정적 지원이 반드시 필요합니다. 
            후원자 모든 분과 함께 기도와 시간, 재정을 주님께 같이 드리며 하나님께 영광 돌릴 수 있기를 바랍니다!</span>
      </div>

      <div className="mt-4 w-full text-right">
        서여람 드림
      </div>

      <div className="mt-12 w-4/5 text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-white border-r-white">
        “이 천국 복음이 모든 민족에게 증언되기 위하여 온 <br></br>
        세상에 전파되리니 그제야 끝이 오리라” &ndash; 마태복음 24장 14절
      </div>

      <div className="mt-12 w-full">
        <span className="font-bold">기도해주세요!</span><br></br>
        <ol className="list-decimal list-inside mt-2 ml-5">
          <li>팀원들의 재정적 필요가 다 채워지도록</li>
          <li>궂은 날씨와 환경 속에서도 기쁨으로 임할 수 있도록</li>
          <li>오고 가는 여정 속 모두 안전하도록</li>
          <li>배려와 사랑과 기도가 넘치는 선교팀이 되도록</li>
          <li>영적 전쟁으로부터 깨어있도록</li>
          <li>만나게 될 태국 학생들이 예수님을 영접할 수 있도록</li>
          <li>태국 땅에 놀라운 영적 부흥이 일어나도록.</li>
        </ol>
      </div>

      <div className="mt-12">
        <div className="flex justify-center">
          <span className="font-bold">기부로 제 선교를 지원해주세요!</span>
        </div>
        
        <div className="flex justify-center mt-2">
          <div className="mr-8 text-[0.5rem] flex flex-col text-center">
            <span className="text-xs">Click me!</span>
            <a href="https://give.smglobal.org/atlanta/">
              <Image src="/qr code.png" alt="QR Code" width={150} height={150} layout="fixed" />
            </a>
            <span className="">웹사이트로 이동됩니다.<br></br><br></br></span>
          </div>

          <div className="text-[0.5rem]">
            <span className="text-xs"><br></br>         기부 방법</span>
            <ol className="text-xs list-decimal list-inside mt-2 ml-5">
              <li>후원하기 클릭!</li>
              <li>기부 금액 명시 후, Purpose에서 'SM24 (ATL01 - THA) Seo, Yeoram' 클릭 (하단 2번째) </li>
              <li>안내에 따라 개인정보 작성</li>
              <li>신용카드로 결제 혹은 미국 은행 계좌로 송금</li>
              <li>Donate Now 클릭하면 기부 완료!</li>
            </ol>
          </div>
        </div>
      </div>



      {/* <div className="m-auto mt-2 flex justify-around landscape:w-3/5 landscape:flex-row portrait:flex-col text-center">
        <span className="text-xs">이메일: <a href="mailto:yrsi29382@gmail.com">yrsi29382@gmail.com</a></span>
        <span className="text-xs">카카오톡: @yeorahm1006</span>
        <span className="text-xs">인스타그램: @yeoram_seo</span>
      </div> */}


      <div className="flex justify-center">
        <div className="flex items-center">
          <Image
            src="/KakaoTalk_20240327_202316980_08.jpg"
            alt="Previous mission picture1"
            width={165} // Adjust width as needed
            height={165} // Adjust height as needed
            layout="fixed"
          />
          <Image
            src="/KakaoTalk_20240327_202316980_14.jpg"
            alt="Previous mission picture1"
            width={165} // Adjust width as needed
            height={165} // Adjust height as needed
            layout="fixed"
            style={{ marginLeft: "-10px" }} // Overlap by 20px
          />
          <Image
            src="/KakaoTalk_20240327_202316980_02.jpg"
            alt="Previous mission picture1"
            width={165} // Adjust width as needed
            height={165} // Adjust height as needed
            layout="fixed"
            style={{ marginLeft: "-10px" }} // Overlap by 20px
          />
          <Image
            src="/KakaoTalk_20240327_202316980_10.jpg"
            alt="Previous mission picture1"
            width={165} // Adjust width as needed
            height={165} // Adjust height as needed
            layout="fixed"
            style={{ marginLeft: "-10px" }} // Overlap by 20px
          />
          <Image
            src="/KakaoTalk_20240327_202316980_12.jpg"
            alt="Previous mission picture1"
            width={165} // Adjust width as needed
            height={165} // Adjust height as needed
            layout="fixed"
            style={{ marginLeft: "-10px" }} // Overlap by 20px
          />
          <Image
            src="/KakaoTalk_20240327_202316980.jpg"
            alt="Previous mission picture1"
            width={180} // Adjust width as needed
            height={180} // Adjust height as needed
            layout="fixed"
          />
          {/* Add more images here */}
        </div>
      </div>

    </div>
  );
}
