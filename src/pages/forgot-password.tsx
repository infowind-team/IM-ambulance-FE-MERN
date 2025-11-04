import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthLayout } from '../components/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage, router]);

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Verify email:', email);
    setShowSuccessMessage(true);
  };

  const handleLogIn = () => {
    router.push('/login');
  };

  return (
    <AuthLayout>
      <div className="bg-white box-border content-stretch flex flex-col gap-[31.996px] pb-0 pt-[31.996px] px-[31.996px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[383.986px]" data-name="Container">
        {/* Title */}
        <div className="h-[31.977px] relative shrink-0 w-full" data-name="Heading 1">
          <p className="absolute font-['Lato:SemiBold',sans-serif] leading-[32px] left-[160.38px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Forgot Password?</p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => handleVerify(e)} className="w-full">
          <div className="content-stretch flex flex-col gap-[23.992px] h-[198.263px] items-start relative shrink-0 w-full" data-name="Container">
            {/* Email Input */}
            <div className="content-stretch flex flex-col gap-[7.985px] h-[78.284px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Enter your email</p>
              </div>
              <div className="h-[50.308px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={showSuccessMessage}
                  className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#364153] outline-none focus:border-[#2160ad] focus:border-[1.5px] disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Remember Password Link */}
            <div className="h-[24.011px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[138.94px] not-italic text-[#4a5565] text-[14px] text-center top-[2.54px] translate-x-[-50%] w-[172px]">Remember your password?</p>
              <button
                type="button"
                onClick={handleLogIn}
                className="absolute h-[24.011px] left-[224.04px] top-0 w-[43.005px] cursor-pointer"
                data-name="Button"
              >
                <p className="absolute font-['Lato:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#4a90e2] text-[16px] text-nowrap top-[0.36px] whitespace-pre">Log In</p>
              </button>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={showSuccessMessage}
              className="bg-gradient-to-b from-[#2160ad] h-[47.984px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#1a4d8f] w-full cursor-pointer active:scale-95 transition-transform duration-150 disabled:cursor-not-allowed disabled:active:scale-100"
              data-name="Button"
            >
              <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[50%] not-italic text-[16px] text-center text-white top-[12.35px] translate-x-[-50%] whitespace-nowrap">
                {showSuccessMessage ? 'Reset link sent! Redirecting…' : 'Verify'}
              </p>
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
