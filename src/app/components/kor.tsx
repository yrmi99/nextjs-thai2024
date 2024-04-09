
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Eng() {
  const [currentDate, setCurrentDate] = useState('');
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    // Define the due date
    const dueDate = new Date('May 31, 2024');

    // Function to update the current date and remaining days
    const updateDate = () => {
      const dateObj = new Date();
      const year = dateObj.getFullYear();
      const month = dateObj.toLocaleString('default', { month: 'long' }); // Get the full name of the month
      const day = dateObj.getDate();
      const suffix = getSuffix(day); // Function to get the appropriate suffix

      setCurrentDate(`${month} ${day}${suffix}, ${year}`);

      // Calculate remaining days
      const differenceInTime = dueDate.getTime() - dateObj.getTime();
      const remainingDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setRemainingDays(remainingDays);
    };

    // Update date initially
    updateDate();

    // Update date and remaining days every minute
    const interval = setInterval(updateDate, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to get the appropriate suffix for the day
  const getSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (

    <div className="backdrop-blur-lg bg-white dark:bg-transparent dark:bg-opacity-20 dark:text-white last:border-b max-w-screen-lg w-80% p-5 m-auto border border-[#B3A369] flex flex-col">
      <div className="flex justify-center">
        <div className="flex-shrink-0">
          <Image
            src="/bunny.gif"
            alt="header image"
            width={80}
            height={80}
          />
        </div>
      </div>

      <div className="w-full border border-b-[#B3A369] border-t-[#B3A369] border-l-transparent border-r-transparent flex justify-between">
        <span>선교 기도 편지</span>
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
        <span>6월 1일부터 28일까지, 미국 대학생 선교 단체 SOON Movement Global(ICCC 산하조직)을 통해 
          태국 이싼 지역에 있는 우돈타니로 선교를 떠납니다. 현재 태국은 국민의 93%가 불교를 신앙으로 가지고 있으며, 
          기독교인은 단 1%도 되지 않습니다. 특히 최근에는 마약과 성에 대한 인식이 매우 개방적으로 바뀌어가고 있어, 
          복음의 전파가 절실한 시기입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">방법</span><br></br>
        <span>저희는 라자밧 대학교와 우동타니 농업 기술 대학에서 영어 학교를 운영하며 전도할 예정입니다.
            3주차에는 학생들의 흥미와 호응을 불러일으켰던 무언극과 찬양, 케이팝 무대 등을 선보일 
            &apos;Friend’s Night&apos;이라는 전도 집회를 열 계획입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">목적</span><br></br>
        <span>작년 선교 동안 하나님의 은혜로 잊지 못할 추억과 친구들을 많이 얻었기에, 근 몇 달간 여름 계획을 놓고
            하나님의 인도 하심을 구하였습니다. 하나님께서는 제 예상과 달리, 가능할 것 같았던 다른 선택지들의 문을 닫으시고
            작년에 만난 태국 친구들을 생각나게 하시며 마음을 움직이셨습니다. 하나님의 부르심이라고 믿는 만큼,
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

      <div className="mt-12 w-full sm:w-4/5 text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-transparent border-r-transparent">
        <p className="text-xs sm:text-sm">
        &quot;예수님께서 무리를 보시고 불쌍히 여기시니 이는 그들이 목자 없는 양과 같이 고생하며 기진함이라
        이에 제자들에게 이르시되 추수할 것은 많되 일꾼이 적으니
        그러므로 추수하는 주인에게 청하여 추수할 일꾼들을 보내 주소서 하라 하시니라&quot;
        </p>
        <p className="text-xs sm:text-sm">
          &ndash; 마태복음 9장 36절~38절
        </p>
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

      <div className="mt-6 sm:mt-12">
        <div className="flex justify-center">
          <span className="font-bold text-sm sm:text-base">기부로 하나님의 사역에 동참해주세요!</span>
        </div>
        <div className="flex justify-center">
          <span className="font-medium text-sm sm:text-base text-center text-[#e88247]">목표 모금액: $4,900 (한화 665만원)</span>
        </div>
        <div className="flex justify-center">
          <span className="font-medium text-sm sm:text-base text-center text-[#e88247]">
            진행 상황: 7.99% ($391.64)
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-medium text-xs xs:text-base text-center">
            {remainingDays > 0
              ? `마감기한까지 ${remainingDays}일 남았어요`
              : '모금 기간이 지났습니다.'
            }
            {' '}
          </span>
        </div>
        <div>&apos; &apos;</div>

        <div className="m-auto w-3/5 flex justify-around landscape:flex-row portrait:flex-col">
          <div className="mt-2 text-[0.5rem] flex flex-col items-center">
            <span className="text-xs mt-3em">Zelle로 계좌 송금</span>
            <span className="text-xs mt-2em">Click me!</span>
            <a href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiWUVPUkFNIiwiYWN0aW9uIjoicGF5bWVudCIsInRva2VuIjoieXJzaTI5MzgyQGdtYWlsLmNvbSJ9">
              <Image src="/zelleqr.jpg" alt="QR Code, Zelle" width={150} height={150} layout="fixed" />
            </a>
            <span className="text-xs">enrolled as YEORAM SEO</span>
          </div>
        </div>

        <div className="m-auto w-full sm:w-3/5 flex justify-center landscape:flex-row portrait:flex-col"> 
  <div className="mt-2 text-[0.5rem] sm:text-xs flex flex-col items-center">
    <span className="text-sm sm:text-sm mt-3em">한국 계좌 송금: 씨티 2033824526701</span>
  </div>
</div>
        
        <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6"> {/* Increased margin top */}
          <div className="mr-0 sm:mr-8 text-[0.5rem] sm:text-sm flex flex-col items-center sm:text-center">
            <span className="text-sm mt-2em">공식 웹사이트</span>
            <span className="text-xs mt-2em">Click me!</span>
            <a href="https://give.smglobal.org/atlanta/">
              <Image src="/qr code.png" alt="QR Code" width={150} height={150} layout="fixed" />
            </a>
          </div>

          <div className="text-[0.5rem] sm:text-sm mt-4 sm:mt-0"> {/* Increased margin top */}
            <span className="text-xs"><b></b><b></b>기부 방법</span>
            <ol className="text-xs list-decimal list-inside mt-2 ml-5">
              <li>후원하기 클릭!</li>
              <li>기부 금액 명시 후, Purpose에서 &apos;SM24 (ATL01 - THA) Seo, Yeoram&apos; 클릭 (하단 2번째)</li>
              <li>안내에 따라 개인정보 작성</li>
              <li>신용카드로 결제 혹은 미국 은행 계좌로 송금</li>
              <li>Donate Now 클릭하면 기부 완료!</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-6"> {/* Increased margin top */}
        <div className="flex justify-center overflow-x-auto">
          <div className="flex items-center">
            <Image
              src="/KakaoTalk_20240327_202316980_08.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
            />
            <Image
              src="/KakaoTalk_20240327_202316980_14.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
              className="ml-4 sm:ml-0"
            />
            <Image
              src="/KakaoTalk_20240327_202316980_02.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
              className="ml-4 sm:ml-0"
            />
            <Image
              src="/KakaoTalk_20240327_202316980_10.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
              className="ml-4 sm:ml-0"
            />
            <Image
              src="/KakaoTalk_20240327_202316980_12.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
              className="ml-4 sm:ml-0"
            />
            <Image
              src="/KakaoTalk_20240327_202316980.jpg"
              alt="Previous mission picture1"
              width={160}
              height={160}
              layout="fixed"
              className="ml-4 sm:ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
