import Avatar from '../assets/female.png'
import Camera from '../assets/camera.png'
const Profile = () => {
  return (
    <div className='w-full h-[100dvh] py-[3%] '>
    <div className="w-[375px] bg-[#F7F8F9] border mx-auto relative border-gray-200 h-[680px] lg:h-[750px] flex flex-col justify-start items-start">
<h1 className="w-full h-[68px] px-[4%] bg-white text-[16px] lg:text-[18px] text-black text-left flex justify-start items-center">
Account Settings
</h1>
<div className="w-full px-[4%] flex flex-col justify-start items-start gap-6 ">
    <div className="w-full flex  gap-4 mt-6">
    <div className="rounded-full w-[76px] h-[76px] flex justify-center items-center bg-pink-300 relative">
        <img
        src={Avatar}
        alt='image'
        className='w-full h-full object-cover'
        />
        <div className="w-[21px] h-[21px] flex justify-center items-center rounded-full absolute right-[-2px] bottom-3 bg-[#6C25FF]">
        <img
        src={Camera}
        alt='image'
        className='w-full h-full object-cover'
        />
        </div>
    </div>
    <div className="flex flex-col  justify-start items-start">
    <h1 className="text-[15px] font-medium text-[#1D2226]">Marry Doe</h1>
    <h1 className="text-[14px] font-normal text-[#1D2226]">Marry@Gmail.Com</h1>
    </div>
    </div>
    <h1 className="text-[14px] font-normal text-[#1D2226]">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</h1>
</div>
<div className="w-full border border-dashed border-[#CBCBCB] h-[1px] mt-4"/>
<div className="w-full border border-dashed absolute bottom-8 border-[#CBCBCB] h-[1px] mt-4"/>
    </div>
  </div>
  )
}

export default Profile