import React, { useState } from 'react'

const InputField = ({ label, type = "text", star }: { label: string; type?: string; star?:string }) => {
    const [focused, setFocused] = useState(false);
  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 top-2 text-[13px] transition-all bg-[#F7F8F9] z-50 py-1.5 pl-1.5 pr-3  text-[#642AF5]`}
      >
        {label}{star == 'true' && (<span className="text-[#DD4A3D]">*</span>)}
      </label>
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full mt-6 p-3 border rounded-md text-[13px] h-[40px]  text-[#919191] outline-none ${
          focused ? 'border-[#6C25FF]' : 'border-gray-400'
        }`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  )
}

export default InputField