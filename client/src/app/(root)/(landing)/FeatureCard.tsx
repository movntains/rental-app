import Image from 'next/image'
import Link from 'next/link'

interface FeatureCardProps {
  imageSource: string
  title: string
  description: string
  linkText: string
  linkUrl: string
}

export default function FeatureCard(props: FeatureCardProps) {
  const { imageSource, title, description, linkText, linkUrl } = props

  return (
    <div className="text-center">
      <div className="mb-4 flex h-48 items-center justify-center rounded-lg p-4">
        <Image
          src={imageSource}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-contain"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>

      <p className="mb-4">{description}</p>

      <Link
        href={linkUrl}
        className="inline-block rounded border border-gray-500 px-4 py-2 hover:bg-gray-100"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  )
}
