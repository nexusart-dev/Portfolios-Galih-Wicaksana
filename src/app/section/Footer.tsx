export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-[#2E073F] border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Design By Nexus.Art</p>
            </div>
        </div>
        </footer>
    )
}