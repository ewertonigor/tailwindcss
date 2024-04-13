import { Blend, Search } from 'lucide-react'

export default function SideBar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Blend />
        <span>Untitled UI</span>
      </strong>
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}