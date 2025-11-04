import svgPaths from "./svg-wxcyt0nanj";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[249.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[249.609px]">
        <Icon />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[44px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[5.58px] whitespace-pre">Back to Archived Contracts</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#6a7282] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Archived</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gray-100 h-[36px] relative rounded-[10px] shrink-0 w-[103.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center px-[16px] py-0 relative w-[103.531px]">
        <Container />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">Contract Overview</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(33,96,173,0.05)] h-[60px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[60px] items-start pb-px pt-[16px] px-[24px] relative w-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Facility Name</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Changi General Hospital</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Label />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Contract ID</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">CGH-2025-006</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Label1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Contract Period</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">01/01/2025 - 25/01/2025</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Label2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Branches</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">CGH Main Branch</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Label3 />
      <Paragraph3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[120px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb95e00} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e1d6700} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 2.84666L11 6.27999" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[78.688px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Trip Services</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[#2160ad] text-[24px] text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_1] bg-blue-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container9 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[104.797px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Support Services</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[#008236] text-[24px] text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_2] bg-green-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container11 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[101.594px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Add-on Services</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[#8200db] text-[24px] text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_3] bg-purple-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-purple-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container13 />
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[118.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[118.266px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Additional Charges</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text4 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-0 not-italic text-[#ca3500] text-[24px] text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_4] bg-orange-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffedd4] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container15 />
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="box-border gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[107px] pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[291px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[291px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container8 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[353px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[353px] items-start p-px relative w-full">
          <Container3 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">Trip Services</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex flex-col h-[60px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[2779px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Service Type</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">One-Way Trip</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <Label4 />
      <Paragraph8 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Office Hours Rate</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <Label5 />
      <Paragraph9 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Non-Office Hours Rate</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <Label6 />
      <Paragraph10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-gray-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Service Type</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Three-Way Trip</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <Label7 />
      <Paragraph11 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Office Hours Rate</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <Label8 />
      <Paragraph12 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Non-Office Hours Rate</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <Label9 />
      <Paragraph13 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-gray-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[25px] top-[85px] w-[2731px]" data-name="Container">
      <Container25 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[286px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container20 />
      <Container31 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">Support Services</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex flex-col h-[60px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[2779px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading6 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Service Name</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <Label10 />
      <Paragraph14 />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Office Hours Rate</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <Label11 />
      <Paragraph15 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Non-Office Hours Rate</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <Label12 />
      <Paragraph16 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-gray-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[25px] top-[85px] w-[2731px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container38 key={i} />
      ))}
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[286px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container33 />
      <Container44 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">Add-on Services</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex flex-col h-[60px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[2779px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading7 />
    </div>
  );
}

function Label16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Service Name</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <Label16 />
      <Paragraph20 />
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Office Hours Rate</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <Label17 />
      <Paragraph21 />
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Non-Office Hours Rate</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <Label18 />
      <Paragraph22 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-gray-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[25px] top-[85px] w-[2731px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container51 key={i} />
      ))}
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white h-[286px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container46 />
      <Container57 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">Additional Charges</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex flex-col h-[60px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[2779px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading8 />
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Charge Name</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <Label22 />
      <Paragraph26 />
    </div>
  );
}

function Label23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Amount</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <Label23 />
      <Paragraph27 />
    </div>
  );
}

function Label24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Frequency</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">N/A</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <Label24 />
      <Paragraph28 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-gray-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[25px] top-[85px] w-[2731px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container64 key={i} />
      ))}
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[286px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container59 />
      <Container70 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#7b3306] text-[16px] text-nowrap top-0 whitespace-pre">Archived Contract - Read Only</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#bb4d00] text-[14px] text-nowrap top-0 whitespace-pre">This contract has been archived and cannot be edited. All information is displayed for reference purposes only.</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[32px] top-0 w-[682.062px]" data-name="Container">
      <Heading4 />
      <Paragraph32 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-amber-50 h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container73 />
        </div>
      </div>
    </div>
  );
}

export default function ServiceArchivedContractView() {
  return (
    <div className="relative size-full" data-name="ServiceArchivedContractView">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container2 />
          <Container19 />
          <Container32 />
          <Container45 />
          <Container58 />
          <Container71 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}