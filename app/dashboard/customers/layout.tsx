
import { PhotoProvider } from '@/app/ui/customers/photo-context';
 
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <PhotoProvider>
      <div className="fixed top-0 flex h-screen flex-col md:flex-row md:overflow-hidden ">      
        <div className="flex-grow px-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </PhotoProvider>   
  );
}
