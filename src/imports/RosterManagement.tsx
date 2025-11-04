import svgPaths from "./svg-jznvvf3cqb";

function BreadcrumbLink() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbLink">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Operations</p>
      </div>
    </div>
  );
}

function BreadcrumbItem() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center relative w-full">
        <BreadcrumbLink />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BreadcrumbSeparator() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="BreadcrumbSeparator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[14px]">
        <Icon />
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-0 top-0 w-[87.875px]" data-name="PageHeader">
      <BreadcrumbItem />
      <BreadcrumbSeparator />
    </div>
  );
}

function BreadcrumbPage() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 whitespace-pre">Rostering</p>
      </div>
    </div>
  );
}

function BreadcrumbItem1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[97.88px] top-0 w-[59.438px]" data-name="BreadcrumbItem">
      <BreadcrumbPage />
    </div>
  );
}

function BreadcrumbList() {
  return (
    <div className="h-[20px] relative shrink-0 w-[157.312px]" data-name="BreadcrumbList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[157.312px]">
        <PageHeader />
        <BreadcrumbItem1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[157.312px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26px] relative w-[157.312px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[26px] left-0 not-italic text-[#2160ad] text-[26px] text-nowrap top-0 whitespace-pre">Rostering</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <BreadcrumbList />
      <Heading1 />
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="bg-[rgba(33,96,173,0.05)] h-[86px] relative shrink-0 w-[2844px]" data-name="PageHeader">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[86px] items-start pb-0 pl-[24px] pr-[2662.69px] pt-[16px] relative w-[2844px]">
        <Container />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[13.08px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.33301V3.99967" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.33301V3.99967" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb52d00} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66699H14" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <Icon2 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[37.08px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[5.58px] whitespace-pre">Sunday, June 1, 2025</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[280px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3e679600} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d520700} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12V8" id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 10L8 12L10 10" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[93.766px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[93.766px]">
        <Icon4 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[3.58px] whitespace-pre">Export</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[61px] relative shrink-0 w-[2844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[61px] items-start pb-px pt-[12px] px-[24px] relative w-[2844px]">
        <Container2 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[50px] relative shrink-0 w-[148.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2160ad] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50px] relative w-[148.438px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[4px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[12px] whitespace-pre">Ground Crew (Shift)</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[50px] relative shrink-0 w-[205.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50px] relative w-[205.594px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[4px] not-italic text-[#6a7282] text-[16px] text-nowrap top-[12px] whitespace-pre">Ground Crew (Office Hours)</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[50px] relative shrink-0 w-[87.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50px] relative w-[87.844px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[4px] not-italic text-[#6a7282] text-[16px] text-nowrap top-[12px] whitespace-pre">Operations</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[32px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[51px] relative shrink-0 w-[2844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[51px] items-start pb-px pt-0 px-[24px] relative w-[2844px]">
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">47</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Cases</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#2160ad] box-border content-stretch flex flex-col h-[90px] items-start left-0 pb-px pt-[17px] px-[17px] rounded-[10px] top-0 w-[543.391px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">12</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Open Cases</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#fb2c36] box-border content-stretch flex flex-col h-[90px] items-start left-[559.39px] pb-px pt-[17px] px-[17px] rounded-[10px] top-0 w-[543.406px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">0</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Staff Available</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#00bba7] box-border content-stretch flex flex-col h-[90px] items-start left-[1118.8px] pb-px pt-[17px] px-[17px] rounded-[10px] top-0 w-[543.391px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,187,167,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">23</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Cases Fulfilled</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#2b7fff] box-border content-stretch flex flex-col h-[90px] items-start left-[1678.19px] pb-px pt-[17px] px-[17px] rounded-[10px] top-0 w-[543.406px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Cancelled Cases</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#f6339a] box-border content-stretch flex flex-col h-[90px] items-start left-[2237.59px] pb-px pt-[17px] px-[17px] rounded-[10px] top-0 w-[543.406px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(246,51,154,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.45%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
            <path d={svgPaths.p19ed2c80} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.667px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-px w-[57.688px]" data-name="Text">
      <p className="font-['Lato:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">Warning:</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[17px] left-[57.69px] top-px w-[235.078px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c10007] text-[14px] top-[-1px] w-[236px]">There are 12 open cases not assigned</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[292.766px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[292.766px]">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Paragraph />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-red-50 h-[52px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff6467] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-br-[10px] rounded-tr-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[52px] items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative w-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80.234px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[80.234px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Shift Hours</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-[180px]">
        <PrimitiveSpan />
        <Icon6 />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.328px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[67.328px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">All Status</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-[140px]">
        <PrimitiveSpan1 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">Day View - May 5, 2025</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">Day Shift</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">08:00-11:00 • 4 cases</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-blue-500 h-[40px] left-[22px] rounded-[10px] top-[22px] w-[65.094px]" data-name="Text">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Open</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031006</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Francis Wilson</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[240.75px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 175 Made Street, Central</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[181.938px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">1st Stop: Central Hospital</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.469px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">One-way</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">08:30</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[155.219px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">{`A&E, Oxygen Support`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container34() {
  return (
    <div className="box-border gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[101px] pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[257px] items-start left-[22px] top-[78px] w-[642.25px]" data-name="Container">
      <Container27 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Text2 />
      <Container36 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-amber-500 h-[40px] left-[22px] rounded-[10px] top-[22px] w-[181.297px]" data-name="Text">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Pending for Dispatch</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031005</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Michael Chan</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[180.25px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 435 Oak Avenue</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[199.875px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">{`1st Stop: St. Mary's Hospital`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.188px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Two-way</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">10:15</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[135.516px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Wheelchair Access</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container45() {
  return (
    <div className="box-border gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[101px] pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
      <Container41 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[257px] items-start left-[22px] top-[78px] w-[642.25px]" data-name="Container">
      <Container38 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Text13 />
      <Container47 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-amber-500 h-[40px] left-[22px] rounded-[10px] top-[22px] w-[91.938px]" data-name="Text">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Assigned</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031007</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Francis Wilson</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[172.188px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 782 Pine Street</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[185.75px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">1st Stop: General Hospital</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.281px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Three-way</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">11:00</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text31 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.438px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Cardiac Monitor</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text33 />
      <Text34 />
    </div>
  );
}

function Container56() {
  return (
    <div className="box-border gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[101px] pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
      <Container52 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[257px] items-start left-[22px] top-[78px] w-[642.25px]" data-name="Container">
      <Container49 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Text24 />
      <Container58 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-emerald-500 h-[40px] left-[22px] rounded-[10px] top-[22px] w-[106.703px]" data-name="Text">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Completed</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031008</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Robert Davis</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[162.938px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 221 Elm Drive</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[207.812px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">1st Stop: City Medical Center</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.469px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">One-way</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">08:45</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Standard Transport</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Container67() {
  return (
    <div className="box-border gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[101px] pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[257px] items-start left-[22px] top-[78px] w-[642.25px]" data-name="Container">
      <Container60 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Text35 />
      <Container69 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute bg-emerald-500 h-[40px] left-[22px] rounded-[10px] top-[22px] w-[106.703px]" data-name="Text">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Completed</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031009</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Robert Davis</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[162.938px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 221 Elm Drive</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text47 />
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[207.812px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">1st Stop: City Medical Center</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text49 />
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.469px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">One-way</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text51 />
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">08:45</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text53 />
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Standard Transport</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-start justify-between relative shrink-0" data-name="Container">
      <Text55 />
      <Text56 />
    </div>
  );
}

function Container78() {
  return (
    <div className="box-border gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[101px] pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
      <Container74 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[257px] items-start left-[22px] top-[78px] w-[642.25px]" data-name="Container">
      <Container71 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Text46 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[726px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container48 />
      <Container59 />
      <Container70 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[798px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container26 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">11:00-14:00 • 2 cases</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="bg-blue-500 h-[40px] relative rounded-[10px] shrink-0 w-[65.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[65.094px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_8.34%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.833333 4.16667V0.833333" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.34%]" data-name="Vector">
        <div className="absolute inset-[-0.833px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text57 />
      <Button7 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031019</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Sarah Johnson</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[236.219px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 123 Main Street, Central</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[181.938px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">1st Stop: Central Hospital</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text60 />
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.469px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">One-way</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[13px] w-[502.594px]" data-name="Container">
      <Text62 />
      <Text63 />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">12:30</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[45px] w-[502.594px]" data-name="Container">
      <Text64 />
      <Text65 />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[155.219px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">{`A&E, Oxygen Support`}</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[77px] w-[502.594px]" data-name="Container">
      <Text66 />
      <Text67 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[257px] items-start relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[357px] items-start left-0 pb-[2px] pt-[22px] px-[22px] rounded-[16px] top-0 w-[546.594px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Container85 />
      <Container95 />
    </div>
  );
}

function Text68() {
  return (
    <div className="bg-amber-500 h-[40px] relative rounded-[10px] shrink-0 w-[181.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[181.297px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-[12px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[0.4px] whitespace-pre">Pending for Dispatch</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_8.34%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.833333 4.16667V0.833333" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.34%]" data-name="Vector">
        <div className="absolute inset-[-0.833px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text68 />
      <Button8 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">#2026031018</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Patient: Michael Chan</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">📍</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[180.25px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">Pick-up: 456 Oak Avenue</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text69 />
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute h-[28px] left-0 top-[4px] w-[21px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#2160ad] text-[18px] text-nowrap top-0 whitespace-pre">🏥</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute h-[24px] left-[29px] top-0 w-[199.875px]" data-name="Text">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 whitespace-pre">{`1st Stop: St. Mary's Hospital`}</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text71 />
      <Text72 />
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.734px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Service Type:</p>
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.188px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Two-way</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[13px] w-[502.594px]" data-name="Container">
      <Text73 />
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.484px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Start Time:</p>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.375px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-0 whitespace-pre">13:15</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[45px] w-[502.594px]" data-name="Container">
      <Text75 />
      <Text76 />
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[102.719px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 whitespace-pre">Requirements:</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[135.516px]">
        <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Wheelchair Access</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-[77px] w-[502.594px]" data-name="Container">
      <Text77 />
      <Text78 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container100 />
      <Container101 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[257px] items-start relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container106 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[357px] items-start left-[558.59px] pb-[2px] pt-[22px] px-[22px] rounded-[16px] top-0 w-[546.594px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Container97 />
      <Container107 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[357px] relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[397px] items-start relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1267px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container83 />
      <Container110 />
    </div>
  );
}

function GroundCrewShiftDayView() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1517px] items-start relative shrink-0 w-full" data-name="GroundCrewShiftDayView">
      <Container21 />
      <Container24 />
      <Container25 />
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[2844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pl-[24px] pr-[39px] pt-[24px] relative rounded-[inherit] w-[2844px]">
        <GroundCrewShiftDayView />
      </div>
    </div>
  );
}

export default function RosterManagement() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="RosterManagement">
      <PageHeader1 />
      <Container3 />
      <Container5 />
      <Container112 />
    </div>
  );
}