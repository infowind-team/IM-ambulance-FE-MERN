import svgPaths from "./svg-bmr3lmz0qv";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2160ad] h-[36px] left-[2607.97px] rounded-[8px] top-0 w-[188.031px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[44px] not-italic text-[16px] text-nowrap text-white top-[5.58px] whitespace-pre">Add New Contract</p>
    </div>
  );
}

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

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[400px]" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Singapore General Hospital</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[201px]">Contract ID: SGH-2025-001</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[247px]">Period: 01/01/2025 - 31/12/2025</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[406px]">Branches: SGH - Outram, SGH - Block 6 Specialist Centre</p>
    </div>
  );
}

function Container2() {
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
    <div className="bg-green-500 h-[22px] relative rounded-[8px] shrink-0 w-[52.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container2 />
      <Badge />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[155px] left-px pb-[31px] pt-[16px] px-[24px] top-px w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[94.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[94.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Trip Services:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.875px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Support Services:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[120.219px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Add-on Services:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[139.281px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Additional Charges:</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function ServiceManagement1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[132px] items-start left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader />
      <ServiceManagement1 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Mount Elizabeth Hospital</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[205px]">Contract ID: MEH-2025-002</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[247px]">Period: 01/02/2025 - 31/01/2026</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[205px]">Branches: MEH Main Branch</p>
    </div>
  );
}

function Container7() {
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
    <div className="bg-green-500 h-[22px] relative rounded-[8px] shrink-0 w-[52.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container7 />
      <Badge1 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[155px] left-px pb-[31px] pt-[16px] px-[24px] top-px w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement2 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[94.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[94.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Trip Services:</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.875px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Support Services:</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[120.219px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Add-on Services:</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[139.281px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Additional Charges:</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function ServiceManagement3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[132px] items-start left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader1 />
      <ServiceManagement3 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Tan Tock Seng Hospital</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[208px]">Contract ID: TTSH-2025-004</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[247px]">Period: 01/03/2025 - 28/02/2026</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 w-[208px]">Branches: TTSH Main Branch</p>
    </div>
  );
}

function Container12() {
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
    <div className="bg-green-500 h-[22px] relative rounded-[8px] shrink-0 w-[52.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ServiceManagement4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="ServiceManagement">
      <Container12 />
      <Badge2 />
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[108px_minmax(0px,_1fr)] h-[155px] left-px pb-[31px] pt-[16px] px-[24px] top-px w-[914px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <ServiceManagement4 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[94.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[94.047px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Trip Services:</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.875px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Support Services:</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[120.219px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Add-on Services:</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[139.281px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Additional Charges:</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.281px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function ServiceManagement5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[132px] items-start left-[25px] top-[196px] w-[866px]" data-name="ServiceManagement">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardHeader2 />
      <ServiceManagement5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[353px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

export default function ServiceManagement6() {
  return (
    <div className="relative size-full" data-name="ServiceManagement">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container1 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}