import svgPaths from "./svg-dsdrmtu0x5";

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center left-[24px] px-[17px] py-[9px] rounded-[8px] top-[16px] w-[163.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Lato:Medium',sans-serif] leading-[22.857px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">{`< Back to Services`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_86_1205)" id="Icon">
          <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28d5c000} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 5H11.6673" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 8.3335H11.6673" id="Vector_5" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 11.6665H11.6673" id="Vector_6" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 15H11.6673" id="Vector_7" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_86_1205">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.125px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[178.125px]">
        <Icon />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Contract Information</p>
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Healthcare Facility Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[40px] left-0 rounded-[8px] top-0 w-[1357.5px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[1357.5px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Search or enter healthcare facility name</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[1321.5px] rounded-[8px] top-0 w-[36px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button1 />
    </div>
  );
}

function SearchableFacilityInput() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="SearchableFacilityInput">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Contract ID</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter contract ID</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Contract Start Date</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Contract End Date</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function EnhancedAddContract() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[2731px]" data-name="EnhancedAddContract">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-full relative w-[2731px]">
        <SearchableFacilityInput />
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[260px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[260px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <CardTitle />
          <EnhancedAddContract />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_86_1205)" id="Icon">
          <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28d5c000} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 5H11.6673" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 8.3335H11.6673" id="Vector_5" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 11.6665H11.6673" id="Vector_6" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 15H11.6673" id="Vector_7" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_86_1205">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[2731px]" data-name="CardTitle">
      <Icon2 />
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Contract Documents</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[1315.5px] size-[32px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p837ff00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p779f98} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p28d96f80} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.334 8H18.6673" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.334 13.3335H18.6673" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.334 18.6665H18.6673" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.334 24H18.6673" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[2663px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[1331.83px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Drag and drop files here</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[20px] left-0 top-[72px] w-[2663px]" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[1331.5px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">or click to browse files</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[100px] w-[2663px]" data-name="Container">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Supports PDF, DOC, DOCX, XLS, XLSX, TXT files</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function EnhancedAddContract1() {
  return (
    <div className="h-[184px] relative rounded-[10px] shrink-0 w-full" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[184px] items-start pb-[2px] pt-[34px] px-[34px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function EnhancedAddContract2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="EnhancedAddContract">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Upload contract documents, terms of service, or other relevant files</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[244px] items-start left-px px-[24px] py-0 top-[75px] w-[2779px]" data-name="CardContent">
      <EnhancedAddContract1 />
      <EnhancedAddContract2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[320px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <CardContent />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e4dcf80} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[166.125px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[166.125px]">
        <Icon4 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Branch Information</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[129.125px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[129.125px]">
        <Icon5 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[16px] text-neutral-950 text-nowrap top-[3.58px] whitespace-pre">Add Branch</p>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute box-border content-stretch flex h-[56px] items-center justify-between left-px px-[24px] py-0 top-px w-[2779px]" data-name="CardHeader">
      <CardTitle2 />
      <Button2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[63.313px]" data-name="Heading 4">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] top-0 w-[64px]">Branch 1</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Branch Name</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter branch name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel4 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Postal Code</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter postal code</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel5 />
      <Input5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] left-[17px] top-[57px] w-[2697px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Address</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f3f5] h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[80px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter complete address</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[112px] items-start left-[17px] top-[145px] w-[2697px]" data-name="Container">
      <PrimitiveLabel6 />
      <Textarea />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Contact Person</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Contact person name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-0 top-0 w-[888.328px]" data-name="Container">
      <PrimitiveLabel7 />
      <Input6 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Phone Number</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">e.g., +65 6225 5554</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-[904.33px] top-0 w-[888.328px]" data-name="Container">
      <PrimitiveLabel8 />
      <Input7 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Email</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">contact@healthcare.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-[1808.66px] top-0 w-[888.328px]" data-name="Container">
      <PrimitiveLabel9 />
      <Input8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[72px] left-[17px] top-[273px] w-[2697px]" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function EnhancedAddContract3() {
  return (
    <div className="absolute h-[362px] left-[25px] rounded-[10px] top-[81px] w-[2731px]" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading4 />
      <Container10 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[468px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <EnhancedAddContract3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66602 1.6665V4.99984" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 1.6665V4.99984" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.922px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[117.922px]">
        <Icon6 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Trip Services</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_86_1201)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pf88ab00} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_86_1201">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[163.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2160ad] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[163.016px]">
        <Icon7 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[3.58px] whitespace-pre">Configure Hours</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#2160ad] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon8 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[34px] not-italic text-[16px] text-nowrap text-white top-[3.58px] whitespace-pre">Add Trip Service Line</p>
      </div>
    </div>
  );
}

function EnhancedAddContract4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[364.234px]" data-name="EnhancedAddContract">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-start relative w-[364.234px]">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute box-border content-stretch flex h-[56px] items-center justify-between left-px px-[24px] py-0 top-px w-[2779px]" data-name="CardHeader">
      <CardTitle3 />
      <EnhancedAddContract4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Trip Service</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[24px] left-[452.16px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Office Hours</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24px] left-[904.33px] top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Non-Office Hours</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[24px] left-[1356.48px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">{`Weekend & PH`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24px] left-[1808.66px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Active</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[24px] left-[2260.83px] top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Actions</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Input9() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.156px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[436.156px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter trip type</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan() {
  return <div className="absolute bg-white left-[15px] rounded-[3.35544e+07px] size-[16px] top-[1.19px]" data-name="Primitive.span" />;
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[#030213] h-[18.391px] left-[1808.66px] rounded-[3.35544e+07px] top-[8.81px] w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <PrimitiveSpan />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_86_1163)" id="Icon">
          <path d={svgPaths.pd326a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ab2a700} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_86_1163">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[2260.83px] rounded-[8px] size-[32px] top-[4px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Input10() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.172px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.172px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[40px] left-[452.16px] top-0 w-[436.172px]" data-name="Container">
      <Input10 />
      <Text />
    </div>
  );
}

function Input11() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.156px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.156px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[40px] left-[904.33px] top-0 w-[436.156px]" data-name="Container">
      <Input11 />
      <Text1 />
    </div>
  );
}

function Input12() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.172px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.172px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[40px] left-[1356.48px] top-0 w-[436.172px]" data-name="Container">
      <Input12 />
      <Text2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Input9 />
      <PrimitiveButton />
      <Button5 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function EnhancedAddContract5() {
  return (
    <div className="absolute bg-[rgba(61,61,61,0.03)] box-border content-stretch flex flex-col gap-[16px] h-[131px] items-start left-[25px] pb-px pt-[17px] px-[17px] rounded-[10px] top-[81px] w-[2731px]" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container22 />
      <Container26 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[237px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader1 />
      <EnhancedAddContract5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_86_1205)" id="Icon">
          <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28d5c000} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 5H11.6673" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 8.3335H11.6673" id="Vector_5" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 11.6665H11.6673" id="Vector_6" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 15H11.6673" id="Vector_7" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_86_1205">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.766px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[147.766px]">
        <Icon10 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Support Services</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#2160ad] h-[32px] relative rounded-[8px] shrink-0 w-[223.547px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[223.547px]">
        <Icon11 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[34px] not-italic text-[16px] text-nowrap text-white top-[3.58px] whitespace-pre">Add Support Service Line</p>
      </div>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute box-border content-stretch flex h-[56px] items-center justify-between left-px px-[24px] py-0 top-px w-[2779px]" data-name="CardHeader">
      <CardTitle4 />
      <Button6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Service Type</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[24px] left-[452.16px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Office Hours</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[24px] left-[904.33px] top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Non-Office Hours</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[24px] left-[1356.48px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">{`Weekend & PH`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[24px] left-[1808.66px] top-0 w-[436.172px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Active</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[24px] left-[2260.83px] top-0 w-[436.156px]" data-name="Container">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#29384d] text-[16px] text-nowrap top-0 whitespace-pre">Actions</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Input13() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.156px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[436.156px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Enter service type</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan1() {
  return <div className="absolute bg-white left-[15px] rounded-[3.35544e+07px] size-[16px] top-[1.19px]" data-name="Primitive.span" />;
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[#030213] h-[18.391px] left-[1808.66px] rounded-[3.35544e+07px] top-[8.81px] w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <PrimitiveSpan1 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_86_1163)" id="Icon">
          <path d={svgPaths.pd326a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ab2a700} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_86_1163">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[2260.83px] rounded-[8px] size-[32px] top-[4px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Input14() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.172px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.172px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[40px] left-[452.16px] top-0 w-[436.172px]" data-name="Container">
      <Input14 />
      <Text3 />
    </div>
  );
}

function Input15() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.156px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.156px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[40px] left-[904.33px] top-0 w-[436.156px]" data-name="Container">
      <Input15 />
      <Text4 />
    </div>
  );
}

function Input16() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[8px] top-0 w-[436.172px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip pl-[32px] pr-[12px] py-[4px] relative rounded-[inherit] w-[436.172px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[8px] w-[9.281px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-0 whitespace-pre">$</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[40px] left-[1356.48px] top-0 w-[436.172px]" data-name="Container">
      <Input16 />
      <Text5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Input13 />
      <PrimitiveButton1 />
      <Button7 />
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function EnhancedAddContract6() {
  return (
    <div className="absolute bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[16px] h-[131px] items-start left-[25px] pb-px pt-[17px] px-[17px] rounded-[10px] top-[81px] w-[2731px]" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container33 />
      <Container37 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[237px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader2 />
      <EnhancedAddContract6 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16602 10H15.8327" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[144.109px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[144.109px]">
        <Icon13 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Add-on Services</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[130.891px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[130.891px]">
        <Icon14 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[16px] text-neutral-950 text-nowrap top-[3.58px] whitespace-pre">Add Service</p>
      </div>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="absolute box-border content-stretch flex h-[56px] items-center justify-between left-px px-[24px] py-0 top-px w-[2779px]" data-name="CardHeader">
      <CardTitle5 />
      <Button8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[122.234px]" data-name="Heading 4">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] top-0 w-[123px]">Add-on Service 1</p>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Service Name</p>
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">e.g., Oxygen</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel10 />
      <Input17 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Unit</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Litre</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel11 />
      <Input18 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] left-[17px] top-[57px] w-[2697px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.5px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[91.5px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Pricing Rules</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[110.516px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[110.516px]">
        <Icon15 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[16px] text-neutral-950 text-nowrap top-[3.58px] whitespace-pre">Add Rule</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel12 />
      <Button9 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[20px] left-[12px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Pricing Rule</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-[549.8px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[67px]">Unit (Litre)</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-[1087.59px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Amount Per Unit</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[20px] left-[1625.39px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Active</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[20px] left-[2163.19px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Actions</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[223.344px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[223.344px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">First (Fixed cost for initial units)</p>
      </div>
    </div>
  );
}

function Icon16() {
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

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[40px] items-center justify-between left-[12px] px-[13px] py-px rounded-[8px] top-[12px] w-[521.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan2 />
      <Icon16 />
    </div>
  );
}

function Input19() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[40px] left-[549.8px] rounded-[8px] top-[12px] w-[521.797px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[521.797px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input20() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[9.281px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">$</p>
      </div>
    </div>
  );
}

function Icon17() {
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

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative w-[80px]">
        <PrimitiveSpan3 />
        <Icon17 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[1087.59px] top-[12px] w-[521.797px]" data-name="Container">
      <Input20 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex h-[18.391px] items-center left-[1625.39px] pl-[15px] pr-px py-px rounded-[3.35544e+07px] top-[22.8px] w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <PrimitiveSpan4 />
    </div>
  );
}

function Container49() {
  return <div className="absolute h-[40px] left-[2163.19px] top-[12px] w-[521.797px]" data-name="Container" />;
}

function Container50() {
  return (
    <div className="bg-gray-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <Input19 />
      <Container48 />
      <PrimitiveButton4 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[144px] items-start left-[17px] top-[145px] w-[2697px]" data-name="Container">
      <Container41 />
      <Container51 />
    </div>
  );
}

function EnhancedAddContract7() {
  return (
    <div className="absolute h-[306px] left-[25px] rounded-[10px] top-[81px] w-[2731px]" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading5 />
      <Container40 />
      <Container52 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[412px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader3 />
      <EnhancedAddContract7 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[163.156px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[163.156px]">
        <Icon18 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[2px] whitespace-pre">Additional Charges</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[129.453px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[129.453px]">
        <Icon19 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[35px] not-italic text-[16px] text-neutral-950 text-nowrap top-[3.58px] whitespace-pre">Add Charge</p>
      </div>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="absolute box-border content-stretch flex h-[56px] items-center justify-between left-px px-[24px] py-0 top-px w-[2779px]" data-name="CardHeader">
      <CardTitle6 />
      <Button10 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[141.297px]" data-name="Heading 4">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] top-0 w-[142px]">Additional Charge 1</p>
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Charge Name</p>
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">e.g., Waiting Time</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel13 />
      <Input21 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Unit</p>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.281px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[43.281px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Hours</p>
      </div>
    </div>
  );
}

function Icon20() {
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

function PrimitiveButton5() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative w-full">
          <PrimitiveSpan5 />
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel14 />
      <PrimitiveButton5 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] left-[17px] top-[57px] w-[2697px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function PrimitiveLabel15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.5px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[91.5px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Pricing Rules</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[108.609px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[108.609px]">
        <Icon21 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[37px] not-italic text-[16px] text-black text-nowrap top-[3.58px] whitespace-pre">Add Tier</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel15 />
      <Button11 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[20px] left-[12px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Pricing Rule</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[20px] left-[549.8px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[73px]">Unit (hours)</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[20px] left-[1087.59px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Amount Per Unit</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[20px] left-[1625.39px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Active</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[20px] left-[2163.19px] top-0 w-[521.797px]" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Actions</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[223.344px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[223.344px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">First (Fixed cost for initial units)</p>
      </div>
    </div>
  );
}

function Icon22() {
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

function PrimitiveButton6() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[40px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-0 w-[529.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan6 />
      <Icon22 />
    </div>
  );
}

function Input22() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[40px] left-[541.8px] rounded-[8px] top-0 w-[529.797px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[529.797px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input23() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[9.281px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">$</p>
      </div>
    </div>
  );
}

function Icon23() {
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

function PrimitiveButton7() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative w-[64px]">
        <PrimitiveSpan7 />
        <Icon23 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[1083.59px] top-0 w-[529.797px]" data-name="Container">
      <Input23 />
      <PrimitiveButton7 />
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex h-[18.391px] items-center left-[1625.39px] pl-[15px] pr-px py-px rounded-[3.35544e+07px] top-[10.8px] w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <PrimitiveSpan8 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33325V11.3333" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33325V11.3333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb90500} id="Vector_5" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[2167.19px] rounded-[8px] size-[32px] top-[4px]" data-name="Button">
      <Icon24 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <PrimitiveButton6 />
      <Input22 />
      <Container63 />
      <PrimitiveButton8 />
      <Button12 />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.672px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[252.672px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Next (Fixed cost for following units)</p>
      </div>
    </div>
  );
}

function Icon25() {
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

function PrimitiveButton9() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[40px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-0 w-[529.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan9 />
      <Icon25 />
    </div>
  );
}

function Input24() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[40px] left-[541.8px] rounded-[8px] top-0 w-[529.797px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[529.797px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input25() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.281px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[9.281px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">$</p>
      </div>
    </div>
  );
}

function Icon26() {
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

function PrimitiveButton10() {
  return (
    <div className="bg-[#f3f3f5] h-[40px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative w-[64px]">
        <PrimitiveSpan10 />
        <Icon26 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[1083.59px] top-0 w-[529.797px]" data-name="Container">
      <Input25 />
      <PrimitiveButton10 />
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex h-[18.391px] items-center left-[1625.39px] pl-[15px] pr-px py-px rounded-[3.35544e+07px] top-[10.8px] w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <PrimitiveSpan11 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33325V11.3333" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33325V11.3333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb90500} id="Vector_5" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[2167.19px] rounded-[8px] size-[32px] top-[4px]" data-name="Button">
      <Icon27 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <PrimitiveButton9 />
      <Input24 />
      <Container65 />
      <PrimitiveButton11 />
      <Button13 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[168px] items-start left-[17px] top-[145px] w-[2697px]" data-name="Container">
      <Container56 />
      <Container62 />
      <Container64 />
      <Container66 />
    </div>
  );
}

function EnhancedAddContract8() {
  return (
    <div className="absolute h-[330px] left-[25px] rounded-[10px] top-[81px] w-[2731px]" data-name="EnhancedAddContract">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading6 />
      <Container55 />
      <Container67 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[436px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader4 />
      <EnhancedAddContract8 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[2562px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[81.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-[81.828px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[22.857px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#2160ad] h-[36px] relative rounded-[8px] shrink-0 w-[145.297px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[145.297px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[22.857px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Create Contract</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[61px] items-center justify-end pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[2695px] items-start left-0 pb-0 pt-[24px] px-[24px] top-[60px] w-[2829px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function EnhancedAddContract9() {
  return (
    <div className="h-[2755px] relative shrink-0 w-full" data-name="EnhancedAddContract">
      <Button />
      <Container70 />
    </div>
  );
}

export default function Container71() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[15px] py-0 relative size-full">
          <EnhancedAddContract9 />
        </div>
      </div>
    </div>
  );
}