type Params = {
  id: string;
};

type SearchParams = {
  name: string;
  unit_amount: number | null;
  image: string;
  quantity?: number | 1;
  description: string | null;
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

export type SearchParamType = {
  params: Params;
  searchParams: SearchParams;
};
