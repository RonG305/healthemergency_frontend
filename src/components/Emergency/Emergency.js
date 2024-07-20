import React, { lazy, Suspense, useEffect, useState } from 'react'
import Loader from '../Loader'
import { API_BASE_URL } from '../../apiConfig'
import Map from './Map'


const EmergencyList = lazy(() => import('./EmergencyList'))


const Emergency = () => {
  const [emergencies,setEmergencies] = useState([])


  useEffect(() => {
    const getEmergencies = async() => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/emergency/get_emergencies/`)
        const data = await response.json()
        setEmergencies(data)
        console.log(data)

      } catch(error) {
        console.log("An error occured while fetching emergencies", error)
      }
    }

    getEmergencies()
  }, [])

   
  return (
    <div className=' md:flex items-center gap-2'>
      <Suspense fallback={<Loader />}>
      <EmergencyList
        emergencies={emergencies}
      />
      <Map 
        emergencies={emergencies}
        key="emergency map" />

      </Suspense>
       
    </div>
  )
}

export default Emergency