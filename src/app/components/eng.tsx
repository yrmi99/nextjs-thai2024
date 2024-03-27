import Image from "next/image";

export default function Eng() {

  return (

    <div className="bg-white max-w-screen-lg w-80% p-5 m-auto border border-[#B3A369] flex flex-col">
      <Image
        src="/lightsys/Picture1.png"
        alt="LightSys 2024"
        width={0}
        height={0}
        style={{ width: "auto", height: "100%" }}
        layout="responsive"
      />
      <div className="w-full border border-b-[#B3A369] border-t-[#B3A369] border-l-white border-r-white flex justify-between">
        <span>Mission Trip Fundraiser Letter</span>
        <span>February 23, 2024</span>
      </div>

      <div className="mt-5">
        Shalom! Greetings from Sam, Andrew, Yeoram, and Christian!
      </div>
    
      <div className="mt-2">
        <span className="font-bold italic">Who are we?</span><br></br>
        <span>We are four undergraduate students studying Computer Science at the Georgia Institute of Technology. Importantly, we share a sincere love for Christ and a heart for missions. After careful thought and prayer, we have decided to dedicate our Spring Break to writing software for mission organizations. We write this letter in hopes that you will support our mission.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">Where are we going?</span><br></br>
        <span>From March 16 through March 23 we will be traveling to Colorado Springs to partake in a weeklong Code-a-Thon organized by LightSys, a non-profit organization whose vision is to fulfill the Great Commission (Matthew 28:19-20) “through the Spirit-led, strategic, and secure use of information and communication technologies.”</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">What will we do?</span><br></br>
        <span>During our week in Colorado, we will write software for SIL International, a non-profit evangelical Christian organization that documents, develops, and preserves languages for the purpose of Bible translation. SIL International has asked us to write a tool that will merge Bible Comprehension questions from Door43 with questions available in SIL International’s Transcelerator, a plugin for a popular Bible Translation application called Paratext. These comprehension questions are used by translation teams to ensure the quality, clarity, and accuracy of Bible translation.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">Why are we doing this?</span><br></br>
        <span>In Matthew 28:19-20, our Lord Jesus commands us to “go and make disciples of all nations” (emphasis added, NIV). We believe that it is the God-given duty of all Christians to uphold this command. However, we cannot make disciples of all nations without precise, accurate, and clear translations of the Bible in all languages. According to Wycliffe USA, the Bible has been partially translated to less than 50% of world languages, and only 10% have been translated completely. We hope to accelerate the process of translating the Bible into all languages and make the good news available to all nations through our efforts.</span>
      </div>

      <div className="mt-2">
        <span className="font-bold italic">Our Ask.</span><br></br>
        <span>As we prepare for this mission to serve God through software development, we recognize that our journey extends far beyond our individual efforts. Your support is vital in enabling us to carry out our mission effectively. More than anything, we need your financial support and especially your prayers. We humbly invite you to partner with us through your prayers.</span>
      </div>

      <div className="mt-4 w-full text-right">
        Sincerely yours in Christ,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
        Sam Lee, Andrew Woo, Yeoram Seo, Christian Auh
      </div>

      <div className="mt-12 w-4/5 italic text-center text-[#4472C4] m-auto border border-b-[#4472C4] border-t-[#4472C4] border-l-white border-r-white">
        “And this gospel of the kingdom will be preached in the whole <br></br>
        world as a testimony to all nations” &ndash; Matthew 24:14
      </div>

      <div className="mt-12 w-full">
        <span className="font-bold italic">Please pray...</span><br></br>
        <ol className="list-decimal list-inside mt-2 ml-5">
          <li>For the fulfillment of our financial needs,</li>
          <li>For adequate and diligent preparation before the trip,</li>
          <li>For our safety as we travel to Colorado Springs, Colorado,</li>
          <li>For knowledge and clear minds as we write code,</li>
          <li>For our work to be honoring and glorifying to God,</li>
          <li>For the translation of the Bible into all languages,</li>
          <li>For the evangelization of all peoples and all nations.</li>
        </ol>
      </div>

      <div className="mt-12 text-center">
        <span className="font-medium">Please support our mission by donating!</span><br></br>
        
        <div className="m-auto w-3/5 flex justify-around landscape:flex-row portrait:flex-col">
          <div className="mt-2 text-[0.5rem] flex flex-col">
            <span className="text-xs">Click me!</span>
            <a href="https://www.zellepay.com/qr-codes/?data=eyJ0b2tlbiI6IjkxNzMyNzMxMTIiLCJuYW1lIjoiQ0hSSVNUSUFOIn0="><Image src="/lightsys/QRZelle.png" alt="QR Code, Zelle" width={0} height={0} style={{ width: "100%", height: "auto" }} layout="responsive" /></a>
            <span>Donate via Zelle</span>
            <span className="mt-[-1em]">You must scan from your banking app.</span>
          </div>

          <div className="mt-2 text-[0.5rem] flex flex-col">
            <span className="text-xs">Click me!</span>
            <a href="https://www.venmo.com/u/c_auh"><Image src="/lightsys/QRVenmo.png" alt="QR Code, Venmo" width={0} height={0} style={{ width: "100%", height: "auto" }} layout="responsive" /></a>
            <span>Donate via Venmo</span>
            <span className="mt-[-1em]">Venmo direct to @c_auh</span>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full text-center">
        <span className="text-xs">Please contact Andrew Woo if you need tax documents.</span>
      </div>
      <div className="m-auto mt-2 flex justify-around landscape:w-3/5 landscape:flex-row portrait:flex-col text-center">
        <span className="text-xs">Email: <a href="mailto:wooandrew@gatech.edu">wooandrew@gatech.edu</a></span>
        <span className="text-xs">Phone #: (706) 363-2971</span>
      </div>
    </div>
    
  );
}