import React, { useEffect } from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getIncomingServices } from '../Redux/Actions/servicesActions'
// eslint-disable-next-line
import { getVehiclesByUser } from '../Redux/Actions/vehiclesActions'
export default function DriverLayout () {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user, services } = useSelector(state => state)
  useEffect(() => {
    if (!services.length) {
      dispatch(getIncomingServices(user.id))
    }
  }, [user])
  useEffect(() => {
    if (services.length) {
      toast.warn('Tienes servicios activos/pendientes por favor revisa tu panel de servicios.')
    }
  }, [services])
  return (
    <div className={'md:shadow-2xl bg-[#F7F8FA] h-screen flex items-center flex-col'}>
      <Nav location={'Home'}/>
      <ToastContainer/>
      <div className={'h-5/6 flex flex-col justify-center w-full'}>
        <div className={'h-full -mt-14'}>
          <h2 className={'text-black font-bold text-2xl m-5 pt-[2rem]'}>Bienvenido! {user.name}</h2>
          <div className={'flex w-full items-center justify-center flex-col pl-3 pr-3'}>
            <div
              onClick={() => router.push('/Vehicles')}
              className={'cursor-pointer flex items-center justify-center text-white bg-Ride w-full rounded-3xl h-[130px] m-3'}>
              <h2 className={'text-2xl font-bold bg-black p-1 rounded-3xl'}>Ver Vehículos</h2>
            </div>
            <div
              onClick={() => router.push('/AddVehicle')}
              className={'cursor-pointer flex items-center justify-center text-white bg-Garage w-full rounded-3xl h-[130px] m-3'}>
              <h2 className={'text-2xl font-bold bg-black p-1 rounded-3xl text-center'}>Agregar Vehículo</h2>
            </div>
            <div
              onClick={() => router.push('/FuecForm')}
              className={'cursor-pointer flex items-center justify-center text-white bg-Reserve w-full rounded-3xl h-[130px] m-3'}>
              <button className={'text-2xl font-bold bg-black p-1 rounded-3xl'}>Crear Servicio</button>
            </div>
          </div>
        </div>
        {/* <div> */}
        {/*  <h2 className={'text-black font-bold text-2xl m-5'}>Your actives rides</h2> */}
        {/*  <div> */}
        {/*    {viajes.slice(0, 1).map((viaje, index) => ( */}
        {/*      <div key={index} className={'flex flex-col items-center justify-center'}> */}
        {/*        <div className={'bg-white w-full m-3 rounded p-3 flex'}> */}
        {/*          <div> */}
        {/*            <div className={'bg-gray-500 w-[66px] h-[66px] rounded-[50%] mr-3'}></div> */}
        {/*          </div> */}
        {/*          <div className={'w-full flex flex-col justify-center'}> */}
        {/*            <div className={'flex items-center justify-between m-1'}> */}
        {/*              <h3 className={'font-bold'}>Jhon Smith</h3> */}
        {/*              <h3 className={'bg-orange-400 rounded-2xl text-white pl-2 pr-2'}>Pending</h3> */}
        {/*            </div> */}
        {/*            <div className={'flex items-center justify-evenly'}> */}
        {/*              <div className={'flex items-center w-full'}> */}
        {/*                <CalendarIcon className={'w-[16px]'}/> */}
        {/*                <h3>Today</h3> */}
        {/*              </div> */}
        {/*              <div className={'flex items-center w-full'}> */}
        {/*                <ClockIcon className={'w-[16px]'}/> */}
        {/*                <h3>Pending</h3> */}
        {/*              </div> */}
        {/*              <div className={'flex items-center w-full '}> */}
        {/*                <BanknotesIcon className={'w-[16px]'}/> */}
        {/*                <h3>$200.00</h3> */}
        {/*              </div> */}
        {/*            </div> */}
        {/*          </div> */}
        {/*        </div> */}
        {/*      </div>))} */}
        {/*  </div> */}
        {/* </div> */}
      </div>
      <div
        className={'bg-[#5b211f] w-full rounded-t-3xl mt-7 p-4 flex-grow flex-col items-center justify-center'}>
        <div className={'w-full'}>
          <div>
            <h2 onClick={() => router.push('client/travels')}
                className={'hover:bg-blue-500 w-full flex items-center justify-center rounded-[25px] h-[50px] bg-[white] text-gray-900 font-bold'}>Ver
              historial de servicios</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
