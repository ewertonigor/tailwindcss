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
      className="data-[state=active]: relative px-1 pb-4 text-sm text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </TabsTrigger>
  )
}
