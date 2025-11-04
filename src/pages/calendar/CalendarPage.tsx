import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-0dbcgieiz1";
import imgFrame1171275132 from "figma:asset/366d22b376904052a04d70c3c539386a40689990.png";
import CalendarFilter from "../components/CalendarFilter";

type FilterState = {
  [key: string]: boolean;
};

function Frame1171275132() {
  return (
    <div className="absolute h-[63.063px] left-[10px] top-[10px] w-[93px]" data-name="Frame1171275132">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1171275132} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[91.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[91.609px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 tracking-[0.35px] uppercase whitespace-pre">Operations</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(33,96,173,0.2)] h-px relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-[60px]" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-[8px] pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[236px]" data-name="SectionHeader">
      <Text />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d="M8.66602 2.16602V6.49935" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d="M17.334 2.16602V6.49935" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p2d2e0e80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d="M3.25 10.834H22.75" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[63.422px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#2160ad] box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[220px] cursor-pointer" data-name="Button">
      <Icon />
      <Text1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#2160ad] h-[44px] left-0 rounded-[8px] top-0 w-[8px]" data-name="Container" />;
}

function NavItem({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[252px]" data-name="NavItem">
      <Button onClick={onClick} />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p2865e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p11ac7d00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[41.313px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Cases</p>
      </div>
    </div>
  );
}

function NavItem1({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[52px] w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p3eb2c4c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p17735280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p2542b868} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p1de27d40} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[67.922px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Rostering</p>
      </div>
    </div>
  );
}

function NavItem2({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[104px] w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p20291140} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.pfeed800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d="M9.75 18.416H16.25" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p35055280} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[58.75px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Vehicles</p>
      </div>
    </div>
  );
}

function NavItem3({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[156px] w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Container2({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute h-[200px] left-0 top-[61px] w-[252px]" data-name="Container">
      <NavItem onClick={() => navigate('/calendar')} />
      <NavItem1 onClick={() => navigate('/cases')} />
      <NavItem2 onClick={() => navigate('/rostering')} />
      <NavItem3 onClick={() => navigate('/vehicles')} />
    </div>
  );
}

function Container3({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="h-[261px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader />
      <Container2 navigate={navigate} />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[105.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[105.344px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 tracking-[0.35px] uppercase whitespace-pre">Management</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(33,96,173,0.2)] h-px relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-[60px]" />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-[8px] pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[236px]" data-name="SectionHeader">
      <Text5 />
      <Container4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p185ca980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[58.922px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function NavItem4({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon4 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p12987d60} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p3eb2c4c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p1de27d40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[22.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[22.625px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">HR</p>
      </div>
    </div>
  );
}

function NavItem5({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon5 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p36c5af80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 17V9" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 17V5" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17V14" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[140.578px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">{`Analytics & Reports`}</p>
      </div>
    </div>
  );
}

function NavItem6({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon6 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container5({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[148px] items-start left-0 pl-[24px] pr-[8px] py-0 top-[61px] w-[252px]" data-name="Container">
      <NavItem4 onClick={() => navigate('/services')} />
      <NavItem5 onClick={() => navigate('/hr')} />
      <NavItem6 onClick={() => navigate('/analytics')} />
    </div>
  );
}

function Container6({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="h-[209px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader1 />
      <Container5 navigate={navigate} />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[55.625px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 tracking-[0.35px] uppercase whitespace-pre">System</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(33,96,173,0.2)] h-px relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-[60px]" />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-[8px] pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[236px]" data-name="SectionHeader">
      <Text9 />
      <Container7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p3fd6d700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p183ed300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[57.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[57.172px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function NavItem7({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon7 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p12987d60} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p3eb2c4c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p1de27d40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[40.094px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Users</p>
      </div>
    </div>
  );
}

function NavItem8({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon8 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container8({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[96px] items-start left-0 pl-[24px] pr-[8px] py-0 top-[61px] w-[252px]" data-name="Container">
      <NavItem7 onClick={() => navigate('/settings')} />
      <NavItem8 onClick={() => navigate('/users')} />
    </div>
  );
}

function Container9({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="h-[157px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader2 />
      <Container8 navigate={navigate} />
    </div>
  );
}

function Container10({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="h-[675px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[675px] items-start px-[8px] py-0 relative w-full">
          <Container3 navigate={navigate} />
          <Container6 navigate={navigate} />
          <Container9 navigate={navigate} />
        </div>
      </div>
    </div>
  );
}

function Container11({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[1097.94px] items-start left-0 overflow-clip pb-0 pt-[20px] px-0 top-[83.06px] w-[268px]" data-name="Container">
      <Container10 navigate={navigate} />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p216faf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p30640b40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] shrink-0 size-[37px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[37px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">My Profile</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lato:Medium',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(33,96,173,0.7)] text-nowrap top-[-1px] whitespace-pre">Account Settings</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start relative w-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[66px] relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[66px] items-center px-[12px] py-0 relative w-full">
          <Container12 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p290bb880} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[3.35544e+07px] shrink-0 size-[37px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[37px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-0 whitespace-pre">Sign Out</p>
      </div>
    </div>
  );
}

function Container19({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/')} className="h-[61px] relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-[rgba(231,0,11,0.05)]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[61px] items-center px-[12px] py-0 relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[135px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 navigate={navigate} />
    </div>
  );
}

function Container21({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[172px] items-start left-[16px] pb-0 pt-[17px] px-0 top-[1181px] w-[236px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <Container20 navigate={navigate} />
    </div>
  );
}

function Sidebar() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white h-[1353px] relative shrink-0 w-[269px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1353px] relative w-[269px]">
        <Frame1171275132 />
        <Container11 navigate={navigate} />
        <Container21 navigate={navigate} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[1353px] relative shrink-0 w-0" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1353px] w-0" />
    </div>
  );
}

// Breadcrumbs
function BreadcrumbLink({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/calendar')} className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 cursor-pointer hover:underline" data-name="BreadcrumbLink">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Operations</p>
      </div>
    </div>
  );
}

function BreadcrumbItem({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center relative w-full">
        <BreadcrumbLink navigate={navigate} />
      </div>
    </div>
  );
}

function Icon11() {
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
        <Icon11 />
      </div>
    </div>
  );
}

function PageHeader({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-0 top-0 w-[87.875px]" data-name="PageHeader">
      <BreadcrumbItem navigate={navigate} />
      <BreadcrumbSeparator />
    </div>
  );
}

function BreadcrumbPage() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function BreadcrumbItem1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[97.88px] top-0 w-[55.5px]" data-name="BreadcrumbItem">
      <BreadcrumbPage />
    </div>
  );
}

function BreadcrumbList({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="h-[20px] relative shrink-0 w-[153.375px]" data-name="BreadcrumbList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[153.375px]">
        <PageHeader navigate={navigate} />
        <BreadcrumbItem1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[153.375px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26px] relative w-[153.375px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[26px] left-0 not-italic text-[#2160ad] text-[26px] text-nowrap top-0 whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container22({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <BreadcrumbList navigate={navigate} />
      <Heading1 />
    </div>
  );
}

function PageHeader1({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="bg-[rgba(33,96,173,0.05)] h-[86px] relative shrink-0 w-full overflow-x-auto" data-name="PageHeader">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[86px] items-start pb-0 pl-[24px] pr-[24px] pt-[16px] relative min-w-[800px]">
        <Container22 navigate={navigate} />
      </div>
    </div>
  );
}

// View Controls and Timeline
function Button2({ view, activeView, onClick }: { view: string; activeView: string; onClick: () => void }) {
  const isActive = view === activeView;
  return (
    <div 
      onClick={onClick}
      className={`${isActive ? 'bg-[#2160ad]' : 'bg-white'} h-[32px] relative rounded-[8px] shrink-0 cursor-pointer`}
      data-name="Button"
    >
      {!isActive && <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />}
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative w-full">
        <p className={`font-['Lato:Medium',sans-serif] leading-[22.857px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? 'text-white' : 'text-[#2160ad]'}`}>{view}</p>
      </div>
    </div>
  );
}

function Container52({ activeView, setActiveView }: { activeView: string; setActiveView: (view: string) => void }) {
  return (
    <div className="h-[32px] relative shrink-0 w-[209.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[209.734px]">
        <Button2 view="Day" activeView={activeView} onClick={() => setActiveView('Day')} />
        <Button2 view="Week" activeView={activeView} onClick={() => setActiveView('Week')} />
        <Button2 view="Month" activeView={activeView} onClick={() => setActiveView('Month')} />
      </div>
    </div>
  );
}

function Icon25() {
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

function Button5({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative rounded-[8px] shrink-0 size-[32px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" 
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2e667900} id="Vector_3" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66602H14" id="Vector_4" stroke="var(--stroke-0, #2160AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6({ dateString }: { dateString: string }) {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <Icon26 />
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[22.857px] left-[36px] not-italic text-[#2160ad] text-[16px] text-nowrap top-[5.58px] whitespace-pre">{dateString}</p>
      </div>
    </div>
  );
}

function Icon27() {
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

function Button7({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative rounded-[8px] shrink-0 size-[32px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" 
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Container53({ currentDate, onPrevious, onNext }: { currentDate: string; onPrevious: () => void; onNext: () => void }) {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-full">
        <Button5 onClick={onPrevious} />
        <Button6 dateString={currentDate} />
        <Button7 onClick={onNext} />
      </div>
    </div>
  );
}

function Container54({ activeView, setActiveView, currentDate, onPrevious, onNext }: { 
  activeView: string; 
  setActiveView: (view: string) => void;
  currentDate: string;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 activeView={activeView} setActiveView={setActiveView} />
      <Container53 currentDate={currentDate} onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}

function Container55({ activeView, setActiveView, currentDate, onPrevious, onNext }: { 
  activeView: string; 
  setActiveView: (view: string) => void;
  currentDate: string;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="h-[61px] relative shrink-0 w-full overflow-x-auto" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[61px] items-start pb-px pl-[24px] pr-[24px] pt-[12px] relative min-w-[800px]">
        <Container54 activeView={activeView} setActiveView={setActiveView} currentDate={currentDate} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[36px] left-[50%] not-italic text-[#2160ad] text-[24px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Daily Timeline</p>
    </div>
  );
}

function Paragraph({ dateString }: { dateString: string }) {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[50%] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">{dateString}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[21px] left-[50%] not-italic text-[#6a7282] text-[14px] text-center top-0 translate-x-[-50%] w-[112px]">8 cases scheduled</p>
    </div>
  );
}

function Container56({ dateString }: { dateString: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[93px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph dateString={dateString} />
      <Paragraph1 />
    </div>
  );
}

// Hour row component
function HourRow({ hour, children }: { hour: string; children?: React.ReactNode }) {
  return (
    <div className="box-border grid grid-cols-[100px_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] min-h-[80px] pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="[grid-area:1_/_1] bg-[rgba(33,96,173,0.05)] relative shrink-0" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="box-border content-stretch flex items-center justify-end pl-[12px] pr-[13px] py-[12px] relative size-full">
            <p className="font-['Lato:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2160ad] text-[16px] text-nowrap text-right whitespace-pre">{hour}</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
        {children && (
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[8px] pr-[24px] pt-[8px] relative size-full">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Event card component (simplified for now with sample data)
function EventCard({ time, bookingId, route, patient, badge, status, statusColor, borderColor }: {
  time: string;
  bookingId: string;
  route: string;
  patient: string;
  badge?: string;
  status: string;
  statusColor: string;
  borderColor: string;
}) {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full mb-2" data-name="Container" style={{ minHeight: badge ? '162.5px' : '138.5px' }}>
      <div aria-hidden="true" className="absolute border-solid inset-0 pointer-events-none rounded-[10px]" style={{ border: `1px 1px 1px 4px ${borderColor}`, borderLeftWidth: '4px', borderColor }} />
      <div className="absolute h-[18px] left-[16px] top-[13px] w-[30.938px]" data-name="Text">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#2160ad] text-[12px] text-nowrap top-[-1px] whitespace-pre">{time}</p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[55.5px] items-start left-[16px] top-[39px] w-[171px]" data-name="Container">
        <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Heading 4">
          <p className="absolute font-['Lato:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[162px]">{bookingId}</p>
        </div>
        <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-[-1px]">{route}</p>
        </div>
        <div className="h-[16.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] text-nowrap top-[-1px] whitespace-pre">{patient}</p>
        </div>
      </div>
      {badge && (
        <div className="absolute bg-[rgba(33,96,173,0.1)] box-border content-stretch flex h-[16px] items-start left-[16px] px-[4px] py-[2px] rounded-[4px] top-[102.5px]" data-name="Text">
          <p className="font-['Lato:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#2160ad] text-[9px] text-nowrap whitespace-pre">{badge}</p>
        </div>
      )}
      <div className="absolute h-[23px] left-[16px] rounded-[4px] w-[171px]" style={{ top: badge ? '126.5px' : '102.5px', backgroundColor: statusColor }} data-name="Container">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[50%] not-italic text-[10px] text-center text-nowrap text-white top-[4px] translate-x-[-50%] whitespace-pre">{status}</p>
      </div>
    </div>
  );
}

function CalendarTimeline() {
  return (
    <div className="bg-white content-stretch flex flex-col min-h-[2633.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <HourRow hour="01:00" />
      <HourRow hour="02:00" />
      <HourRow hour="03:00" />
      <HourRow hour="04:00" />
      <HourRow hour="05:00" />
      <HourRow hour="06:00">
        <EventCard 
          time="06:45"
          bookingId="#20251010008 • Trip 3/3"
          route="NUH → CGH"
          patient="Patient H 214"
          badge="Stretcher"
          status="Pending Details from Vendor"
          statusColor="#c33ba8"
          borderColor="#c33ba8"
        />
      </HourRow>
      <HourRow hour="07:00">
        <EventCard 
          time="07:37"
          bookingId="#20251010004 • Trip 2/3"
          route="SGH → NUH"
          patient="Patient D 552"
          status="Completed"
          statusColor="#0aab2f"
          borderColor="#0aab2f"
        />
      </HourRow>
      <HourRow hour="08:00">
        <EventCard 
          time="08:24"
          bookingId="#20251010003 • Trip 1/1"
          route="NTU-H → Home"
          patient="Patient C 635"
          badge="Stretcher"
          status="Pending for Service Receipt"
          statusColor="#6d27b3"
          borderColor="#6d27b3"
        />
      </HourRow>
      <HourRow hour="09:00" />
      <HourRow hour="10:00" />
      <HourRow hour="11:00" />
      <HourRow hour="12:00" />
      <HourRow hour="13:00" />
      <HourRow hour="14:00">
        <EventCard 
          time="14:08"
          bookingId="#20251010006 • Trip 2/3"
          route="SNEC → Mt A"
          patient="Patient F 352"
          status="Open"
          statusColor="#008fd2"
          borderColor="#008fd2"
        />
      </HourRow>
      <HourRow hour="15:00">
        <EventCard 
          time="15:48"
          bookingId="#20251010001 • Trip 2/2"
          route="IMH → Patient Home"
          patient="Patient A 118"
          badge="IV Drip Stand"
          status="Open"
          statusColor="#008fd2"
          borderColor="#008fd2"
        />
      </HourRow>
      <HourRow hour="16:00">
        <EventCard 
          time="16:07"
          bookingId="#20251010002 • Trip 2/3"
          route="TTSH → IMH"
          patient="Patient B 22"
          status="Pending for Payment"
          statusColor="#1e9e9e"
          borderColor="#1e9e9e"
        />
      </HourRow>
      <HourRow hour="17:00" />
      <HourRow hour="18:00" />
      <HourRow hour="19:00" />
      <HourRow hour="20:00">
        <div className="flex gap-2">
          <EventCard 
            time="20:28"
            bookingId="#20251010005 • Trip 1/1"
            route="NUH → NUH"
            patient="Patient E 206"
            badge="Stretcher"
            status="Open"
            statusColor="#008fd2"
            borderColor="#008fd2"
          />
          <EventCard 
            time="20:29"
            bookingId="#20251010007 • Trip 3/3"
            route="Gleneagles → SGH"
            patient="Patient G 177"
            badge="Stretcher"
            status="Cancelled"
            statusColor="#b40909"
            borderColor="#b40909"
          />
        </div>
      </HourRow>
      <HourRow hour="21:00" />
      <HourRow hour="22:00" />
      <HourRow hour="23:00" />
      <HourRow hour="00:00" />
    </div>
  );
}

function Container159({ dateString }: { dateString: string }) {
  return (
    <div className="bg-white min-h-[2798.5px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container56 dateString={dateString} />
          <CalendarTimeline />
        </div>
      </div>
    </div>
  );
}

function Container160({ dateString }: { dateString: string }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 overflow-y-auto" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <Container159 dateString={dateString} />
      </div>
    </div>
  );
}

function InteractiveTimeline({ dateString }: { dateString: string }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 flex flex-col" data-name="InteractiveTimeline">
      <Container160 dateString={dateString} />
    </div>
  );
}

function InteractiveCalendar({ 
  navigate, 
  activeView, 
  setActiveView, 
  currentDate, 
  dateString, 
  onPrevious, 
  onNext,
  filters,
  onFilterChange,
  onClearAll,
  filterCount
}: { 
  navigate: ReturnType<typeof useNavigate>;
  activeView: string;
  setActiveView: (view: string) => void;
  currentDate: string;
  dateString: string;
  onPrevious: () => void;
  onNext: () => void;
  filters: FilterState;
  onFilterChange: (key: string) => void;
  onClearAll: () => void;
  filterCount: number;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-full overflow-hidden" data-name="InteractiveCalendar">
      <PageHeader1 navigate={navigate} />
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full flex" data-name="Container">
        <CalendarFilter filters={filters} onFilterChange={onFilterChange} onClearAll={onClearAll} filterCount={filterCount} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Container55 activeView={activeView} setActiveView={setActiveView} currentDate={currentDate} onPrevious={onPrevious} onNext={onNext} />
          <InteractiveTimeline dateString={dateString} />
        </div>
      </div>
    </div>
  );
}

export function CalendarPage() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('Day');
  const [currentDate] = useState('Friday, October 31, 2025');
  const [dateString] = useState('Friday, October 31, 2025');
  
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    open: true,
    pendingForDispatch: true,
    dispatched: true,
    pendingForPayment: true,
    pendingEscortAssignment: true,
    pendingDetailsFromVendor: true,
    pendingForServiceReceipt: true,
    pendingConfirmation: true,
    completed: true,
    cancelled: true,
    medicalTransport1Way: true,
    medicalTransport2Way: true,
    medicalTransport3Way: true,
  });
  
  const handleFilterChange = (key: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleClearAll = () => {
    setFilters({
      open: false,
      pendingForDispatch: false,
      dispatched: false,
      pendingForPayment: false,
      pendingEscortAssignment: false,
      pendingDetailsFromVendor: false,
      pendingForServiceReceipt: false,
      pendingConfirmation: false,
      completed: false,
      cancelled: false,
      medicalTransport1Way: false,
      medicalTransport2Way: false,
      medicalTransport3Way: false,
    });
  };
  
  const filterCount = Object.values(filters).filter(Boolean).length;
  
  const handlePrevious = () => {
    console.log('Previous day');
  };
  
  const handleNext = () => {
    console.log('Next day');
  };

  return (
    <div className="bg-white content-stretch flex items-start relative size-full min-h-screen" data-name="IM Ambulance - Web Application">
      <Sidebar />
      <Section />
      <div className="flex-1 flex flex-col overflow-hidden">
        <InteractiveCalendar 
          navigate={navigate} 
          activeView={activeView}
          setActiveView={setActiveView}
          currentDate={currentDate}
          dateString={dateString}
          onPrevious={handlePrevious}
          onNext={handleNext}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
          filterCount={filterCount}
        />
      </div>
    </div>
  );
}
