import svgPaths from "./svg-8530qfetjb";

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[400px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Search by facility name or contract ID...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14.0008 14L11.1074 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[24px] w-[400px]" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.16px] whitespace-pre">National University Hospital</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[205px]">Contract ID: NUH-2023-003</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[247px]">Period: 01/01/2023 - 31/12/2023</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[205px]">Branches: NUH Main Branch</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[108px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[108px] items-start relative w-full">
        <CardTitle />
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#e74c3c] h-[22px] relative rounded-[8px] shrink-0 w-[65.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[65.594px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Archived</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container1 />
      <Badge />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[164px] left-px pb-[31px] pt-[16px] px-[24px] top-[1.16px] w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[63.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Services:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">0</p>
      </div>
    </div>
  );
}

function ServiceManagement1() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Text />
      <Text1 />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white opacity-75 relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader />
      <ServiceManagement1 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.16px] whitespace-pre">{`KK Women's and Children's Hospital`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[203px]">Contract ID: KKH-2025-005</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[247px]">Period: 15/01/2025 - 10/02/2025</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[203px]">Branches: KKH Main Branch</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[108px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[108px] items-start relative w-full">
        <CardTitle1 />
        <Paragraph3 />
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#e74c3c] h-[22px] relative rounded-[8px] shrink-0 w-[65.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[65.594px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Archived</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container2 />
      <Badge1 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[164px] left-px pb-[31px] pt-[16px] px-[24px] top-[1.16px] w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[63.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Services:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function ServiceManagement3() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white opacity-75 relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader1 />
      <ServiceManagement3 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.16px] whitespace-pre">Changi General Hospital</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[203px]">Contract ID: CGH-2025-006</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[247px]">Period: 01/01/2025 - 25/01/2025</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.16px] w-[203px]">Branches: CGH Main Branch</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[108px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[108px] items-start relative w-full">
        <CardTitle2 />
        <Paragraph6 />
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e74c3c] h-[22px] relative rounded-[8px] shrink-0 w-[65.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[65.594px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Archived</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container3 />
      <Badge2 />
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[164px] left-px pb-[31px] pt-[16px] px-[24px] top-[1.16px] w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[63.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Services:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function ServiceManagement5() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white opacity-75 relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader2 />
      <ServiceManagement5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[245px] left-[24px] top-[84px] w-[2796px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

export default function ServiceManagement6() {
  return (
    <div className="relative size-full" data-name="ServiceManagement">
      <Container />
      <Container4 />
    </div>
  );
}