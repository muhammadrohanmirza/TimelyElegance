import BannerSlider from '@/components/banner_slider'
import CupleWatchCollection from '@/components/home-component/cuple-watch-collection'
import LuxuryWatchCollection from '@/components/home-component/luxury-watch-collection'
import MenWatchCollection from '@/components/home-component/men-watch-collection'
import WomenWatchCollection from '@/components/home-component/women-watch-collection'
import React from 'react'
import SmartWatchCollection from '@/components/home-component/smart-watch-collection'

export default function page() {

  return (
   <>
   <BannerSlider/>
    <div className="flex flex-col items-center w-full">
    <div className="w-full max-w-[1440px]">
    <MenWatchCollection />
    <WomenWatchCollection />
    <CupleWatchCollection />
    <SmartWatchCollection />
    <LuxuryWatchCollection />
    </div>
    </div>
   </>
  )
}
