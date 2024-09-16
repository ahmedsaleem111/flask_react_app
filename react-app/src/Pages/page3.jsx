import { useState } from "react"
import { Button } from "../Components/Button"
import { StoreItem } from "../Components/StoreItem"

export function Page3() {

    const [showItem, setShowItem] = useState(false)

    function HandleShow({show}) {
      if (show) {
        return (
          <StoreItem item={item1} />
        )
      }
    }
  
    const item1 = {title: "Bat", desc: "Metal bats for baseball", price: 50}

    return (
      <>
        <Button show={showItem} setShow={setShowItem}/>
        <HandleShow show={showItem}/>
      </>
    )

}