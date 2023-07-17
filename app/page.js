"use client"

import Banner from "../components/Banner/Banner"
import Vitrine from '../components/Vitrine/Vitrine'
import Newsletter from '../components/Newsletter/Newsletter'

/* En la página principal, agrego los componentes que va a tener la sección:
** - Banner
** - Vitrina
** - Newsletter
*/

export default function Home() {

  return (
    <>
      <Banner />
      <Vitrine />
      <Newsletter />
    </>
  )
}
