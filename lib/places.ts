export type Place = {
  name: string
  slug: string
  area: string
  type: "Tavern" | "Traditional Restaurant" | "Casa de Pasto"
  priceRange: "€" | "€€"
  tags: string[]
  highlight: string
}

export const places: Place[] = [
  {
    name: "Tasco do Bolhão",
    slug: "tasco-do-bolhao",
    area: "Baixa",
    type: "Tavern",
    priceRange: "€",
    tags: ["bifana", "vinho-da-casa", "prato-do-dia"],
    highlight: "No-frills classics and honest prices.",
  },
  {
    name: "Casa das Tripas",
    slug: "casa-das-tripas",
    area: "Sé",
    type: "Traditional Restaurant",
    priceRange: "€€",
    tags: ["tripas", "cozinha-tradicional"],
    highlight: "Traditional Porto flavors with history.",
  },
  {
    name: "A Mesa Antiga",
    slug: "a-mesa-antiga",
    area: "Cedofeita",
    type: "Casa de Pasto",
    priceRange: "€",
    tags: ["prato-feito", "sopa", "sobremesas"],
    highlight: "Daily plates that taste like home.",
  },
]
