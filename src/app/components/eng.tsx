
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Eng() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Function to update the current date
    const updateDate = () => {
      const dateObj = new Date();
      const year = dateObj.getFullYear();
      const month = dateObj.toLocaleString('default', { month: 'long' }); // Get the full name of the month
      const day = dateObj.getDate();
      const suffix = getSuffix(day); // Function to get the appropriate suffix

      setCurrentDate(`${month} ${day}${suffix}, ${year}`);
    };

    // Update date initially
    updateDate();

    // Update date every minute
    const interval = setInterval(updateDate, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to get the appropriate suffix for the day
  const getSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

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
        <span>Mission Trip Prayer Letter</span>
        <span>{currentDate}</span>
      </div>

      <div className="mt-5">
        My beloved brother or sister in Christ,<br></br>
      </div>
    
      <div className="mt-2">
        <span className="font-bold">Greetings</span><br></br>
        <span>Shalom! This is Yeoram. I hope you are finding boundless joy and peace in the Lord.
          Following last year's mission trip, I have decided to dedicate a month in my summer break to the work for God's Kingdom. 
          I write this letter in hopes that you will support my mission.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">Where am I going?</span><br></br>
        <span>From June 1st to the 28th, I will be embarking on a mission trip to Udon Thani, a region in Thailand, 
          with my college missionary organization SOON Movement Global (an affiliate of ICCC). 
          Thailand boasts a population where 93% identify as Buddhists, leaving only 1% who are Christians.
          Regrettably, the nation faces pressing needs for evangelization, particularly due to the escalating rates 
          of drug trafficking and transgender issues.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">What will I do?</span><br></br>
        <span>We will be evangelizing at the Rajabhat University and the Udon Thani College of Agriculture and Technology
          by running English schools. During the third week, we intend to organize an evangelistic event known as 
          Friend's Night, showcasing skits, praise and K-pop performances, and other engaging activities that has significantly
          resonated with students' interests and enthusiasm last year.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">Why am I going?</span><br></br>
        <span>Having garnered unforgettable memories and friendships by God's grace, 
          I've spent the past few months seeking His guidance regarding my summer plans. 
          Surprisingly, God closed doors to other options I had considered feasible, instead stirring my heart with 
          a desire to meet the Thai friends again. Believing this to be His calling, I eagerly anticipate sharing the Gospel 
          deeper and seeking to comprehend the divine will that has led me. </span>
      </div>

      <div className="mt-2">
        <span className="font-bold">Ask.</span><br></br>
        <span>As I prepare for this mission, I recognize that my journey extends far beyond my individual efforts. 
          Your support is vital in enabling me to carry out our mission effectively. 
          More than anything, I need your financial support and especially your prayers. 
          I humbly invite you to partner with me through your prayers.</span>
      </div>

      <div className="mt-4 w-full text-right">
        Yours faithfully in His service,<br></br>
        Yeoram Seo
      </div>

      <div className="mt-12 w-4/5 text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-white border-r-white">
        “이 천국 복음이 모든 민족에게 증언되기 위하여 온 <br></br>
        세상에 전파되리니 그제야 끝이 오리라” &ndash; 마태복음 24장 14절
      </div>

      <div className="mt-12 w-full">
        <span className="font-bold">Please pray with me for...</span><br></br>
        <ol className="list-decimal list-inside mt-2 ml-5">
          <li>The fulfillment of our team members' financial needs,</li>
          <li>Joy to prevail amidst challenging weather and surroundings,</li>
          <li>Safety throughout our travels,</li>
          <li>Our team to overflow with compassion, love, and prayer,</li>
          <li>Vigilance against spiritual warfare,</li>
          <li>The Thai students we'll encounter to embrace Jesus,</li>
          <li>A remarkable spiritual revival in the land of Thailand.</li>
        </ol>
      </div>

      <div className="mt-12">
        <div className="flex justify-center">
          <span className="font-bold">Please support my mission by donating!</span>
        </div>
        
        <div className="flex justify-center mt-2">
          <div className="mr-8 text-[0.5rem] flex flex-col text-center">
            <span className="text-xs">Click me!</span>
            <a href="https://give.smglobal.org/atlanta/">
              <Image src="/qr code.png" alt="QR Code" width={150} height={150} layout="fixed" />
            </a>
            <span className="">Will redirect you to the official website.<br></br><br></br></span>
          </div>

          <div className="text-[0.5rem]">
            <span className="text-xs"><br></br>         How to Donate</span>
            <ol className="text-xs list-decimal list-inside mt-2 ml-5">
              <li>Click 'GIVE TO THAILAND MISSION'</li>
              <li>Specify the giving amount and choose 'SM24 (ATL01 - THA) Seo, Yeoram' (2nd to the last) on Purpose </li>
              <li>Write down personal informations</li>
              <li>Donate via credit card or send money directly from your bank account</li>
              <li>Click 'Donate Now' and you will be done!</li>
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
