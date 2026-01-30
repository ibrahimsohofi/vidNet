import { Link } from 'react-router-dom'

const DownloaderPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-1000 p-6'>
            <div className='max-w-md w-full bg-white rounded-xl border p-8 text-center space-y-5'>
                
                {/* Status Badge */}
                <span className='inline-block bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-200'>
                    IN DEVELOPMENT
                </span>
                
                {/* Main Content */}
                <div>
                    <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                        Page Coming Soon
                    </h1>
                    <p className='text-gray-600'>
                        We're working hard to bring you this feature. The downloader page is currently being developed and will be available shortly.
                    </p>
                </div>
                
                {/* Progress Indicator */}
                <div className='space-y-2'>
                    <p className='text-sm text-gray-500'>Development in progress...</p>
                </div>
                
                {/* Return Button */}
                <Link 
                    to="/" 
                    className='inline-block w-full bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors active:scale-95'
                >
                    ← Back to Home
                </Link>
                
               
            </div>
        </div>
    )
}

export default DownloaderPage