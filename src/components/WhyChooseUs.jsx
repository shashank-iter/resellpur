import { ChatBubbleOvalLeftEllipsisIcon, UserCircleIcon, ShoppingCartIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Verified Resellers',
    description:
      'Resellers on our platfrom are verified and trustable. We have a strict verification process to ensure that you get the best quality products.',
    icon: UserCircleIcon,
  },
  {
    name: 'Secure Payments',
    description:
      'We have a secure payment gateway to ensure that your money is safe and secure. We also have a refund policy in case you are not satisfied with the product.',
    icon: CreditCardIcon,
  },
  {
name: 'Customer Support',
    description:
      'We have a dedicated customer support team to help you with any queries you have. You can contact us via email or chat.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Best Quality Products',
    description:
      'We have a strict quality check process to ensure that you get the best quality products. We also have a return policy in case you are not satisfied with the product',
    icon: ShoppingCartIcon,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Resellpur?
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
