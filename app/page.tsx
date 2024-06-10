// 'use client'

// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'
// import { Html } from '@react-three/drei'

// const ShaderGradient = dynamic(() => import('shadergradient').then((mod) => mod.ShaderGradient), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='w-96 h-96 flex items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })

// export default function Page() {
//   return (
//     <View className='w-full h-full'>
//       <Suspense fallback={<p>Loading feed...</p>}>
//         <ShaderGradient
//           control='query'
//           urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
//         >
//           <Html>
//           </Html>
//         </ShaderGradient>
//       </Suspense>
//     </View>
//     // <View className='w-full h-full relative'>
//     //   <Suspense fallback={null}>
//     //     <ShaderGradient
//     //       control='query'
//     //       urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
//     //     />
//     //     <Html>
//     //       <h1 className='text-white'>HELLO</h1>
//     //     </Html>
//     //   </Suspense>
//     // </View>
//   )
// }

// 'use client'

// import dynamic from 'next/dynamic'
// import { useEffect, useState, Suspense } from 'react'
// import { Html } from '@react-three/drei'

// const ShaderGradient = dynamic(() => import('shadergradient').then((mod) => mod.ShaderGradient), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='w-96 h-96 flex items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })

// export default function Page() {
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     setLoaded(true)
//   }, [])

//   return (
//     <View className='w-full h-full relative'>
//       <Suspense fallback={null}>
//         {loaded && (
//           <ShaderGradient
//             control='query'
//             urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
//           />
//         )}
//         {loaded && (
//           <Html>
//             <h1 className='text-white'>HELLO</h1>
//           </Html>
//         )}
//       </Suspense>
//     </View>
//   )
// }

// 'use client'

// import dynamic from 'next/dynamic'
// import { useEffect, useState, Suspense } from 'react'
// import { Html } from '@react-three/drei'

// const ShaderGradient = dynamic(() => import('shadergradient').then((mod) => mod.ShaderGradient), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='w-96 h-96 flex items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })

// export default function Page() {
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     setLoaded(true)
//     // Trigger a resize event after the component has loaded
//     setTimeout(() => {
//       window.dispatchEvent(new Event('resize'))
//     }, 100)
//   }, [])

//   return (
//     <View className='w-full h-full relative'>
//       <Suspense fallback={null}>
//         {loaded && (
//           <ShaderGradient
//             control='query'
//             urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
//           />
//         )}
//         {loaded && (
//           <Html>
//             <h1 className='text-white'>HELLO</h1>
//           </Html>
//         )}
//       </Suspense>
//     </View>
//   )
// }

'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState, Suspense } from 'react'
import { Html } from '@react-three/drei'

const ShaderGradient = dynamic(() => import('shadergradient').then((mod) => mod.ShaderGradient), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='w-96 h-96 flex items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    // Trigger a resize event after the component has loaded
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }, [])

  return (
    <View className='w-full h-full relative'>
      <Suspense fallback={null}>
        {loaded && (
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
          />
        )}
        {loaded && (
          <Html>
            <h1 className='text-white'>HELLO</h1>
          </Html>
        )}
      </Suspense>
    </View>
  )
}
