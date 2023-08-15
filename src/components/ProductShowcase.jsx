import { StarIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Smartwatch',
    price: '₹ 1299' ,
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://m.media-amazon.com/images/I/61S9aVnRZDL._SX522_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Traval Backpack',
    price: '₹ 699',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://m.media-amazon.com/images/I/91cSvgf7TSL._SL1500_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Leather Shoes',
    price: '₹ 1699',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://m.media-amazon.com/images/I/71u78BeE5TL._UX695_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Lenovo Ideapad Slim 3',
    price: '₹ 16,999',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://m.media-amazon.com/images/I/6177wJ0CIrL._SL1000_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 1,
    name: 'Smartwatch',
    price: '₹ 1299' ,
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://m.media-amazon.com/images/I/61S9aVnRZDL._SX522_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Traval Backpack',
    price: '₹ 699',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://m.media-amazon.com/images/I/91cSvgf7TSL._SL1500_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Leather Shoes',
    price: '₹ 1699',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://m.media-amazon.com/images/I/71u78BeE5TL._UX695_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Lenovo Ideapad Slim 3',
    price: '₹ 16,999',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://m.media-amazon.com/images/I/6177wJ0CIrL._SL1000_.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductShowcase() {
  return (
    <div className="bg-white mt-2">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-1 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6 hover:scale-105 transition duration-150 ease-in-out">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-[300px] w-full object-cover object-center "
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
