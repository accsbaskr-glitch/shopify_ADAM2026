import {useLoaderData, useNavigate} from 'react-router';
import {useState, useEffect} from 'react';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import useEmblaCarousel from 'embla-carousel-react';
import {Star, Check} from 'lucide-react';
import {AddToCartButton} from '~/components/AddToCartButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { productLandingConfigs, LANDING_COMPONENTS } from '~/config/landingConfig';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

/**
 * @type {Route.MetaFunction}
 */
export const meta = ({data}) => {
  return [
    {title: `Hydrogen | ${data?.product.title ?? ''}`},
    {
      rel: 'canonical',
      href: `/products/${data?.product.handle}`,
    },
  ];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, params, request}) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {
    product,
  };
}

function loadDeferredData({context, params}) {
  return {};
}

export default function Product() {
  /** @type {LoaderReturnData} */
  const {product} = useLoaderData();
  const navigate = useNavigate();

  // Optimistically selects a variant with given available variant information
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  // Sets the search param to the selected variant without navigation
  // only when no search params are set in the url
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollToSlide = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const images = product.images?.nodes || [];
  const variants = product.variants?.nodes || [];

  // Helper to map variant options to query string
  const getVariantUriQuery = (selectedOptions) => {
    return selectedOptions
      .map(
        (o) =>
          `${encodeURIComponent(o.name)}=${encodeURIComponent(o.value)}`,
      )
      .join('&');
  };

  const hasMultipleVariants = variants.length > 1;

  // Features list
  const features = [
    'Helps regrow hair and prevent loss',
    'Clinical strength ingredients',
    'Easy-to-use topical spray',
    'Doctor prescribed, pharmacy compounded',
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20 md:pt-32 pb-20 font-sans text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Gallery */}
          <div className="flex flex-col gap-6">
            {/* Mobile/Desktop Main Image Carousel */}
            <div
              className="relative rounded-[2rem] overflow-hidden bg-[#EAEAEA] aspect-square lg:aspect-[4/5]"
              ref={emblaRef}
            >
              <div className="flex h-full touch-pan-y">
                {images.length > 0 ? (
                  images.map((img, index) => (
                    <div
                      className="flex-[0_0_100%] min-w-0 relative h-full"
                      key={img.url || index}
                    >
                      <img
                        src={img.url}
                        alt={
                          img.altText ||
                          `${product.title} - View ${index + 1}`
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">
                      No images available
                    </span>
                  </div>
                )}
              </div>

              {/* Carousel Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-black w-6' : 'bg-black/30'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Thumbnail strip (Hidden on mobile) */}
            {images.length > 1 && (
              <div className="hidden lg:flex gap-4">
                {images.map((img, index) => (
                  <button
                    key={img.url || index}
                    onClick={() => scrollToSlide(index)}
                    className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      currentSlide === index
                        ? 'border-black'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-[#F1EBE3] rounded-full text-xs font-semibold text-[#8B6E5B] mb-4">
                Hair Regrowth Treatment
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5 text-[#FDB022]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-neutral-500 font-medium underline decoration-neutral-500/50 underline-offset-4">
                83 reviews
              </span>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Purchase Options */}
            <div className="space-y-4 mb-8">
              {hasMultipleVariants ? (
                // If there are multiple variants, list them as selectable card options
                variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  const price = parseFloat(v.price.amount);
                  const compareAtPrice = v.compareAtPrice
                    ? parseFloat(v.compareAtPrice.amount)
                    : null;
                  const hasDiscount = compareAtPrice && compareAtPrice > price;

                  return (
                    <div
                      key={v.id}
                      onClick={() => {
                        void navigate(
                          `?${getVariantUriQuery(v.selectedOptions)}`,
                          {
                            replace: true,
                            preventScrollReset: true,
                          },
                        );
                      }}
                      className={`relative border rounded-2xl p-5 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-black bg-white ring-1 ring-black/5 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-black' : 'border-gray-300'
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2.5 h-2.5 rounded-full bg-black" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-black">
                              {v.title}
                            </div>
                            {hasDiscount && (
                              <span className="text-xs font-bold text-[#16A34A]">
                                Save Rs{' '}
                                {Math.round(
                                  compareAtPrice - price,
                                ).toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-black">
                            Rs {price.toLocaleString()}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {v.availableForSale
                              ? 'In Stock'
                              : 'Out of Stock'}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                // Fallback for single variant product (e.g. mock Subscribe & Save option)
                <>
                  <div
                    onClick={() => {}}
                    className="relative border rounded-2xl p-5 border-black bg-white ring-1 ring-black/5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-black" />
                        </div>
                        <div>
                          <div className="font-semibold text-black">
                            One-time purchase
                          </div>
                          <span className="text-xs text-neutral-500">
                            Single delivery
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-black">
                          Rs{' '}
                          {selectedVariant
                            ? parseFloat(
                                selectedVariant.price.amount,
                              ).toLocaleString()
                            : ''}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative border rounded-2xl p-5 border-gray-200 bg-white opacity-70 cursor-not-allowed">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"></div>
                        <div>
                          <div className="font-semibold text-black">
                            Subscribe & Save
                          </div>
                          <span className="text-xs font-bold text-[#16A34A]">
                            Coming soon
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-black">
                          Rs{' '}
                          {selectedVariant
                            ? Math.round(
                                parseFloat(selectedVariant.price.amount) *
                                  0.85,
                              ).toLocaleString()
                            : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Add to Cart Button */}
            <div className="sticky bottom-4 md:static z-20">
              <AddToCartButton
                disabled={!selectedVariant || !selectedVariant.availableForSale}
                lines={
                  selectedVariant
                    ? [
                        {
                          merchandiseId: selectedVariant.id,
                          quantity: 1,
                        },
                      ]
                    : []
                }
              >
                <div className="w-full bg-[#303030] hover:bg-black text-white h-14 rounded-full font-bold text-lg flex items-center justify-center relative overflow-hidden group shadow-xl md:shadow-none cursor-pointer">
                  <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                  <span className="relative z-20">
                    {selectedVariant?.availableForSale
                      ? `Add to Cart — Rs ${parseFloat(
                          selectedVariant.price.amount,
                        ).toLocaleString()}`
                      : 'Sold out'}
                  </span>
                </div>
              </AddToCartButton>
            </div>

            {/* Features List */}
            <div className="mt-12 border-t pt-8">
              <h3 className="font-bold text-lg mb-4 text-black">Meet the treatment</h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-500"
                  >
                    <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details" className="border-b border-gray-200">
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline text-black">
                    Details
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 pb-4">
                    Contains 5% Minoxidil and 0.25% Finasteride in a 60ml
                    solution. Designed for daily topical application.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-b border-gray-200">
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline text-black">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 pb-4">
                    Free discreet shipping on all prescription orders. Due to
                    pharmacy regulations, we cannot accept returns on
                    prescription medications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="apply" className="border-b border-gray-200">
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline text-black">
                    How to apply
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 pb-4">
                    Apply 1ml (approx. 5-6 sprays) directly to the affected
                    area of the scalp twice daily. Massage gently into the
                    scalp with fingers. Wash hands after use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Modular Psychology-Driven Landing Sections */}
      {(() => {
        const sectionsConfig = productLandingConfigs[product.handle] || productLandingConfigs['default'];
        return sectionsConfig.map((section, idx) => {
          const Component = LANDING_COMPONENTS[section.type];
          if (!Component) return null;
          return <Component key={`${section.type}-${idx}`} {...(section.props || {})} />;
        });
      })()}
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
    images(first: 10) {
      nodes {
        url
        altText
        width
        height
      }
    }
    variants(first: 100) {
      nodes {
        id
        title
        availableForSale
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

/** @typedef {import('./+types/products.$handle').Route} Route */
/** @typedef {ReturnType<typeof useLoaderData<typeof loader>>} LoaderReturnData */
