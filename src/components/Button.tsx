import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

interface PrimaryButtonProps {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'gray'
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, to, variant = 'primary' }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className={clsx(
        'w-full h-[46px] rounded-[6px] text-[14px] lg:text-[16px] flex justify-center items-center font-medium cursor-pointer',
        {
          'bg-[#6C25FF] text-white': variant === 'primary',
          'bg-[#6C25FF4B] text-[#1D2226]': variant === 'secondary',
          'bg-[#CBCBCB] text-white': variant === 'gray'
        }
      )}
    >
      {label}
    </button>
  )
}

export default PrimaryButton
