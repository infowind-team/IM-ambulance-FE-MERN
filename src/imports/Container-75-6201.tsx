import svgPaths from "./svg-tgaw13pu2e";

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
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[36px] items-center justify-between left-[464px] px-[13px] py-px rounded-[8px] top-0 w-[140px]" data-name="Primitive.button">
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
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">Search vehicles...</p>
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
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
          <path d="M8 3.33301V12.6663" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2160ad] h-[36px] relative rounded-[8px] shrink-0 w-[132.109px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[132.109px]">
        <Icon2 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[36px] not-italic text-[16px] text-nowrap text-white top-[5.58px] whitespace-pre">Add Vehicle</p>
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

function VehicleManagement() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">AMB001</p>
    </div>
  );
}

function VehicleManagement1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">SBA1234A</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement />
      <VehicleManagement1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ambulance Alpha</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[158px]">Mercedes Sprinter (2020)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 45,000 km</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[157.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[157.797px]">
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function VehicleManagement2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container3 />
      <Container7 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[93px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement2 />
    </div>
  );
}

function VehicleManagement3() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Marcus Chen</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[93px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement3 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-blue-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[39.828px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[39.828px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">EAS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[93px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function VehicleManagement4() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">12/1/2024</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[93px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement4 />
    </div>
  );
}

function VehicleManagement5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">6/30/2027</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[93px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement5 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-emerald-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[52.234px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[93px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function Icon4() {
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
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
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
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon6 />
      </div>
    </div>
  );
}

function VehicleManagement6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[93px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement6 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function VehicleManagement7() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">AMB002</p>
    </div>
  );
}

function VehicleManagement8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">SBA2345B</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement7 />
      <VehicleManagement8 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ambulance Beta</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[125px]">Toyota Hiace (2019)</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 52,000 km</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[60px] relative shrink-0 w-[124.312px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[124.312px]">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function VehicleManagement9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container8 />
      <Container12 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[93px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement9 />
    </div>
  );
}

function VehicleManagement10() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Jennifer Liu</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[93px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement10 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-blue-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[39.828px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[39.828px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">EAS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[93px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function VehicleManagement11() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[89.156px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">11/15/2024</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[93px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement11 />
    </div>
  );
}

function VehicleManagement12() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">8/20/2026</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[93px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement12 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-emerald-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[52.234px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[93px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function Icon8() {
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

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon10 />
      </div>
    </div>
  );
}

function VehicleManagement13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[93px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement13 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[93px] left-0 top-[93px] w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function VehicleManagement14() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">AMB003</p>
    </div>
  );
}

function VehicleManagement15() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">SBA5678E</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement14 />
      <VehicleManagement15 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ambulance Gamma</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[117px]">Ford Transit (2023)</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 12,500 km</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[60px] relative shrink-0 w-[138.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[138.359px]">
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function VehicleManagement16() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container13 />
      <Container17 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[93px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement16 />
    </div>
  );
}

function VehicleManagement17() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Sarah Tan</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[93px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement17 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-green-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[43.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.109px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap whitespace-pre">MTS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[93px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function VehicleManagement18() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[70.594px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">1/5/2025</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[93px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement18 />
    </div>
  );
}

function VehicleManagement19() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">3/25/2030</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[93px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement19 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-emerald-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[52.234px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[93px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function Icon12() {
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

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
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

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon14 />
      </div>
    </div>
  );
}

function VehicleManagement20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[93px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement20 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[93px] left-0 top-[186px] w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function VehicleManagement21() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">EMG001</p>
    </div>
  );
}

function VehicleManagement22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">SEM4567D</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement21 />
      <VehicleManagement22 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Emergency Response Unit</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[135px]">Mercedes Vito (2022)</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 15,000 km</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[60px] relative shrink-0 w-[185.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[185.125px]">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function VehicleManagement23() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container18 />
      <Container22 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[93px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement23 />
    </div>
  );
}

function VehicleManagement24() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">David Kim</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[93px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement24 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-blue-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[39.828px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[39.828px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">EAS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[93px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge6 />
    </div>
  );
}

function VehicleManagement25() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[89.156px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">12/20/2024</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[93px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement25 />
    </div>
  );
}

function VehicleManagement26() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">1/10/2029</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[93px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement26 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-emerald-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[52.234px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[52.234px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[93px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge7 />
    </div>
  );
}

function Icon16() {
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

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon18 />
      </div>
    </div>
  );
}

function VehicleManagement27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[93px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement27 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[93px] left-0 top-[279px] w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function VehicleManagement28() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">TRA001</p>
    </div>
  );
}

function VehicleManagement29() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">STR3456C</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement28 />
      <VehicleManagement29 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Transport One</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[134px]">Nissan NV200 (2021)</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 28,000 km</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[60px] relative shrink-0 w-[133.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[133.406px]">
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function VehicleManagement30() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container23 />
      <Container27 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[93px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement30 />
    </div>
  );
}

function VehicleManagement31() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ahmed Hassan</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[93px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement31 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-green-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[43.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.109px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap whitespace-pre">MTS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[93px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge8 />
    </div>
  );
}

function VehicleManagement32() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[70.594px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">1/1/2025</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[93px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement32 />
    </div>
  );
}

function VehicleManagement33() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[79.875px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">2/15/2028</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[93px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement33 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-red-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[60.391px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[60.391px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] text-nowrap whitespace-pre">Inactive</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[93px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge9 />
    </div>
  );
}

function Icon20() {
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

function Button13() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
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

function Button14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon22 />
      </div>
    </div>
  );
}

function VehicleManagement34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[93px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement34 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[93px] left-0 top-[372px] w-[2794px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function VehicleManagement35() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[24.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] text-nowrap top-[-1px] whitespace-pre">TRA002</p>
    </div>
  );
}

