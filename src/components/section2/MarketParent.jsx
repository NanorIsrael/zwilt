import Marketplace from "./MarketPlace";
import MarketplaceLogos from "./MarketPlaceLogos";

function MarketParent({description, image, imageAlt}){
	return (
		<>
		   <section className="flex flex-col pt-[2.25em] lg:flex-row">
                <Marketplace title={description}/>
                <MarketplaceLogos image={image} imageAlt={imageAlt}/>
        	</section>
		</>
	)
}
export default MarketParent;