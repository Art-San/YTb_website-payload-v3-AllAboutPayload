import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })

  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <div className=" bg-gray-500 ">
      <div className="  py-12 max-w-5xl mx-auto flex items-center justify-between w-full">
        <div className="relative w-64 h-20  ">
          <Image alt={header.logo.alt} src={header.logo.url} fill className=" object-contain" />
        </div>
        <div>
          {header.nav.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link ? item.link : 'jfj'}
                className=" text-white text-lg mx-4"
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
