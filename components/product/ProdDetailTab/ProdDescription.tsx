import React from 'react'
import Image from "next/image"
import { ProdDescriptionProps } from './types'
export default function ProdDescription(props: ProdDescriptionProps) {
    const { description, src, title } = props
    return (
        <article>
            <Image layout='responsive' height={400} width={400} src={src} alt={title} />
            <h1>The Iconic Silhouette</h1>
        </article>
    )
}
