import { LayoutProps } from '../../models'

function PageLayout( { children }: LayoutProps ) {
  return (
    <div className="h-layoutfull mx-auto mt-16 pt-4 py-10 px-4 sm:px-12 lg:px-20 overflow-y-scroll">
        { children }
    </div>
  )
}

export default PageLayout