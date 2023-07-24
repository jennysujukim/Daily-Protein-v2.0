import { LayoutProps } from '../../models'

function PageLayout( { children }:LayoutProps ) {
  return (
    <div className="h-layoutfull mx-auto mt-20 px-4 sm:px-12 lg:px-20">
        { children }
    </div>
  )
}

export default PageLayout