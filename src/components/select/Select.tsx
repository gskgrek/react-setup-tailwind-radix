import React, { FC, ReactNode } from 'react'
import classnames from 'classnames'
import * as RSelect from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import './Select.css'

type ItemProps = RSelect.SelectItemProps & React.RefAttributes<HTMLDivElement> & {
  children?: ReactNode | undefined
}

const Item: FC<ItemProps> = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <RSelect.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
    <RSelect.ItemText>{children}</RSelect.ItemText>
  </RSelect.Item>
))

function Select() {
  return (
    <RSelect.Root>
    <RSelect.Trigger className="SelectTrigger">
      <RSelect.Value placeholder="Select a fruit…" />
      <RSelect.Icon className="SelectIcon">
        <ChevronDownIcon />
      </RSelect.Icon>
    </RSelect.Trigger>
    <RSelect.Portal>
      <RSelect.Content className="SelectContent">
        <RSelect.ScrollUpButton className="SelectScrollButton">up</RSelect.ScrollUpButton>
        <RSelect.Viewport className="SelectViewport">
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
        <RSelect.ScrollDownButton className="SelectScrollButton">down</RSelect.ScrollDownButton>
      </RSelect.Content>
    </RSelect.Portal>
  </RSelect.Root>
  )
}

export default Select
