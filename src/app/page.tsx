import Navbar from './components/Navbar'; // Make sure the path is correct
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[rgba(4,56,115,1)] w-full min-h-screen">
      <Navbar />

      {/* First Section */}
      <div className="flex items-center justify-between h-[calc(100vh-4rem)] px-10">
        {/* Left content */}
        <div className="flex flex-col items-start justify-center pl-28 mt-8">
          <h2 className="font-sans text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] text-white mb-2">
            Get More Done <br />with whitespace
          </h2>
          <p className="w-[656px] text-[18px] font-sans font-normal leading-[30px] tracking-[-0.02em] text-white">
            Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks
          </p>
          <button className="bg-[rgba(79,156,249,1)] w-[219px] h-[63px] rounded-md flex items-center justify-center mt-12">
            <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
              Try Whitespace free
            </p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full mt-8 ml-[-40px]">
          <Image
            src="/image-container.png"
            alt="container"
            width={824}
            height={549}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full px-[140px] py-[220px] bg-white">
        <div className="flex flex-col lg:flex-row gap-[60px] w-full max-w-[1480px] mx-auto">
          {/* Left text content */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-4">
              Project<br />Management
            </h1>
            <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-black mb-8">
              Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className="bg-[rgba(79,156,249,1)] w-[201px] h-[63px] rounded-md flex items-center justify-center">
              <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
                Get Started
              </p>
              <span className="text-white text-xl ml-2">→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image
              src="/image-container.png"
              alt="container"
              width={748}
              height={547}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full flex bg-white pl-44 pb-16">
        <Image
          src="/work-image.png"
          alt="work together"
          width={710}
          height={661}
          className="max-w-[400px] h-auto object-contain"
        />
        <div className="w-[670px] h-[294px] gap-[60px]">
          <div className="w-[670px] h-[171px] gap-[24px]">
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-black pl-12 mt-24">
              Work together
            </h1>
            <p className="w-[670px] h-[60px] font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] pl-8 ml-6">
              With whitespace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="bg-[rgba(79,156,249,1)] w-[186px] h-[63px] rounded-md flex items-center justify-center ml-14 mt-8">
              <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
                Try it now
              </p>
              <span className="text-white text-xl ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col lg:flex-row gap-[60px] w-full max-w-[1480px] mx-auto bg-[rgba(4, 56, 115, 1)] px-[140px] py-[220px]">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-white">
          <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%]">
            Use as Extension
          </h1>
          <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%]">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center mt-8">
            <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
              Let's Go
            </p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/image-container.png"
            alt="container"
            width={824}
            height={549}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
      <div className='w-[1921px] h-[812.09px] px-[140px] py-[220px] bg-white flex items-center'>
      <div className="lg:w-1/2 flex justify-start mt-16">
    <Image
      src="/image-container.png"
      alt="container"
      width={500}  // Adjust the width to make it smaller
      height={400} // Adjust the height accordingly
      className="object-contain max-w-full h-auto"
    />
  </div>
        <div className='w-full px-[140px] py-[220px] bg-white'>
          <div className='w-[669px] h-[288px] gap-[24px]'>
            <div className='w-[699px] h-[174px] ml-[-120]'>
              <h1 className='font-sans font-bold text-[72px] leading-[1.1] tracking-[-2%] text-[rgba(33, 37, 41, 1)]'>
              Customise it to<br />your needs
               </h1>
               <p className='font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] text-[rgba(33, 37, 41, 1)] mt-6'>
               Customise the app with plugins, custom themes and multiple text editors (Rich<br />Text or Markdown). Or create your own scripts and plugins using the Extension<br />API.
               </p>
               <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center mt-2">
            <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
              Let's Go
            </p>
            <span className="text-white text-xl ml-2">→</span>
          </button>

            </div>
          </div>
        </div>
      </div>
      <div className='w-[1921px] h-[574px] px-[140px] py-[220px] bg-[rgba(4, 56, 115, 1)]'>
  <div className='w-[1064px] h-[171px] gap-[24px]'>
    <div className='w-full h-[87px]'>
      <h1 className='font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-white'>
        Your work, everywhere you are
      </h1>

      <p className='font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] text-center text-white mt-4'>
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>

      <div className="flex justify-center mt-6">
        <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center">
          <p className="text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-white text-center">
            Try Taskey
          </p>
          <span className="text-white text-xl ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
</div>
<div className='w-full h-[538px] px-[140px] py-[220px] bg-white flex flex-col justify-center items-center'>
  <h1 className='font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[rgba(33, 37, 41, 1)] mb-8'>
    Our sponsors
  </h1>
  <div className="flex justify-center w-full mt-10">
    <Image
      src="/sponsers.png"
      alt="sponsors"
      width={1482}
      height={71}
      className="max-w-full h-auto object-contain"
    />
  </div>
</div>
<div className="w-full h-[461px] pt-[140px] py-[220px] pb-[32px] gap-[200px] bg-[rgba(4, 56, 115, 1)]">
  <div className="w-[1480px] h-[289px] flex flex-col lg:flex-row gap-[100px] items-start mx-auto">
    
    {/* Logo and description */}
    <div className="w-[295px] h-[169px] gap-[15px] flex flex-col pl-24">
      <Image src="/logo 1.png" alt="Logo" width={191} height={34} />
      <p className="w-[240px] h-[120px] font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] text-white">
        whitepace was created for the new ways we live and work. We make a better workspace around the world.
      </p>
    </div>

    {/* Product section */}
    <div className="flex flex-col gap-2 pl-20 ">
      <p className="font-sans font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white">
        Product
      </p>
      <p className='font-sans font-noraml text-[16px] leading-[20px] tracking-[-2%] text-custom-yellow mt-2'>
      Overview
      </p>
      <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
      Pricing
      </p>
      <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
      Customer stories
      </p>
      </div>
      <div className="flex flex-col gap-2 pl-20 ">
        <p className='font-sans font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white'>
        Resources
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        Blog
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        Guides & tutorials
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        Help center
        </p>
      </div>
      <div className="flex flex-col gap-2 pl-20 ">
      <p className='font-sans font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white'>
      Company
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        About us
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        Careers
        </p>
        <p className='font-sans font-normal text-[16px] leading-[20px] tracking-[-2%] text-white mt-2'>
        Media kit
        </p>
      </div>
  </div>
</div>

  
</div>


);
}




