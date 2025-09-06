import Image from 'next/image'

interface DiscoverCardProps {
  imageSource: string
  title: string
  description: string
}

export default function DiscoverCard(props: DiscoverCardProps) {
  const { imageSource, title, description } = props

  return (
    <div className="rounded-lg bg-gray-50 px-4 py-12 shadow-lg md:h-72">
      <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-gray-700 p-[0.6rem]">
        <Image
          src={imageSource}
          alt={title}
          width={30}
          height={30}
          className="h-full w-full"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>

      <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
  )
}
