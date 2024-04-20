import { TabsTrigger } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export default function TabItem({
  value,
  title,
  isSelected = false,
}: TabItemProps) {
  return (
    <TabsTrigger
      value={value}
      className="data-[state=active]: group relative px-1 pb-4 text-sm text-zinc-500 outline-none hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
    >
      <span className="group-focus-visible::ring-2 group-focus-visible::ring-offset-4 whitespace-nowrap rounded group-focus:ring-violet-400">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </TabsTrigger>
  )
}
