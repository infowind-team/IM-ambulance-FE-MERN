import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-0dbcgieiz1";
import svgPathsMetrics from "../imports/svg-g0xpdyprn0";
import svgPathsTable from "../imports/svg-zs0tcq7sp2";
import imgFrame1171275132 from "figma:asset/366d22b376904052a04d70c3c539386a40689990.png";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../components/ui/alert-dialog';
import { toast } from 'sonner@2.0.3';

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
          <path d="M8.66602 2.16602V6.49935" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d="M17.334 2.16602V6.49935" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p2d2e0e80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d="M3.25 10.834H22.75" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[63.422px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function NavItem({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div 
      onClick={() => navigate('/calendar')}
      className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-0 w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" 
      data-name="NavItem"
    >
      <Icon />
      <Text1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Icon">
          <path d={svgPaths.p2865e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
          <path d={svgPaths.p11ac7d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[41.313px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Cases</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2160ad] box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[220px]" data-name="Button">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function ActiveIndicator() {
  return <div className="absolute bg-[#2160ad] h-[44px] left-0 rounded-[8px] top-0 w-[8px]" data-name="Container" />;
}

function NavItem1() {
  return (
    <div className="absolute h-[44px] left-0 top-[52px] w-[252px]" data-name="NavItem">
      <Button />
      <ActiveIndicator />
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

function NavItem2({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div 
      onClick={() => navigate('/rostering')}
      className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[104px] w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" 
      data-name="NavItem"
    >
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

function NavItem3({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div 
      onClick={() => navigate('/vehicles')}
      className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[156px] w-[220px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" 
      data-name="NavItem"
    >
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Container2({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div className="absolute h-[200px] left-0 top-[61px] w-[252px]" data-name="Container">
      <NavItem navigate={navigate} />
      <NavItem1 />
      <NavItem2 navigate={navigate} />
      <NavItem3 navigate={navigate} />
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

function NavItem4({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/services')} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
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

function NavItem5({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/hr')} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
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

function NavItem6({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/analytics')} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
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
      <NavItem4 navigate={navigate} />
      <NavItem5 navigate={navigate} />
      <NavItem6 navigate={navigate} />
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

function NavItem7({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/settings')} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
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

function NavItem8({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div onClick={() => navigate('/users')} className="h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="NavItem">
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
      <NavItem7 navigate={navigate} />
      <NavItem8 navigate={navigate} />
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
    <div className="bg-white h-screen relative shrink-0 w-[269px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[269px]">
        <Frame1171275132 />
        <Container11 navigate={navigate} />
        <Container21 navigate={navigate} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-full relative shrink-0 w-0" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-0" />
    </div>
  );
}

// Breadcrumb Components
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
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#2160ad] text-[14px] text-nowrap top-0 whitespace-pre">Cases</p>
      </div>
    </div>
  );
}

function BreadcrumbItem1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[97.88px] top-0 w-[36.156px]" data-name="BreadcrumbItem">
      <BreadcrumbPage />
    </div>
  );
}

function BreadcrumbList() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.031px]" data-name="BreadcrumbList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[134.031px]">
        <PageHeader />
        <BreadcrumbItem1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[186.078px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26px] relative w-[186.078px]">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[26px] left-0 not-italic text-[#2160ad] text-[26px] text-nowrap top-0 whitespace-pre">Case Management</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <BreadcrumbList />
      <Heading1 />
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="bg-[rgba(33,96,173,0.05)] h-[86px] relative shrink-0 w-full overflow-x-auto" data-name="PageHeader">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[86px] items-start pb-0 pl-[24px] pr-[24px] pt-[16px] relative min-w-[800px]">
        <Container22 />
      </div>
    </div>
  );
}

// Metrics Cards
function MetricCard({ label, count, icon, onClick, variant = 'default' }: { 
  label: string; 
  count: string | number; 
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'critical';
}) {
  return (
    <div 
      onClick={onClick}
      className="bg-white relative rounded-[14px] shrink-0 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#2160ad] focus:ring-offset-2" 
      data-name="Card"
      tabIndex={0}
      role="button"
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pl-[17px] pr-[17px] pt-[17px] relative size-full gap-[12px]">
          <div className={`h-[${variant === 'critical' ? '52' : '32'}px] relative shrink-0 w-full`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between relative w-full">
              <div className="flex flex-col gap-[4px]">
                <p className={`font-['Lato:Regular',sans-serif] leading-[20px] not-italic ${variant === 'critical' ? 'text-[#717182]' : 'text-[#717182]'} text-[14px] text-nowrap whitespace-pre`}>
                  {label}
                </p>
                {variant === 'critical' && (
                  <p className="font-['Lato:SemiBold',sans-serif] leading-[32px] not-italic text-[#e7000b] text-[24px] text-nowrap whitespace-pre">
                    {count}
                  </p>
                )}
              </div>
              <div className="relative shrink-0 size-[32px]">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodaysCasesCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pl-[17px] pr-px pt-[17px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-between relative w-full pr-[17px]">
              <div className="h-[20px] relative shrink-0">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic text-[#717182] text-[14px] text-nowrap whitespace-pre">{`Today's Cases`}</p>
              </div>
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d="M16 8V16L21.3333 18.6667" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                    <path d={svgPathsMetrics.p21f38a00} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletedCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pl-[17px] pr-px pt-[17px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-between relative w-full pr-[17px]">
              <div className="h-[20px] relative shrink-0">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic text-[#717182] text-[14px] text-nowrap whitespace-pre">Completed</p>
              </div>
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPathsMetrics.p626a600} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                    <path d={svgPathsMetrics.p31991ba0} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InProgressCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pl-[17px] pr-px pt-[17px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-between relative w-full pr-[17px]">
              <div className="h-[20px] relative shrink-0">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic text-[#717182] text-[14px] text-nowrap whitespace-pre">In Progress</p>
              </div>
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPathsMetrics.p1c84c300} stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                    <path d={svgPathsMetrics.p16150d00} stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CriticalCasesCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(33,96,173,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pl-[17px] pr-px pt-[17px] relative size-full">
          <div className="h-[52px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-center justify-between relative w-full pr-[17px]">
              <div className="h-[52px] flex flex-col justify-center">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic text-[#717182] text-[14px] text-nowrap whitespace-pre">Critical Cases</p>
                <p className="font-['Lato:SemiBold',sans-serif] leading-[32px] not-italic text-[#e7000b] text-[24px] text-nowrap whitespace-pre">5</p>
              </div>
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPathsMetrics.p3f416300} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                    <path d={svgPathsMetrics.p266fe00} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricsRow() {
  return (
    <div className="w-full px-[24px] py-[24px]">
      <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <TodaysCasesCard />
        <CompletedCard />
        <InProgressCard />
        <CriticalCasesCard />
      </div>
    </div>
  );
}

// Controls Bar Components
function SearchIcon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsTable.p38c38500} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsTable.p107a080} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SearchInput({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative h-[36px] w-full md:w-[448px]" data-name="Container">
      <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-full" data-name="Input">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search cases..."
          className="box-border w-full h-[36px] px-[40px] py-[4px] bg-transparent border-0 font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
        />
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <SearchIcon />
    </div>
  );
}

function DropdownIcon() {
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

function StatusDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const statuses = [
    'All Status',
    'Open',
    'Pending for Dispatch',
    'Dispatched',
    'Pending Confirmation',
    'Pending for Payment',
    'Completed',
    'Cancelled'
  ];

  return (
    <div className="relative w-full md:w-[200px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f3f3f5] box-border flex h-[36px] items-center justify-between w-full px-[13px] py-px rounded-[8px] cursor-pointer hover:bg-[#e8e8ed] transition-colors" 
        data-name="Primitive.button"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <span className="font-['Lato:Regular',sans-serif] leading-[24px] text-[16px] text-neutral-950">{value}</span>
        <DropdownIcon />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  onChange(status);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-[#f3f3f5] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 flex items-center justify-between"
              >
                {status}
                {status === value && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M13.3327 4L5.99935 11.3333L2.66602 8" stroke="#2160ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function NewCaseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#2160ad] h-[36px] rounded-[8px] shrink-0 px-[12px] py-0 flex items-center gap-[8px] hover:bg-[#1a4d8a] transition-colors cursor-pointer" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 3.33398V12.6673" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
      <p className="font-['Lato:Medium',sans-serif] leading-[22.857px] text-[16px] text-white whitespace-nowrap">New Case</p>
    </button>
  );
}

function ControlsBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const handleNewCase = () => {
    navigate('/add-case');
  };

  return (
    <div className="w-full px-[24px] py-0 mb-[24px]">
      <div className="flex flex-col md:flex-row gap-[16px] items-start md:items-center justify-between w-full">
        <div className="flex flex-col md:flex-row gap-[16px] items-start md:items-center flex-1 w-full md:w-auto">
          <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <StatusDropdown value={statusFilter} onChange={setStatusFilter} />
        </div>
        <NewCaseButton onClick={handleNewCase} />
      </div>
    </div>
  );
}

// Table Components
function TableActionButton({ icon, onClick, color = '#155DFC' }: { icon: 'view' | 'edit' | 'delete'; onClick: () => void; color?: string }) {
  return (
    <button onClick={onClick} className="relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-100 transition-colors flex items-center justify-center" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        {icon === 'view' && (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Icon">
              <path d={svgPathsTable.pf9e0480} id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPathsTable.p28db2b80} id="Vector_2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        )}
        {icon === 'edit' && (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Icon">
              <path d={svgPathsTable.p38f39800} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPathsTable.p2b764600} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        )}
        {icon === 'delete' && (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Icon">
              <path d="M6.66602 7.33398V11.334" id="Vector" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M9.33398 7.33398V11.334" id="Vector_2" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPathsTable.p3d85b400} id="Vector_3" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M2 4H14" id="Vector_4" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPathsTable.p2bd1fa80} id="Vector_5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        )}
      </div>
    </button>
  );
}

interface CaseRow {
  id: string;
  patientName: string;
  patientInitials: string;
  phone: string;
  tripType: string;
  vehicle: string;
  bookingDate: string;
  bookingTime: string;
  pickupLocation: string;
  status: string;
}

function CasesTable() {
  const navigate = useNavigate();
  const [cases, setCases] = useState<CaseRow[]>([
    {
      id: '#2026031006',
      patientName: 'Francis Wilson',
      patientInitials: 'FW',
      phone: '+65 9123 4567',
      tripType: 'One-way',
      vehicle: 'Unassigned',
      bookingDate: '01/06/2025',
      bookingTime: '08:30',
      pickupLocation: '175 Made Street, Central',
      status: 'Open'
    }
  ]);
  
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [caseToDelete, setCaseToDelete] = useState<string | null>(null);

  const handleView = (caseId: string) => {
    // Remove # from caseId for URL navigation
    const cleanId = caseId.replace('#', '');
    navigate(`/view-case/${cleanId}`);
  };

  const handleEdit = (caseId: string) => {
    // Remove # from caseId for URL navigation
    const cleanId = caseId.replace('#', '');
    navigate(`/edit-case/${cleanId}`);
  };

  const handleDeleteClick = (caseId: string) => {
    setCaseToDelete(caseId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (caseToDelete) {
      setCases(prevCases => prevCases.filter(c => c.id !== caseToDelete));
      toast.success('Case deleted successfully');
      setCaseToDelete(null);
    }
    setDeleteDialogOpen(false);
  };

  return (
    <div className="w-full px-[24px]">
      <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Case ID</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Patient Details</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Vehicle</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Booking Date | Time</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Pickup Location</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Status</th>
                <th className="text-left px-[16px] py-[16px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseData) => (
                <tr key={caseData.id} className="border-b border-[rgba(0,0,0,0.05)]">
                  <td className="px-[16px] py-[16px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#2160ad]">{caseData.id}</p>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <div className="flex gap-[12px] items-center">
                      <div className="bg-[#2160ad] rounded-full size-[40px] flex items-center justify-center shrink-0">
                        <p className="font-['Lato:Medium',sans-serif] text-[14px] text-white">{caseData.patientInitials}</p>
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{caseData.patientName}</p>
                        <div className="flex items-center gap-[4px]">
                          <svg className="size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <g clipPath="url(#clip0_25_3182)" id="Icon">
                              <path d={svgPathsTable.p3d16e300} id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_25_3182">
                                <rect fill="white" height="12" width="12" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">{caseData.phone}</p>
                        </div>
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">{caseData.tripType}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{caseData.vehicle}</p>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{caseData.bookingDate}</p>
                      <div className="flex items-center gap-[4px]">
                        <svg className="size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g clipPath="url(#clip0_25_3170)" id="Icon">
                            <path d="M6 3V6L8 7" id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={svgPathsTable.p3e7757b0} id="Vector_2" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_25_3170">
                              <rect fill="white" height="12" width="12" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">{caseData.bookingTime}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d={svgPathsTable.p16d66400} id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPathsTable.p26d22700} id="Vector_2" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{caseData.pickupLocation}</p>
                    </div>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <div className="inline-flex items-center justify-center bg-[#008fd2] rounded-[13.5px] h-[27px] px-[14px]">
                      <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-white">{caseData.status}</p>
                    </div>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <div className="flex gap-[8px] items-center">
                      <TableActionButton icon="view" onClick={() => handleView(caseData.id)} />
                      <TableActionButton icon="edit" onClick={() => handleEdit(caseData.id)} />
                      <TableActionButton icon="delete" onClick={() => handleDeleteClick(caseData.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">
          Showing {cases.length} of {cases.length} cases
        </p>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Case</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this case? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-[#fb2c36] hover:bg-[#d42430]">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function CasesContent() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="CaseManagement">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-auto relative rounded-[inherit] w-full">
        <PageHeader1 />
        <MetricsRow />
        <ControlsBar />
        <CasesTable />
      </div>
    </div>
  );
}

export function CasesPage() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full min-h-screen" data-name="IM Ambulance - Web Application">
      <Sidebar />
      <Section />
      <CasesContent />
    </div>
  );
}
