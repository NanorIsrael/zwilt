import MarketPlace from "./Marketplace";
import MarketPlaceLogos from "./MarketplaceLogos";

function MarketParent({ description, image, imageAlt }) {
  return (
    <>
      <section className="flex flex-col pt-[2.25em] lg:flex-row">
        <MarketPlace title={description} />
        <MarketPlaceLogos image={image} imageAlt={imageAlt} />
      </section>
    </>
  );
}
export default MarketParent;
