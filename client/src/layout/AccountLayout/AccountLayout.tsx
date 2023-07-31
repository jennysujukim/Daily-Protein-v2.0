import { LayoutProps } from "../../models"

function AccountLayout( { children }: LayoutProps ) {
  return (
    <>  
      <div className="h-screen flex justify-center items-center">
        { children }
      </div>
    </>
  )
}

export default AccountLayout