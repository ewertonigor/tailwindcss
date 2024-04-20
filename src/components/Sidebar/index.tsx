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
import InputRoot, { InputControl, InputPrefix } from '../Input'

export default function SideBar() {
  return (
    <aside className="lg: fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 ">
      <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Blend />
        <span>Untitled UI</span>
      </strong>
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>
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
