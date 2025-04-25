import PrimaryButton from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className='w-full h-[100dvh] py-[3%] '>
    <div className="w-[375px] bg-[#F7F8F9] border mx-auto border-gray-200 h-[680px] lg:h-[750px] px-4 lg:px-[1.5%] py-9 flex flex-col justify-start items-start">
      <h1 className="text-[#1D2226] text-[25px] lg:text-[28px] font-medium w-[188px] leading-8">Signin to your PopX account</h1>
      <p className="text-gray-500 text-[16px] lg:text-[18px] font-normal w-[232px] leading-6 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <InputField label="Email Address" />
      <InputField label="Password" type="password" />
    <div className="w-full mt-4">
    <PrimaryButton label=" Login" to="/profile" variant="gray" />
    </div>
    </div>
  </div>
  )
}

export default Login