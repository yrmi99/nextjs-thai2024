
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

    <div className="bg-white max-w-screen-lg w-80% p-5 m-auto border border-[#B3A369] flex flex-col">
      <div className="flex justify-center">
        <div className="flex-shrink-0">
          <Image
            src="/bunny.gif"
            alt="header image"
            width={80}
            height={80}
            // layout="responsive"
            // className="w-full h-auto"
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
          Following last year&apos;s mission trip, I have decided to dedicate a month in my summer break to the work for God&apos;s Kingdom. 
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
          Friend&apos;s Night, showcasing skits, praise and K-pop performances, and other engaging activities that has significantly
          resonated with students&apos; interests and enthusiasm last year.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold">Why am I going?</span><br></br>
        <span>Having garnered unforgettable memories and friendships by God&apos;s grace, 
          I&apos;ve spent the past few months seeking His guidance regarding my summer plans. 
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

      <div className="mt-12 w-full sm:w-4/5 text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-white border-r-white">
        <p className="text-xs sm:text-sm">
        &quot;When Jesus saw the crowds, he had compassion on them, because they were harassed and helpless,
          like sheep without a shepherd. Then he said to his disciples,
        </p>
        <p className="text-xs sm:text-sm">
          “The harvest is plentiful but the workers are few. Ask the Lord of the harvest,
          therefore, to send out workers into his harvest field.”&quot;
        </p>
        <p className="text-xs sm:text-sm">
          &ndash; Matthew 9:36&ndash;38
        </p>
      </div>


      <div className="mt-12 w-full">
        <span className="font-bold">Please pray with me for...</span><br></br>
        <ol className="list-decimal list-inside mt-2 ml-5">
          <li>The fulfillment of our team members&apos; financial needs,</li>
          <li>Joy to prevail amidst challenging weather and surroundings,</li>
          <li>Safety throughout our travels,</li>
          <li>Our team to overflow with compassion, love, and prayer,</li>
          <li>Vigilance against spiritual warfare,</li>
          <li>The Thai students we&apos;ll encounter to embrace Jesus,</li>
          <li>A remarkable spiritual revival in the land of Thailand.</li>
        </ol>
      </div>

      <div className="mt-8 sm:mt-12">
        <div className="flex justify-center">
          <span className="font-bold text-sm sm:text-base">Please support my mission by donating!</span>
        </div>
        
        <div className="flex flex-col justify-center items-center mt-2 sm:flex-row sm:justify-center">
          <div className="mr-0 mb-4 sm:mr-8 text-[0.5rem] sm:text-xs flex flex-col items-center sm:text-center">
            <span className="text-xs sm:text-sm">Click me!</span>
            <a href="https://give.smglobal.org/atlanta/">
              <Image src="/qr code.png" alt="QR Code" width={150} height={150} layout="fixed" />
            </a>
            <span className="text-xs xs:text-xs mt-1">Will direct you to the official website.</span>
          </div>

          <div className="text-[0.5rem] sm:text-xs">
            <span className="text-xs sm:text-sm">How to Donate</span>
            <ol className="text-xs xs:text-xs list-decimal list-inside mt-2 ml-0 sm:ml-5">
              <li>Click &apos;GIVE TO THAILAND MISSION&apos;</li>
              <li>Specify the giving amount and choose &apos;SM24 (ATL01 - THA) Seo, Yeoram&apos; (2nd to the last) on Purpose</li>
              <li>Write down personal information</li>
              <li>Donate via credit card or send money directly from your bank account</li>
              <li>Click &apos;Donate Now&apos; and you will be done!</li>
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