function VehicleManagement36() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[52.5px] w-[315.781px]" data-name="VehicleManagement">
      <p className="basis-0 font-['Lato:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">STR6789F</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[92.5px] left-0 top-0 w-[347.781px]" data-name="TableCell">
      <VehicleManagement35 />
      <VehicleManagement36 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p471f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1844fe80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39f92e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29671870} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Transport Two</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[138px]">Toyota Alphard (2018)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[106px]">Mileage: 68,000 km</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[60px] relative shrink-0 w-[137.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[137.516px]">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function VehicleManagement37() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[16px] top-[16.5px] w-[546.484px]" data-name="VehicleManagement">
      <Container28 />
      <Container32 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[92.5px] left-[347.78px] top-0 w-[578.484px]" data-name="TableCell">
      <VehicleManagement37 />
    </div>
  );
}

function VehicleManagement38() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[391.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Michael Wong</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[92.5px] left-[926.27px] top-0 w-[423.781px]" data-name="TableCell">
      <VehicleManagement38 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-green-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[43.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.109px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap whitespace-pre">MTS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[92.5px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableCell">
      <Badge10 />
    </div>
  );
}

function VehicleManagement39() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[34.5px] w-[89.156px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">12/10/2024</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[92.5px] left-[1527px] top-0 w-[480.484px]" data-name="TableCell">
      <VehicleManagement39 />
    </div>
  );
}

function VehicleManagement40() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[16px] top-[36.5px] w-[89.156px]" data-name="VehicleManagement">
      <p className="font-['Lato:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">11/30/2025</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[92.5px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableCell">
      <VehicleManagement40 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-red-50 h-[22px] left-[16px] rounded-[8px] top-[35.5px] w-[60.391px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[60.391px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] text-nowrap whitespace-pre">Inactive</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[92.5px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableCell">
      <Badge11 />
    </div>
  );
}

function Icon24() {
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

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
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

function Button17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66602 7.33301V11.333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 7.33301V11.333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3d85b400} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p146272c0} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon26 />
      </div>
    </div>
  );
}

function VehicleManagement41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[16px] top-[30.5px] w-[277.594px]" data-name="VehicleManagement">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[92.5px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableCell">
      <VehicleManagement41 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[92.5px] left-0 top-[465px] w-[2794px]" data-name="TableRow">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[557.5px] left-0 top-[56.5px] w-[2794px]" data-name="TableBody">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[614px] left-0 top-0 w-[2794px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[113.8px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement42() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[129.797px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Vehicle Number</p>
      <Icon27 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[56.5px] left-0 top-0 w-[347.781px]" data-name="TableHead">
      <VehicleManagement42 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[97.78px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement43() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[113.781px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Vehicle Name</p>
      <Icon28 />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[56.5px] left-[347.78px] top-0 w-[578.484px]" data-name="TableHead">
      <VehicleManagement43 />
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[56.5px] left-[926.27px] top-0 w-[423.781px]" data-name="TableHead">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-neutral-950 text-nowrap top-[16px] whitespace-pre">Assigned Driver / MTO</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[34.33px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement44() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[50.328px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Type</p>
      <Icon29 />
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[56.5px] left-[1350.05px] top-0 w-[176.953px]" data-name="TableHead">
      <VehicleManagement44 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[175.53px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement45() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[191.531px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Next Servicing Due Date</p>
      <Icon30 />
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[56.5px] left-[1527px] top-0 w-[480.484px]" data-name="TableHead">
      <VehicleManagement45 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[81.47px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement46() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[97.469px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">COE Expiry</p>
      <Icon31 />
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[56.5px] left-[2007.48px] top-0 w-[278.297px]" data-name="TableHead">
      <VehicleManagement46 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[44.41px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleManagement47() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[60.406px]" data-name="VehicleManagement">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">Status</p>
      <Icon32 />
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[56.5px] left-[2285.78px] top-0 w-[198.625px]" data-name="TableHead">
      <VehicleManagement47 />
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[56.5px] left-[2484.41px] top-0 w-[309.594px]" data-name="TableHead">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-neutral-950 text-nowrap top-[16px] whitespace-pre">Actions</p>
    </div>
  );
}

function TableRow6() {
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
      <TableHead7 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[614px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <Table />
      <TableRow6 />
    </div>
  );
}

function VehicleManagement48() {
  return (
    <div className="h-[614px] relative shrink-0 w-[2794px]" data-name="VehicleManagement">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[614px] items-start overflow-clip relative rounded-[inherit] w-[2794px]">
        <Table1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[640px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <VehicleManagement48 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[166.375px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-0 w-[167px]">Showing 6 of 6 vehicles</p>
      </div>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#18c07a] left-0 rounded-[4px] size-[12px] top-[6px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[82.938px]">
        <Container33 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#717182] text-[16px] top-0 w-[63px]">Active: 4</p>
      </div>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[#c01818] left-0 rounded-[4px] size-[12px] top-[6px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Container34 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#717182] text-[16px] top-0 w-[74px]">Inactive: 1</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-blue-100 left-0 rounded-[4px] size-[12px] top-[6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[66.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[66.391px]">
        <Container35 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#717182] text-[16px] top-0 w-[47px]">EAS: 3</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-green-100 left-0 rounded-[4px] size-[12px] top-[6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.766px]">
        <Container36 />
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#717182] text-[16px] top-0 w-[51px]">MTS: 3</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[361.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[24px] items-center relative w-[361.906px]">
        <Text1 />
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Container37 />
    </div>
  );
}

export default function Container39() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container2 />
          <Card />
          <Container38 />
        </div>
      </div>
    </div>
  );
}