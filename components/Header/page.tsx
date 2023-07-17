"use client"

import GetSize from '../../hooks/GetSize/GetSize'
import MenuMobile from '../MenuMobile/MenuMobile'
import MenuDesktop from '../MenuDesktop/MenuDesktop'

/* El header contiene 2 componentes:
** - MenuMobile
** - MenuDesktop
** Para los diferentes tipos de tamaño, debido a su diferente disposición en cada diseño.
** Se utilizó el hook GetSize, para obtener el tamaño de la pantalla, de manera dinámica.
*/

export default function Header() {

    const isMobile = GetSize()

    return (
        <>
        {isMobile.width < 797 ? <MenuMobile /> : <MenuDesktop />}
        </>
    )
}
