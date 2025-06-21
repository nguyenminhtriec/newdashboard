
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100 dark:bg-gray-800 dark:text-dtext">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-lsurface dark:bg-dsurface dark:text-gray-100 ">
        {children}
      </div>
    </div>
  )
}
