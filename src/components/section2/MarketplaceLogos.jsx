function MarketplaceLogos({image, imageAlt}) {
  return (
    <>
      <figure className="pt-[2.25em] w-full">
        <img
          src={image}
          alt={imageAlt}
          />
      </figure>
    </>
  )
}
export default MarketplaceLogos;
