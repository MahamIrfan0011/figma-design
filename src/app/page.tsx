import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[rgba(4,56,115,1)] w-full min-h-screen">
      <Navbar />

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-10 lg:h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-start justify-center text-center lg:text-left lg:pl-28">
          <h2 className="text-[36px] lg:text-[64px] font-bold text-white mb-4 leading-tight">
            Get More Done <br className="hidden lg:block" /> with whitespace
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white max-w-full lg:w-[656px]">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <button className="bg-[rgba(79,156,249,1)] w-full sm:w-[219px] h-[63px] rounded-md flex items-center justify-center mt-8">
            <p className="text-[16px] lg:text-[18px] text-white">Try Whitespace free</p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>

        <div className="flex justify-center w-full mt-8">
          <Image
            src="/image-container.png"
            alt="container"
            width={824}
            height={549}
            className="object-contain w-full max-w-[400px] lg:max-w-[824px] h-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full px-6 lg:px-[140px] py-[100px] lg:py-[220px] bg-white">
        <div className="flex flex-col lg:flex-row gap-[40px] max-w-[1480px] mx-auto">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[36px] lg:text-[72px] font-bold mb-4">Project<br />Management</h1>
            <p className="text-[16px] lg:text-[18px] text-black mb-8">
              Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className="bg-[rgba(79,156,249,1)] w-full sm:w-[201px] h-[63px] rounded-md flex items-center justify-center">
              <p className="text-[16px] lg:text-[18px] text-white">Get Started</p>
              <span className="text-white text-xl ml-2">→</span>
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/image-container.png"
              alt="container"
              width={748}
              height={547}
              className="object-contain w-full max-w-[400px] lg:max-w-[748px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full flex flex-col lg:flex-row items-center bg-white px-6 lg:pl-44 pb-16">
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src="/work-image.png"
            alt="work together"
            width={710}
            height={661}
            className="object-contain w-full max-w-[400px] lg:max-w-[710px] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-[36px] lg:text-[72px] font-bold text-black text-center lg:text-left">
            Work together
          </h1>
          <p className="text-[16px] lg:text-[18px] text-black mt-4 text-center lg:text-left">
            With whitespace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[rgba(79,156,249,1)] w-[186px] h-[63px] rounded-md flex items-center justify-center mt-8">
              <p className="text-[16px] lg:text-[18px] text-white">Try it now</p>
              <span className="text-white text-xl ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col lg:flex-row gap-[40px] w-full max-w-[1480px] mx-auto bg-[rgba(4,56,115,1)] px-6 lg:px-[140px] py-[100px] lg:py-[220px]">
        <div className="w-full lg:w-1/2 text-white">
          <h1 className="text-[36px] lg:text-[72px] font-bold">Use as Extension</h1>
          <p className="text-[16px] lg:text-[18px] mt-4">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center mt-8">
            <p className="text-white">Let&apos;s Go</p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/image-container.png"
            alt="container"
            width={824}
            height={549}
            className="object-contain w-full max-w-[400px] lg:max-w-[824px] h-auto"
          />
        </div>
      </div>

      {/* Customisation Section */}
      <div className="w-full flex flex-col lg:flex-row items-center px-6 lg:px-[140px] py-[100px] bg-white">
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/image-container.png"
            alt="container"
            width={500}
            height={400}
            className="object-contain w-full max-w-[400px] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-[36px] lg:text-[72px] font-bold text-[rgba(33,37,41,1)]">Customise it to your needs</h1>
          <p className="text-[16px] lg:text-[18px] text-[rgba(33,37,41,1)] mt-4">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center mt-6">
            <p className="text-white">Let&apos;s Go</p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Global Access Section */}
      <div className="w-full px-6 lg:px-[140px] py-[100px] lg:py-[220px] bg-[rgba(4,56,115,1)] text-white text-center">
        <h1 className="text-[36px] lg:text-[72px] font-bold">Your work, everywhere you are</h1>
        <p className="text-[16px] lg:text-[18px] mt-4">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-[rgba(79,156,249,1)] w-[171px] h-[63px] rounded-md flex items-center justify-center">
            <p className="text-white">Try Taskey</p>
            <span className="text-white text-xl ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="w-full px-6 lg:px-[140px] py-[100px] bg-white flex flex-col items-center">
        <h1 className="text-[36px] lg:text-[72px] font-bold text-[rgba(33,37,41,1)] mb-6">Our sponsors</h1>
        <Image
          src="/sponsers.png"
          alt="sponsors"
          width={1482}
          height={71}
          className="object-contain w-full max-w-[1000px] h-auto"
        />
      </div>

      {/* Footer */}
      <div className="w-full px-6 lg:px-[140px] py-[100px] bg-[rgba(4,56,115,1)]">
        <div className="flex flex-col lg:flex-row gap-[40px] max-w-[1480px] mx-auto text-white">
          <div className="w-full lg:w-[295px]">
            <Image src="/logo 1.png" alt="Logo" width={191} height={34} />
            <p className="text-[16px] mt-4">
              whitespace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[18px]">Product</p>
            <p className="mt-2">Overview</p>
            <p className="mt-2">Pricing</p>
            <p className="mt-2">Customer stories</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[18px]">Resources</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Guides & tutorials</p>
            <p className="mt-2">Help center</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[18px]">Company</p>
            <p className="mt-2">About us</p>
            <p className="mt-2">Careers</p>
            <p className="mt-2">Media kit</p>
          </div>
        </div>
      </div>
    </div>
  );
}




