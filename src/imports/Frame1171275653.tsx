import svgPaths from "./svg-zs0tcq7sp2";

function PrimitiveSpan() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.328px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative rounded-[inherit] w-[67.328px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">All Status</p>
      </div>
    </div>
  );
}

function Icon() {
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
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[36px] items-center justify-between left-[464px] px-[13px] py-px rounded-[8px] top-0 w-[200px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[448px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[448px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Search cases...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38c38500} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <PrimitiveButton />
        <Container />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33398V12.6673" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2160ad] h-[36px] relative rounded-[8px] shrink-0 w-[119.203px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[119.203px]">
        <Icon2 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[36px] not-italic text-[16px] text-nowrap text-white top-[5.58px] whitespace-pre">New Case</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function TableHeader() {
  return <div className="absolute h-[56.5px] left-0 top-0 w-[2794px]" data-name="TableHeader" />;
}

function CaseManagement() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[36.5px] w-[317.469px]" data-name="CaseManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">#2026031006</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[96.5px] left-0 top-0 w-[349.469px]" data-name="TableCell">
      <CaseManagement />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">FW</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Francis Wilson</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_25_3182)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_25_3182">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#717182] text-[14px] text-nowrap top-0 whitespace-pre">+65 9123 4567</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 whitespace-pre">One-way</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[64px] relative shrink-0 w-[112.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[64px] items-start relative w-[112.125px]">
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function CaseManagement1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[64px] items-center left-[16px] top-[16.5px] w-[464.781px]" data-name="CaseManagement">
      <Container3 />
      <Container7 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[96.5px] left-[349.47px] top-0 w-[496.781px]" data-name="TableCell">
      <CaseManagement1 />
    </div>
  );
}

function CaseManagement2() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[36.5px] w-[256.719px]" data-name="CaseManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Unassigned</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[96.5px] left-[846.25px] top-0 w-[288.719px]" data-name="TableCell">
      <CaseManagement2 />
    </div>
  );
}

function CaseManagement3() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[26.5px] w-[414.312px]" data-name="CaseManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">01/06/2025</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_25_3170)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_25_3170">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CaseManagement4() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[50.5px] w-[414.312px]" data-name="CaseManagement">
      <Icon4 />
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#717182] text-[14px] text-nowrap top-0 whitespace-pre">08:30</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[96.5px] left-[1134.97px] top-0 w-[446.312px]" data-name="TableCell">
      <CaseManagement3 />
      <CaseManagement4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p16d66400} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26d22700} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[24px] top-0 w-[178.766px]" data-name="Text">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">175 Made Street, Central</p>
    </div>
  );
}

function CaseManagement5() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[36.5px] w-[562.656px]" data-name="CaseManagement">
      <Icon5 />
      <Text />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[96.5px] left-[1581.28px] top-0 w-[594.656px]" data-name="TableCell">
      <CaseManagement5 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#008fd2] h-[27px] left-0 rounded-[13.5px] top-0 w-[68px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[14px] top-[3px] w-[34.25px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[2px] whitespace-pre">Open</p>
    </div>
  );
}

function OpenStatus() {
  return (
    <div className="absolute h-[27px] left-[16px] top-[32.5px] w-[68px]" data-name="OpenStatus">
      <Container8 />
      <Paragraph />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[96.5px] left-[2175.94px] top-0 w-[253.297px]" data-name="TableCell">
      <OpenStatus />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pf9e0480} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b764600} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33398V11.334" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33398V11.334" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2bd1fa80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon8 />
      </div>
    </div>
  );
}

function CaseManagement6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[32.5px] w-[332.766px]" data-name="CaseManagement">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[96.5px] left-[2429.23px] top-0 w-[364.766px]" data-name="TableCell">
      <CaseManagement6 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[96.5px] left-0 top-0 w-[2794px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[96.5px] left-0 top-[56.5px] w-[2794px]" data-name="TableBody">
      <TableRow />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[153px] left-0 top-0 w-[2794px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function CaseManagement7() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[16px] top-[16px] w-[55.094px]" data-name="CaseManagement">
      <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Case ID</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[56.5px] left-0 top-0 w-[349.469px]" data-name="TableHead">
      <CaseManagement7 />
    </div>
  );
}

function CaseManagement8() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[16px] top-[16px] w-[104.938px]" data-name="CaseManagement">
      <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Patient Details</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[56.5px] left-[349.47px] top-0 w-[496.781px]" data-name="TableHead">
      <CaseManagement8 />
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[56.5px] left-[846.25px] top-0 w-[288.719px]" data-name="TableHead">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-neutral-950 text-nowrap top-[16px] whitespace-pre">Vehicle</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[56.5px] left-[1134.97px] top-0 w-[446.312px]" data-name="TableHead">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-neutral-950 text-nowrap top-[16px] whitespace-pre">Booking Date | Time</p>
    </div>
  );
}

function CaseManagement9() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[16px] top-[16px] w-[113.531px]" data-name="CaseManagement">
      <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Pickup Location</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[56.5px] left-[1581.28px] top-0 w-[594.656px]" data-name="TableHead">
      <CaseManagement9 />
    </div>
  );
}

function CaseManagement10() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[16px] top-[16px] w-[44.406px]" data-name="CaseManagement">
      <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Status</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[56.5px] left-[2175.94px] top-0 w-[253.297px]" data-name="TableHead">
      <CaseManagement10 />
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[56.5px] left-[2429.23px] top-0 w-[364.766px]" data-name="TableHead">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-neutral-950 text-nowrap top-[16px] whitespace-pre">Actions</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] h-[56.5px] left-0 top-0 w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[153px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <Table />
      <TableRow1 />
    </div>
  );
}

function CaseManagement11() {
  return (
    <div className="h-[153px] relative shrink-0 w-[2794px]" data-name="CaseManagement">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[153px] items-start overflow-clip relative rounded-[inherit] w-[2794px]">
        <Table1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[179px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CaseManagement11 />
    </div>
  );
}

export default function Frame1171275653() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <Container2 />
      <Card />
    </div>
  );
}