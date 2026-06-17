import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import DynamicCollection from "../components/DynamicCollection";

const registry: Record<string, React.ComponentType<any>> = {
  BANNER_HERO: Banner,
  PRODUCT_GRID_2X2: ProductGrid,
  DYNAMIC_COLLECTION: DynamicCollection,
};

export default registry;