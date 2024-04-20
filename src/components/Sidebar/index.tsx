'use client'

import {
  BarChart,
  Blend,
  CheckSquare,
  Cog,
  Flag,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import NavItem from './NavItem'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'
import InputRoot, { InputControl, InputPrefix } from '../Input'
import * as Collpasible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export default function SideBar() {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          <Blend />
          <span>Untitled UI</span>
        </strong>
        <Collpasible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collpasible.Trigger>
      </div>
      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
