import {
  BarChart,
  Blend,
  CheckSquare,
  Cog,
  Flag,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import NavItem from './NavItem'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Blend />
        <span>Untitled UI</span>
      </strong>
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem icon={Blend} title="Home" />
        <NavItem icon={BarChart} title="Dashboard" />
        <NavItem icon={SquareStack} title="Projects" />
        <NavItem icon={CheckSquare} title="Tasks" />
        <NavItem icon={Flag} title="Reporting" />
        <NavItem icon={Users} title="Users" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem icon={LifeBuoy} title="Suport" />
          <NavItem icon={Cog} title="Settings" />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
