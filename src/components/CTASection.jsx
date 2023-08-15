/* This example requires Tailwind CSS v3.0+ */
export default function CTASection() {
    return (
      <div className="bg-yellow-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-relaxed">
            Ab India Karega Resell.
            <br />
            Kyu karna fikar, sb kuch bikega on Resellpur!
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Reselling
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  