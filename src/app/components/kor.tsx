
import Image from 'next/image';

export default function Kor() {

  return (

    <div className="bg-white max-w-screen-lg w-80% p-5 m-auto border border-[#B3A369] flex flex-col">
      <Image
        src="/public/pictrue 1.jpg"
        alt="Thai Summer Mission 2024"
        width={0}
        height={0}
        style={{ width: "auto", height: "100%" }}
        layout="responsive"
      />
      <div className="w-full border border-b-[#B3A369] border-t-[#B3A369] border-l-white border-r-white flex justify-between">
        <span>선교 모금 편지</span>
        <span>3월 29일, 2024</span>
      </div>

      <div className="mt-5">
        친애하는 믿음의 동역자님께<br></br>
      </div>
    
      <div className="mt-2">
        <span className="font-bold italic">소개</span><br></br>
        <span>샬롬! 서여람입니다. 먼저, 이 편지를 읽으시는 분들께서 주님의 은혜 안에 평안하시길 바랍니다. 
        작년에 이어 다가오는 6월, 태국 선교를 통해 한 달간의 방학을 주님께 온전히 드리기로 하였습니다. 
        많은 기도와 후원이 필요하기에 편지를 작성합니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">장소</span><br></br>
        <span>저는 6월 1일부터 29일까지, 미국 대학생 선교 단체 SOON Movement Global(ICCC 산하조직)을 통해 
            태국 잇산으로 선교를 갑니다. 태국은 국민 93%가 불교이며 기독교인은 단 1%를 차지하는 나라입니다. 
            저희가 갈 이싼 지역은 특히나 전국에서 기독교인 비율이 가장 낮은 곳입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">방법</span><br></br>
        <span>선교 기간 동안 저희는 라자밧 대학교와 우동타니 농업 기술 대학에서 영어학교를
            운영하며 선교합니다. 2주차에는 Friend’s Night 이라는 전도 집회를 열어 무언극과 찬양무대 등을 통해 
            예수님에 대해 더 깊이 알 수 있도록 할 예정입니다.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">목적</span><br></br>
        <span>작년 선교 동안 하나님의 은혜로 잊지 못할 추억과 친구들을 많이 얻었기에, 근 몇 달간 여름 계획을 놓고
            하나님의 인도 하심을 구하였습니다. 하나님께서는 가능할 것 같았던 다른 선택지들의 문을 닫으시고
            저를 너무 잘 따라주었던 태국 동생들을 생각하게 하셨습니다. 하나님의 부르심이라고 믿는 만큼,
            친구들을 다시 만나 예수님에 대해 더 깊이 전하고, 보내주신 하나님의 뜻을 알기 바라는 마음입니다. </span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">요청</span><br></br>
        <span>한 달간 태국에서 하나님을 섬기기 위해서는 여러분의 기도와 재정적 지원이 반드시 필요합니다. 
            후원자 모든 분과 함께 기도와 시간, 재정을 주님께 같이 드리며 하나님께 영광 돌릴 수 있기를 바랍니다!</span>
      </div>

      <div className="mt-4 w-full text-right">
        서여람 드림
      </div>

      <div className="mt-12 w-4/5 italic text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-white border-r-white">
        “이 천국 복음이 모든 민족에게 증언되기 위하여 온 <br></br>
        세상에 전파되리니 그제야 끝이 오리라” &ndash; 마태복음 24장 14절
      </div>

      <div className="mt-12 w-full">
        <span className="font-bold italic">기도해주세요!</span><br></br>
        <ol className="list-decimal list-inside mt-2 ml-5">
          <li>저희 팀원들의 재정적 필요가 다 채워질 수 있도록</li>
          <li>궂은 날씨와 환경 속에서도 기쁨으로 임할 수 있도록</li>
          <li>오고 가는 여정 속 모두 안전하도록</li>
          <li>배려와 사랑과 기도가 넘치는 선교팀이 되도록</li>
          <li>만나게 될 태국 학생들이 예수님을 영접할 수 있도록</li>
          <li>태국 땅에 놀라운 영적 부흥이 일어나도록</li>
          <li>영적 전쟁으로부터 깨어있도록.</li>
        </ol>
      </div>

      <div className="mt-12 text-center">
        <span className="font-medium">기부로 제 선교를 지원해주세요!</span><br></br>
        
        <div className="m-auto w-3/5 flex justify-around landscape:flex-row portrait:flex-col">
          <div className="mt-2 text-[0.5rem] flex flex-col">
            <span className="text-xs">Click me!</span>
            <a href="https://www.zellepay.com/qr-codes/?data=eyJ0b2tlbiI6IjkxNzMyNzMxMTIiLCJuYW1lIjoiQ0hSSVNUSUFOIn0="><Image src="/lightsys/QRZelle.png" alt="QR Code, Zelle" width={0} height={0} style={{ width: "100%", height: "auto" }} layout="responsive" /></a>
            <span>Donate via Zelle</span>
            <span className="mt-[-1em]">You must scan from your banking app.</span>
          </div>

          <div className="mt-2 text-[0.5rem] flex flex-col">
            <span className="text-xs">Click me!</span>
            <a href="https://give.smglobal.org/atlanta/"><Image src="/public/qr code.png" alt="QR Code, Website" width={0} height={0} style={{ width: "100%", height: "auto" }} layout="responsive" /></a>
            <span>Donate via Venmo</span>
            <span className="mt-[-1em]">Venmo direct to @c_auh</span>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full text-center">
        <span className="text-xs">세금 서류가 필요한 경우 우승민(Andrew Woo)에게 문의하세요.</span>
      </div>
      <div className="m-auto mt-2 flex justify-around landscape:w-3/5 landscape:flex-row portrait:flex-col text-center">
        <span className="text-xs">이메일: <a href="mailto:yrsi29382@gmail.com">yrsi29382@gmail.com</a></span>
        <span className="text-xs">카카오톡: @yeorahm1006</span>
        <span className="text-xs">인스타그램: @yeoram_seo</span>
      </div>
    </div>

  );
}
