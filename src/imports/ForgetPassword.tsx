import imgImageImAmbulanceServices from "figma:asset/100ba6f12fb759890fda90a21d3c02ec8fb5a11a.png";

function ImageImAmbulanceServices() {
  return (
    <div className="relative shrink-0 size-[383.986px]" data-name="Image (IM Ambulance Services)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageImAmbulanceServices} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[383.986px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[959.541px] items-center justify-center left-0 top-0 w-[869.252px]" data-name="Container">
      <ImageImAmbulanceServices />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#99a1af] blur-xl filter left-[32px] opacity-30 rounded-[3.96025e+07px] size-[95.987px] top-[32px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#6a7282] blur-2xl filter left-[693.28px] opacity-20 rounded-[3.96025e+07px] size-[127.983px] top-[783.57px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[31.977px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-[160.38px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Forgot Password?</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Enter your email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[50.308px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div aria-hidden="true" className="absolute border-[1.18px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.985px] h-[78.284px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <EmailInput />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24.011px] left-[224.04px] top-0 w-[43.005px]" data-name="Button">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#4a90e2] text-[16px] text-nowrap top-[0.36px] whitespace-pre">Log In</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24.011px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[138.94px] not-italic text-[#4a5565] text-[14px] text-center top-[2.54px] translate-x-[-50%] w-[172px]">Remember your password?</p>
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#2160ad] h-[47.984px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#1a4d8f] w-full" data-name="Button">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[159.7px] not-italic text-[16px] text-center text-nowrap text-white top-[12.35px] translate-x-[-50%] whitespace-pre">Verify</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[23.992px] h-[198.263px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Paragraph />
      <Button1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[31.996px] h-[326.228px] items-start left-[242.63px] pb-0 pt-[31.996px] px-[31.996px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[316.66px] w-[383.986px]" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-b from-[#2160ad] h-[959.541px] left-[869.25px] to-[#1a4d8f] top-0 w-[869.252px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container5 />
    </div>
  );
}

export default function ForgetPassword() {
  return (
    <div className="bg-white relative size-full" data-name="Forget Password">
      <Container />
      <Container6 />
    </div>
  );
}