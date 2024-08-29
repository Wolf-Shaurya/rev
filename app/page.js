import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="cen">
    <Image
    src='/1.jpg'
    height={250}
    width={250}
    />
    </div>
    <a href="/1.jpg" download={1} ><button type="button" class="text-white ml-48 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download</button></a>

    <div className="cen">
    <Image
    src='/2.jpg'
    height={250}
    width={250}
    />
    </div>
   <a href="/1.jpg" download={1} > <button type="button" class="text-white ml-48 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download2</button></a>

    
    </>
  );
}
