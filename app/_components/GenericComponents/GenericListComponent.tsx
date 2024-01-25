import React from "react"
type ListProps<Item> = {
items : Item[]
getKey: (item : Item) => React.Key
renderItem: (item : Item)=> React.ReactNode
}
function GenericListComponent<Item>({ items, getKey, renderItem } : ListProps<Item>) {
  return (
    <div>
        {
            items.map(item => (
                <div key={getKey(item)}>{renderItem(item)}</div>
            ))
        }
    </div>
  )
}

export default GenericListComponent