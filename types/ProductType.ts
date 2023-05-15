export type ProductType = {
  id: string;
  name: string;
  unit_amount: number | null;
  image: string;
  quantity?: number | 1;
  description: string | null;
  metadata: MetaDataType;
};

type MetaDataType = {
  category: string;
  brand: string;
  carbohydrate: number;
  country: string;
  fat: number;
  ingridients: string;
  kcal: number;
  kosher: string;
  protein: number;
  volume: string;
};
