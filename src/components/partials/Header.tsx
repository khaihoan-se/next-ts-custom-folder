import React from 'react'
import Logo from '../shared/Logo'

const Header = () => {
    return (
        <div className="w-full h-[100px] text-sm text-[#999] leading-[34px] fixed z-[12] top-0 transition-[height] duration-[2000ms] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] delay-0">
            <div className='flex flex-wrap items-center	justify-between	h-full mx-auto relative min-desktop:w-[1268px] min-tablet:w-[896px] max-tablet:w-[360px] max-mobile-s:w-full'>
                header
            </div>
        </div>
    )
}

export default Header