import imgImageImAmbulanceServices from "../assets/100ba6f12fb759890fda90a21d3c02ec8fb5a11a.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function ImageImAmbulanceServices() {
  return (
    <div className="relative shrink-0 size-[383.986px]" data-name="Image (IM Ambulance Services)">
      <img 
        alt="IM Ambulance Services"
        className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImageImAmbulanceServices.src as string}
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[383.986px]" />
    </div>
  );
}

export default  function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col md:flex-row" data-name="Login">
      {/* Left Panel - Logo (Hidden on mobile, shown on desktop) */}
      <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center" data-name="Container">
        <ImageImAmbulanceServices />
      </div>

      {/* Right Panel - Auth Form */}
      <div className="relative flex-1 md:w-1/2 bg-gradient-to-b from-[#2160ad] to-[#1a4d8f] flex items-center justify-center p-8" data-name="Container">
        {/* Decorative blur elements */}
        <div className="absolute bg-[#99a1af] blur-xl filter left-[32px] opacity-30 rounded-[3.96025e+07px] size-[95.987px] top-[32px]" data-name="Container" />
        <div className="absolute bg-[#6a7282] blur-2xl filter right-[32px] opacity-20 rounded-[3.96025e+07px] size-[127.983px] bottom-[32px]" data-name="Container" />
        
        {/* Logo for mobile (shown above card) */}
        <div className="absolute top-8 md:hidden">
          <div className="relative size-[200px]">
            <img 
              alt="IM Ambulance Services" 
              className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgImageImAmbulanceServices.src as string}
            />
          </div>
        </div>

        {/* Auth Card */}
        <div className="relative z-10 w-full max-w-[383.986px] mt-[220px] md:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
