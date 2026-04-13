export type ProductCardProduct = {
  id: string;
  attributeValues: {
    p_title: { value: string };
    p_price: { value: number };
    p_image: { value: { downloadLink: string } };
    p_description: { value: unknown };
    p_available?: string;
  };
};

export type AppProduct = ProductCardProduct & {
  details: {
    longDescription: string;
    ingredients: string[];
    prepTime: string;
    calories: string;
    rating: string;
  };
};

export const staticProducts: AppProduct[] = [
  {
    id: 'smoky-pepperoni',
    attributeValues: {
      p_title: { value: 'Smoky Pepperoni' },
      p_price: { value: 14.99 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Classic pepperoni with house tomato sauce, extra mozzarella, and a hint of smoked chili flakes.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Our Smoky Pepperoni pizza combines hand-stretched dough, rich tomato base, and layered mozzarella finished with premium pepperoni for a balanced smoky bite.',
      ingredients: [
        'Mozzarella cheese',
        'Smoked pepperoni',
        'Tomato basil sauce',
        'Chili flakes',
      ],
      prepTime: '20-25 min',
      calories: '290 kcal / slice',
      rating: '4.9',
    },
  },
  {
    id: 'garden-supreme',
    attributeValues: {
      p_title: { value: 'Garden Supreme' },
      p_price: { value: 13.49 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Loaded with bell peppers, mushrooms, olives, onions, and sweet corn on our signature crust.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Garden Supreme is made for veggie lovers with fresh hand-cut toppings, a savory tomato blend, and melty cheese that keeps every slice flavorful.',
      ingredients: [
        'Bell peppers',
        'Mushrooms',
        'Black olives',
        'Sweet corn',
      ],
      prepTime: '18-22 min',
      calories: '240 kcal / slice',
      rating: '4.8',
    },
  },
  {
    id: 'chicken-tikka-fire',
    attributeValues: {
      p_title: { value: 'Chicken Tikka Fire' },
      p_price: { value: 15.99 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Spicy chicken tikka chunks, jalapenos, onions, and creamy cheese blend for bold desi flavor.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Chicken Tikka Fire brings desi heat with marinated chicken, spicy peppers, and our signature creamy cheese mix for a punchy, satisfying bite.',
      ingredients: [
        'Chicken tikka',
        'Jalapenos',
        'Onions',
        'Creamy cheese blend',
      ],
      prepTime: '22-26 min',
      calories: '310 kcal / slice',
      rating: '4.9',
    },
  },
  {
    id: 'margherita-classic',
    attributeValues: {
      p_title: { value: 'Margherita Classic' },
      p_price: { value: 11.99 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Simple and timeless with tomato sauce, fresh mozzarella, and basil leaves.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Margherita Classic focuses on pure flavor with quality tomatoes, creamy mozzarella, and fragrant basil over stone-baked dough.',
      ingredients: ['Fresh mozzarella', 'Tomato sauce', 'Basil leaves', 'Olive oil'],
      prepTime: '16-20 min',
      calories: '220 kcal / slice',
      rating: '4.7',
    },
  },
  {
    id: 'bbq-chicken-blast',
    attributeValues: {
      p_title: { value: 'BBQ Chicken Blast' },
      p_price: { value: 16.49 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Smoky BBQ sauce, grilled chicken, red onions, and a double cheese finish.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'BBQ Chicken Blast packs a sweet-smoky profile with grilled chicken chunks and melty cheese for a rich, hearty slice.',
      ingredients: ['BBQ sauce', 'Grilled chicken', 'Red onions', 'Mozzarella'],
      prepTime: '20-24 min',
      calories: '320 kcal / slice',
      rating: '4.8',
    },
  },
  {
    id: 'veggie-crunch',
    attributeValues: {
      p_title: { value: 'Veggie Crunch' },
      p_price: { value: 13.29 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Fresh capsicum, onions, corn, olives, and mushrooms for a crispy veggie bite.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Veggie Crunch combines colorful vegetables with savory sauce and cheese to deliver a light yet flavorful pizza experience.',
      ingredients: ['Capsicum', 'Onions', 'Olives', 'Mushrooms'],
      prepTime: '18-22 min',
      calories: '235 kcal / slice',
      rating: '4.6',
    },
  },
  {
    id: 'peri-peri-paneer',
    attributeValues: {
      p_title: { value: 'Peri Peri Paneer' },
      p_price: { value: 15.49 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Soft paneer cubes coated in peri peri seasoning with onions and jalapenos.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Peri Peri Paneer offers a spicy kick balanced by soft paneer and cheese over our signature crispy crust.',
      ingredients: ['Paneer cubes', 'Peri peri seasoning', 'Onions', 'Jalapenos'],
      prepTime: '20-24 min',
      calories: '305 kcal / slice',
      rating: '4.7',
    },
  },
  {
    id: 'meat-feast-max',
    attributeValues: {
      p_title: { value: 'Meat Feast Max' },
      p_price: { value: 17.99 },
      p_image: {
        value: {
          downloadLink:
            'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=1200&auto=format&fit=crop',
        },
      },
      p_description: {
        value:
          'Loaded with pepperoni, chicken sausage, smoked beef, and extra cheese.',
      },
      p_available: 'Available',
    },
    details: {
      longDescription:
        'Meat Feast Max is our biggest protein-loaded pizza for serious appetites, built with bold seasoning and rich sauce.',
      ingredients: ['Pepperoni', 'Chicken sausage', 'Smoked beef', 'Mozzarella'],
      prepTime: '24-28 min',
      calories: '360 kcal / slice',
      rating: '4.9',
    },
  },
];

export function getStaticProductById(id: string) {
  return staticProducts.find((product) => product.id === id);
}
