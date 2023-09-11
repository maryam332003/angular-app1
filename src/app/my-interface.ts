export interface Recipe {
  count:   number;
  recipes: RecipeElement[];
}

export interface RecipeElement {
  publisher:     string;
  title:         string;
  source_url:    string;
  recipe_id:     string;
  image_url:     string;
  social_rank:   number;
  publisher_url: string;
}
