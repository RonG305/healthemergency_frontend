import React, { lazy, Suspense } from 'react'
import Loader from '../Loader'


const EmergencyList = lazy(() => import('./EmergencyList'))
const Map = lazy(() => import('./Map'))

const Emergency = () => {
  return (
    <div className=' md:flex items-center gap-2'>
      <Suspense fallback={<Loader />}>
      <EmergencyList />
      <Map key="emergency map" />

      </Suspense>
       
    </div>
  )
}

export default Emergency