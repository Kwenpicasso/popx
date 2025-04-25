import PrimaryButton from "../components/Button"


const HomePage = () => {
  return (
    <div className='w-full h-[100dvh] py-[3%] '>
      <div className="w-[375px] bg-[#F7F8F9] border mx-auto border-gray-200 h-[680px] lg:h-[750px] px-4 lg:px-[1.5%] py-9 flex flex-col justify-end items-start">
        <h1 className="text-[#1D2226] text-[25px] lg:text-[28px] font-medium w-[232px]">Welcome to PopX</h1>
        <p className="text-gray-500 text-[16px] lg:text-[18px] font-normal w-[232px] leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="w-full space-y-2 mt-6">
          <PrimaryButton label="Create Account" to="/register" variant="primary" />
          <PrimaryButton label="Already Registered? Login" to="/login" variant="secondary" />
        </div>
      </div>
    </div>
  )
}


export default HomePage