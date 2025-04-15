import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-zinc-900/80 rounded-xl p-8 border border-zinc-800 hover:border-yellow-400 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-400/5">
      <div className="w-16 h-16 rounded-xl bg-yellow-400 flex items-center justify-center mb-6 text-black group-hover:bg-yellow-500 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
