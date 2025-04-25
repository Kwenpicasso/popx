import { useState } from "react";
import PrimaryButton from "../components/Button";
import InputField from "../components/InputField";

type AgencyOption = "yes" | "no" | null;
const CreateAccount = () => {
  const [isAgency, setIsAgency] = useState<AgencyOption>(null);

  return (
    <div className="w-full h-[100dvh] py-[3%]">
      <div className="w-[375px] bg-[#F7F8F9] relative border mx-auto border-gray-200 h-[680px] lg:h-[750px] px-4 lg:px-[1.5%] py-9 flex flex-col justify-start items-start">
        <h1 className="text-[#1D2226] text-[25px] lg:text-[28px] font-medium w-[188px] leading-8">
          Create your PopX account
        </h1>

        <div className="flex flex-col justify-between flex-grow w-full mt-0">
          <div className="flex flex-col ">
            <InputField label="Full Name" star="true" />
            <InputField label="Phone number" star="true" />
            <InputField label="Email address" star="true" />
            <InputField label="Password" type="password" star="true" />
            <InputField label="Company name" />

            {/* Agency checkbox */}
            <div className="w-full flex flex-col mt-3">
              <h1 className="text-[13px] text-[#1D2226]">
                Are you an Agency?<span className="text-[#DD4A3D]">*</span>
              </h1>

              <div className="w-full flex justify-start items-start gap-3 mt-3">
                {/* YES Option */}
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer"
                  onClick={() => setIsAgency("yes")}
                >
                  <div
                    className={`w-[22px] h-[22px] rounded-full border flex justify-center items-center ${
                      isAgency === "yes" ? "border-[#6C25FF]" : "border-[#919191]"
                    }`}
                  >
                    {isAgency === "yes" && (
                      <div className="w-[12px] h-[12px] rounded-full bg-[#6C25FF]" />
                    )}
                  </div>
                  <h1 className="text-[14px] font-normal text-black">Yes</h1>
                </div>

                {/* NO Option */}
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer"
                  onClick={() => setIsAgency("no")}
                >
                  <div
                    className={`w-[22px] h-[22px] rounded-full border flex justify-center items-center ${
                      isAgency === "no" ? "border-[#6C25FF]" : "border-[#919191]"
                    }`}
                  >
                    {isAgency === "no" && (
                      <div className="w-[12px] h-[12px] rounded-full bg-[#6C25FF]" />
                    )}
                  </div>
                  <h1 className="text-[14px] font-normal text-black">No</h1>
                </div>
              </div>
            </div>
          </div>

          <PrimaryButton
            label="Create Account"
            to="/profile"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
