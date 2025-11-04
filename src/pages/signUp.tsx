import { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout';
import { useRouter } from 'next/router';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up with:', { username, email, password, confirmPassword });
    // Navigate to calendar after successful sign up
    router.push('/login');
  };

  return (
    <AuthLayout>
      <div className="bg-white box-border content-stretch flex flex-col gap-[23.992px] pb-0 pt-[31.996px] px-[31.996px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[383.986px]" data-name="Container">
        {/* Title */}
        <div className="content-stretch flex h-[35.998px] items-start relative shrink-0 w-full" data-name="Heading 1">
          <p className="basis-0 font-['Lato:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px] text-center">Sign Up</p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => handleSignUp(e)} className="w-full">
          <div className="h-[505.09px] relative shrink-0 w-full" data-name="Container">
            {/* Username Field */}
            <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[70.299px] items-start left-0 top-0 w-[319.994px]" data-name="Container">
              <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Username</p>
              </div>
              <div className="h-[46.325px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#364153] outline-none focus:border-[#2160ad] focus:border-[1.5px]"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[70.299px] items-start left-0 top-[86.29px] w-[319.994px]" data-name="Container">
              <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Email</p>
              </div>
              <div className="h-[46.325px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#364153] outline-none focus:border-[#2160ad] focus:border-[1.5px]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[70.299px] items-start left-0 top-[172.57px] w-[319.994px]" data-name="Container">
              <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Password</p>
              </div>
              <div className="h-[46.325px] relative rounded-[10px] shrink-0 w-full" data-name="Password Input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#364153] outline-none focus:border-[#2160ad] focus:border-[1.5px]"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[70.299px] items-start left-0 top-[258.86px] w-[319.994px]" data-name="Container">
              <div className="content-stretch flex h-[19.99px] items-start relative shrink-0 w-full" data-name="Label">
                <p className="basis-0 font-['Lato:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Confirm Password</p>
              </div>
              <div className="h-[46.325px] relative rounded-[10px] shrink-0 w-full" data-name="Password Input">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="absolute inset-0 w-full h-full rounded-[10px] border-[1.18px] border-gray-200 border-solid px-[12px] font-['Lato:Regular',sans-serif] text-[14px] text-[#364153] outline-none focus:border-[#2160ad] focus:border-[1.5px]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="absolute h-[159.942px] left-0 top-[345.15px] w-[319.994px]" data-name="Container">
              {/* Sign Up Button */}
              <button
                type="submit"
                className="absolute bg-gradient-to-b from-[#2160ad] h-[47.984px] left-0 rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] to-[#1a4d8f] top-[15.99px] w-[319.994px] cursor-pointer"
                data-name="Button"
              >
                <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[160.06px] not-italic text-[16px] text-center text-nowrap text-white top-[12.35px] translate-x-[-50%] whitespace-pre">Sign Up</p>
              </button>

              {/* "or" text */}
              <div className="absolute content-stretch flex h-[17.704px] items-start left-[153.36px] top-[79.5px] w-[13.278px]" data-name="Text">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap whitespace-pre">or</p>
              </div>

              {/* Log In Button */}
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="absolute h-[47.984px] left-0 rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[111.96px] w-[319.994px] cursor-pointer"
                data-name="Button"
                style={{ backgroundImage: "linear-gradient(rgb(33, 96, 173) 0%, rgb(26, 77, 143) 100%), linear-gradient(90deg, rgb(74, 144, 226) 0%, rgb(74, 144, 226) 100%)" }}
              >
                <p className="absolute font-['Lato:Regular',sans-serif] leading-[24px] left-[calc(50%-21.878px)] not-italic text-[16px] text-nowrap text-white top-[12.35px] whitespace-pre">Log In</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
