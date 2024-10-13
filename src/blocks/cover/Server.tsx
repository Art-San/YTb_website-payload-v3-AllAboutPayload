import React from 'react'

export default function CoverBlockServer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    // <div className=" text-center">
    <div className=" py-20 text-center">
      <h1 className=" text-3xl font-bold">{title}</h1>
      <p className=" text-xl">{subtitle}</p>
    </div>
  )
}
