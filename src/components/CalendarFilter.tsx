import svgPaths from "../imports/svg-egwz4y5cjb";

type FilterState = {
  [key: string]: boolean;
};

function Heading3({ filterCount }: { filterCount: number }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.75px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[75.75px]">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#2160ad] text-[16px] top-0 w-[76px]">Filters ({filterCount})</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[24px] relative rounded-[8px] shrink-0 w-[75.266px] cursor-pointer hover:bg-[rgba(33,96,173,0.05)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] py-0 relative w-[75.266px]">
        <p className="font-['Lato:Medium',sans-serif] leading-[22.857px] not-italic relative shrink-0 text-[#2160ad] text-[16px] text-nowrap whitespace-pre">Clear All</p>
      </div>
    </div>
  );
}

function Container({ filterCount, onClearAll }: { filterCount: number; onClearAll: () => void }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-between relative w-[223px]">
        <Heading3 filterCount={filterCount} />
        <Button onClick={onClearAll} />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] top-0 w-[67px]">Status (10)</p>
    </div>
  );
}

function Icon({ checked }: { checked: boolean }) {
  if (!checked) return null;
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p24a494c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan({ checked }: { checked: boolean }) {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon checked={checked} />
    </div>
  );
}

function PrimitiveButton({ checked, onClick }: { checked: boolean; onClick: (e: React.MouseEvent) => void }) {
  return (
    <div onClick={onClick} className={`${checked ? 'bg-[#2160ad]' : 'bg-white'} relative rounded-[4px] shrink-0 size-[16px] cursor-pointer`} data-name="Primitive.button">
      <div aria-hidden="true" className={`absolute border ${checked ? 'border-[#2160ad]' : 'border-gray-300'} border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-px relative size-[16px]">
        <PrimitiveSpan checked={checked} />
      </div>
    </div>
  );
}

function FilterCheckboxItem({ checked, onClick, color, label }: { checked: boolean; onClick: () => void; color: string; label: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div onClick={handleClick} className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full cursor-pointer" data-name="Container">
      <PrimitiveButton checked={checked} onClick={handleClick} />
      <div className="relative rounded-[3.35544e+07px] shrink-0 size-[12px]" style={{ backgroundColor: color }} data-name="Container">
        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
      </div>
      <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Label">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
          <p className="absolute font-['Lato:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{label}</p>
        </div>
      </div>
    </div>
  );
}

function Container21({ filters, onFilterChange }: { filters: FilterState; onFilterChange: (key: string) => void }) {
  const statusFilters = [
    { key: 'open', label: 'Open', color: '#008fd2' },
    { key: 'pendingForDispatch', label: 'Pending for Dispatch', color: '#eea61f' },
    { key: 'dispatched', label: 'Dispatched', color: '#e2cc3b' },
    { key: 'pendingForPayment', label: 'Pending for Payment', color: '#1e9e9e' },
    { key: 'pendingEscortAssignment', label: 'Pending Escort Assignment', color: '#00cfe8' },
    { key: 'pendingDetailsFromVendor', label: 'Pending Details from Vendor', color: '#c33ba8' },
    { key: 'pendingForServiceReceipt', label: 'Pending for Service Receipt', color: '#6d27b3' },
    { key: 'pendingConfirmation', label: 'Pending Confirmation', color: '#8d6e63' },
    { key: 'completed', label: 'Completed', color: '#0aab2f' },
    { key: 'cancelled', label: 'Cancelled', color: '#b40909' },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[282px] items-start relative shrink-0 w-full" data-name="Container">
      {statusFilters.map(filter => (
        <FilterCheckboxItem
          key={filter.key}
          checked={filters[filter.key]}
          onClick={() => onFilterChange(filter.key)}
          color={filter.color}
          label={filter.label}
        />
      ))}
    </div>
  );
}

function Container22({ filters, onFilterChange }: { filters: FilterState; onFilterChange: (key: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[315px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container21 filters={filters} onFilterChange={onFilterChange} />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] top-0 w-[98px]">Service Type (3)</p>
    </div>
  );
}

function ServiceTypeCheckboxItem({ checked, onClick, label }: { checked: boolean; onClick: () => void; label: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div onClick={handleClick} className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full cursor-pointer" data-name="Container">
      <PrimitiveButton checked={checked} onClick={handleClick} />
      <div className="h-[21px] relative shrink-0 w-[161.578px]" data-name="Label">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[161.578px]">
          <p className="absolute font-['Lato:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{label}</p>
        </div>
      </div>
    </div>
  );
}

function Container26({ filters, onFilterChange }: { filters: FilterState; onFilterChange: (key: string) => void }) {
  const serviceTypes = [
    { key: 'medicalTransport1Way', label: 'Medical Transport (1-way)' },
    { key: 'medicalTransport2Way', label: 'Medical Transport (2-way)' },
    { key: 'medicalTransport3Way', label: 'Medical Transport (3-way)' },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[79px] items-start relative shrink-0 w-full" data-name="Container">
      {serviceTypes.map(service => (
        <ServiceTypeCheckboxItem
          key={service.key}
          checked={filters[service.key]}
          onClick={() => onFilterChange(service.key)}
          label={service.label}
        />
      ))}
    </div>
  );
}

function Container27({ filters, onFilterChange }: { filters: FilterState; onFilterChange: (key: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Label11 />
      <Container26 filters={filters} onFilterChange={onFilterChange} />
    </div>
  );
}

function Container28({ filters, onFilterChange }: { filters: FilterState; onFilterChange: (key: string) => void }) {
  return (
    <div className="h-[451px] relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[451px] items-start relative w-[223px]">
        <Container22 filters={filters} onFilterChange={onFilterChange} />
        <Container27 filters={filters} onFilterChange={onFilterChange} />
      </div>
    </div>
  );
}

export default function CalendarFilter({ 
  filters, 
  onFilterChange, 
  onClearAll, 
  filterCount 
}: { 
  filters: FilterState; 
  onFilterChange: (key: string) => void;
  onClearAll: () => void;
  filterCount: number;
}) {
  return (
    <div className="bg-white h-full relative shrink-0 w-[256px] overflow-y-auto" data-name="CalendarFilter">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="h-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[256px]">
          <Container filterCount={filterCount} onClearAll={onClearAll} />
          <Container28 filters={filters} onFilterChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
}
