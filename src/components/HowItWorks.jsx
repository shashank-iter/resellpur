const incentives = [
    {
      name: 'Sign Up as a Reseller',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's free to sign up and only takes a few minutes. You'll be selling in no time.",
    },
    {
      name: 'Get Verified',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "We'll need to verify your identity before you can start selling. It's easy though. Just verify with your government ID.",
    },
    {
      name: 'Start Reselling',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "Once you're verified, you can start selling. We handle all the payment processing so you can focus on what you do best.",
    },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-4">
          <div className="rounded-2xl bg-yellow-300 px-6 py-16 sm:p-16 by">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Start Reselling in 3 Easy Steps
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                        <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-lg font-medium text-gray-900">{incentive.name}</h3>
                      <p className="mt-2 text-base text-gray-800">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  