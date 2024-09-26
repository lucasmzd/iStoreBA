import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="flex justify-center space-x-4">
          <Link 
            href="/dashboard" 
            className="text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            Profile
          </Link>
          <Link 
            href="/dashboard/orders" 
            className="text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            Orders
          </Link>
        </div>
      </nav>
      <main className="">
        {children}
      </main>
    </div>
  );
}