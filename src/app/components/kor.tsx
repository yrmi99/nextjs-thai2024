
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
      const year = dateObj.getFullYear() + "년";
      const month = (dateObj.getMonth() + 1) + "월"; // Adding 1 because getMonth returns zero-based month
      const day = dateObj.getDate() + "일";
      const suffix = getSuffix(dateObj.getDate()); // Function to get the appropriate suffix

      setCurrentDate(`${year} ${month} ${day}`);

      // Define the due date
      const dueDate = new Date('May 31, 2024');

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
        샬롬, 서여람입니다! <br></br>
      </div>
    
      <div className="mt-2">
        <span className="font-bold">소개</span><br></br>
        <span>먼저, 편지를 읽어주심에 진심으로 감사의 말씀을 전합니다. 하나님의 인도하심이라고 믿는 만큼, 읽으시는 동안 
        하나님께서 마음의 감동을 주시기 원합니다. 
        제가 이 편지를 쓰게 된 이유는, 작년에 이어 다가오는 6월 한 달을 선교로 주님께 드리기로 결정하였기 때문입니다. 
        주님의 사역을 이루기 위해선 많은 동역자 분들의 기도와 후원이 필요하기에 본 편지를 작성케 되었습니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">장소</span><br></br>
        <span>제가 가게 될 지역은 우돈타니라는 태국 지방의 작은 도시입니다. 
          많은 분들이 아시다시피, 태국은 거의 모든 국민이 불교신자이고 기독교인은 단 1%도 차지하지 않는 나라입니다. 
          최근에는 마약의 노출과 성에 대한 잘못된 인식이 청년부터 어린 학생들의 문화를 압도하고 있으며,
          특히 우돈타니가 위치한 이싼 지방은 인신매매율이 높아 아직까지 선교지로서 많은 관심이 필요한 지역입니다.
        </span>
      </div>

      <div className="mt-2">
        <span className="font-bold">방법</span><br></br>
        <span>저랑 저와 함께 가는 캠퍼스 선교 단체 &apos;SOON Global Movement(ICCC 산하조직)&apos; 멤버들은
            라자밧 대학교에서 신입생을 대상으로 영어 학교를 운영하며 전도할 예정입니다. 2주간 관계를 쌓은 뒤
            3주차에는 작년에 학생들의 큰 호응을 불러일으켰던 무언극과 찬양, 케이팝 무대 등을 선보일
            &apos;Friend’s Night&apos;이라는 전도 집회를 열 계획입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">목적</span><br></br>
        <span>지난 번 선교는 작년 제게 가장 행복한 한 달이었다 해도 과언이 아닐 정도로 은혜와 기쁨이 넘치는 시간이었습니다.
            언어장벽에도 불구하고 낯선 저를 친언니처럼 따라준 학생들은 선교가 끝난 지금까지도 서로의 안부를 묻는 귀한 친구가 되었습니다.
            하나님께서는 친구들을 향한 마음을 놓고 인도하심을 구하는 제게 여러 사람들의 입을 통하여서 태국으로 마음과 기회의 문을 열어주셨습니다.
            하나님의 부르심이라고 믿는 만큼, 친구들에게 예수님에 대해 더 깊이 전하고, 보내주신 하나님의 뜻을 알기 바라는 마음입니다. </span>
      </div>

      <div className="mt-2">
        <span className="font-bold">요청</span><br></br>
        <span>한 달간 태국에서 하나님을 섬기기 위해서는 여러분의 기도와 재정적 지원이 절실히 필요합니다. 
            후원자분들과 함께 기도와 시간, 재정을 주님께 드리며 함께 하나님께 영광 돌리길 소망합니다 :D</span>
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
            진행 상황: 63.65% ($3118.61)
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-medium text-xs xs:text-base text-center">
            {remainingDays > 0
              ? `마감기한까지 ${remainingDays}일 남았어요`
              : '모금 기간이 지났습니다.'
            }
          </span>
        </div>

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
