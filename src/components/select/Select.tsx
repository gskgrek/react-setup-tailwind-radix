import React, { FC, ReactNode } from 'react'
import * as RSelect from '@radix-ui/react-select'
import icon from './icon.svg'

type ItemProps = RSelect.SelectItemProps & React.RefAttributes<HTMLDivElement> & {
  children?: ReactNode | undefined
}

const Item: FC<ItemProps> = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <RSelect.Item className="relative cursor-default select-none truncate py-2 pl-3 pr-9 text-gray-900 data-state-checked:font-semibold data-state-checked:bg-gray-100" {...props} ref={forwardedRef}>
    <RSelect.ItemText>{children}</RSelect.ItemText>
  </RSelect.Item>
))

function Select() {
  return (
    <div className="relative mt-1 w-52">
      <RSelect.Root>
        <RSelect.Trigger className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
          <RSelect.Value className="block truncate" placeholder="Select a fruit…" />
          <RSelect.Icon className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <img src={icon} className="h-5 w-5 text-gray-400" alt="icon" />
          </RSelect.Icon>
        </RSelect.Trigger>
        <RSelect.Content className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <RSelect.ScrollUpButton>up</RSelect.ScrollUpButton>
          <RSelect.Viewport>
            <Item value="apple">Apple</Item>
            <Item value="banana">Banana</Item>
            <Item value="blueberry">Blueberry</Item>
            <Item value="grapes">Grapes</Item>
            <Item value="pineapple">Pineapple</Item>
            <Item value="aubergine">Aubergine</Item>
            <Item value="broccoli">Broccoli</Item>
            <Item value="carrot">Carrot </Item>
            <Item value="courgette">Courgette</Item>
            <Item value="leek">leek</Item>
            <Item value="beef">Beef</Item>
            <Item value="chicken">Chicken</Item>
            <Item value="lamb">Lamb</Item>
            <Item value="pork">Pork</Item>
          </RSelect.Viewport>
          <RSelect.ScrollDownButton>down</RSelect.ScrollDownButton>
        </RSelect.Content>
      </RSelect.Root>
    </div>
  )
}

export default Select
