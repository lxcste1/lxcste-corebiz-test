"use client"

import GetSize from '../../hooks/GetSize/GetSize'
import MenuMobile from '../MenuMobile/MenuMobile'
import MenuDesktop from '../MenuDesktop/MenuDesktop'

export default function Header() {

    const isMobile = GetSize()

    return (
        <>
        {isMobile.width < 797 ? <MenuMobile /> : <MenuDesktop />}
        </>
    )
}
