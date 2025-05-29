import Image from "next/image"

interface ProductCardProps {
  image: string
  title: string
}

export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <div className="group bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/images/shannonhydraulics.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">{title}</h3>
      </div>
    </div>
  )
}
