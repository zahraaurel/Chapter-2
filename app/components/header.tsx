
import Link from 'next/link';


const Header = () => {
 return (
   <header className="bg-emerald-950 text-soft-brown py-4 sticky top-0">
     <nav className="container mx-auto flex justify-between items-center">
       <Link href="/" className="text-2xl font-bold">
         Zahra Aurellia
       </Link>
       <ul className="flex space-x-4">
         <li>
           <Link href="/" className="hover:text-yellow-400">
             Home
           </Link>
         </li>
         <li>
           <Link href="/portofolio" className="hover:text-yellow-400">
             Portfolio
           </Link>
         </li>
         <li>
           <Link href="/blog" className="hover:text-yellow-400">
                Blog
           </Link>
         </li>
        
       </ul>
     </nav>
   </header>
   
 );
};


export default Header;

