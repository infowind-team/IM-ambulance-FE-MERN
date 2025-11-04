interface TextFieldProps {
  label: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function TextField({ label, type = 'text', value, onChange, placeholder }: TextFieldProps) {
  return (
    <div className="content-stretch flex flex-col gap-[7.985px] w-full" data-name="Container">
      <div className="content-stretch flex h-[19.99px] items-start w-full" data-name="Label">
        <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic text-[#2160ad] text-[14px]">
          {label}
        </p>
      </div>
      <div className="h-[50.308px] relative rounded-[10px] w-full" data-name="Input">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#2160ad] outline-none focus:border-[#2160ad] focus:border-[1.5px]"
        />
      </div>
    </div>
  );
}
