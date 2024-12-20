// Define the actual categories
export type Category =
  | 'Traktorok'
  | 'Kombájnok'
  | 'Silózók'
  | 'Önjáró Permetezők'
  | 'Rakodógépek'
  | 'Autók'
  | 'Bálázók';

// Define a type that includes both Category and 'Részletes keresés'
export type CategoryOrSearch = Category | 'Részletes keresés';

// Define the categories array with the new type
export const categories: CategoryOrSearch[] = [
  'Részletes keresés',
  'Traktorok',
  'Kombájnok',
  'Silózók',
  'Önjáró Permetezők',
  'Rakodógépek',
  'Autók',
  'Bálázók',
];

export interface Item {
  category: Category;
  name: string;
  status: 'Raktáron' | 'Rendelhető';
  condition: 'Új' | 'Használt';
  leasable: boolean;
  year: number;
  power: number;
  weight: number;
  hours: number;
  speed: number;
  warranty: string;
  salePrice: number;
  originalPrice: number;
  leasePrice: number;
}

export const items: Item[] = [
  {
    category: 'Traktorok',
    name: 'John Deere 8R 410 (297 üzemórás)',
    status: 'Raktáron',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 410,
    weight: 14000,
    hours: 297,
    speed: 50,
    warranty: '1 év',
    salePrice: 129500000,
    originalPrice: 175500000,
    leasePrice: 48000000,
  },
  {
    category: 'Traktorok',
    name: 'Case IH Magnum 340 (150 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 340,
    weight: 13000,
    hours: 150,
    speed: 40,
    warranty: '2 év',
    salePrice: 115000000,
    originalPrice: 135000000,
    leasePrice: 42000000,
  },
  {
    category: 'Kombájnok',
    name: 'New Holland CR10.90 (150 üzemórás)',
    status: 'Raktáron',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 700,
    weight: 24500,
    hours: 150,
    speed: 40,
    warranty: '2 év',
    salePrice: 245000000,
    originalPrice: 280000000,
    leasePrice: 75000000,
  },
  {
    category: 'Silózók',
    name: 'Claas Jaguar 980 (400 üzemórás)',
    status: 'Rendelhető',
    condition: 'Használt',
    leasable: true,
    year: 2021,
    power: 884,
    weight: 22000,
    hours: 400,
    speed: 40,
    warranty: '1 év',
    salePrice: 180000000,
    originalPrice: 220000000,
    leasePrice: 60000000,
  },
  {
    category: 'Önjáró Permetezők',
    name: 'John Deere R4060 (50 üzemórás)',
    status: 'Raktáron',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 375,
    weight: 18000,
    hours: 50,
    speed: 50,
    warranty: '2 év',
    salePrice: 195000000,
    originalPrice: 210000000,
    leasePrice: 65000000,
  },
  {
    category: 'Rakodógépek',
    name: 'Caterpillar 980M (1000 üzemórás)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2020,
    power: 386,
    weight: 30000,
    hours: 1000,
    speed: 35,
    warranty: '6 hónap',
    salePrice: 140000000,
    originalPrice: 180000000,
    leasePrice: 50000000,
  },
  {
    category: 'Autók',
    name: 'Ford Ranger Wildtrak (5000 km)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2022,
    power: 213,
    weight: 2246,
    hours: 0,
    speed: 180,
    warranty: '1 év',
    salePrice: 18000000,
    originalPrice: 22000000,
    leasePrice: 7000000,
  },
  {
    category: 'Bálázók',
    name: 'New Holland BigBaler 1290 Plus (200 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 130,
    weight: 10000,
    hours: 200,
    speed: 40,
    warranty: '2 év',
    salePrice: 85000000,
    originalPrice: 95000000,
    leasePrice: 30000000,
  },
  {
    category: 'Traktorok',
    name: 'Fendt 1050 Vario (100 üzemórás)',
    status: 'Raktáron',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 517,
    weight: 15000,
    hours: 100,
    speed: 60,
    warranty: '2 év',
    salePrice: 160000000,
    originalPrice: 185000000,
    leasePrice: 55000000,
  },
  {
    category: 'Kombájnok',
    name: 'John Deere X9 1100 (50 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 700,
    weight: 26000,
    hours: 50,
    speed: 40,
    warranty: '2 év',
    salePrice: 270000000,
    originalPrice: 300000000,
    leasePrice: 85000000,
  },
  {
    category: 'Silózók',
    name: 'Krone BiG X 1180 (300 üzemórás)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2022,
    power: 1156,
    weight: 23000,
    hours: 300,
    speed: 40,
    warranty: '1 év',
    salePrice: 200000000,
    originalPrice: 240000000,
    leasePrice: 70000000,
  },
  {
    category: 'Önjáró Permetezők',
    name: 'Agrifac Condor Endurance II (150 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 320,
    weight: 18000,
    hours: 150,
    speed: 50,
    warranty: '2 év',
    salePrice: 210000000,
    originalPrice: 230000000,
    leasePrice: 70000000,
  },
  {
    category: 'Rakodógépek',
    name: 'JCB 542-70 AGRI Super (500 üzemórás)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2021,
    power: 145,
    weight: 8000,
    hours: 500,
    speed: 40,
    warranty: '1 év',
    salePrice: 75000000,
    originalPrice: 90000000,
    leasePrice: 25000000,
  },
  {
    category: 'Autók',
    name: 'Toyota Hilux Invincible (10000 km)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2022,
    power: 204,
    weight: 2125,
    hours: 0,
    speed: 175,
    warranty: '1 év',
    salePrice: 17000000,
    originalPrice: 20000000,
    leasePrice: 6000000,
  },
  {
    category: 'Bálázók',
    name: 'Claas Quadrant 5300 FC (100 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 120,
    weight: 12000,
    hours: 100,
    speed: 40,
    warranty: '2 év',
    salePrice: 80000000,
    originalPrice: 90000000,
    leasePrice: 28000000,
  },
  {
    category: 'Traktorok',
    name: 'Deutz-Fahr 9340 TTV (200 üzemórás)',
    status: 'Raktáron',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 336,
    weight: 13000,
    hours: 200,
    speed: 60,
    warranty: '2 év',
    salePrice: 125000000,
    originalPrice: 145000000,
    leasePrice: 45000000,
  },
  {
    category: 'Kombájnok',
    name: 'Claas Lexion 8900 (80 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 790,
    weight: 25000,
    hours: 80,
    speed: 40,
    warranty: '2 év',
    salePrice: 255000000,
    originalPrice: 280000000,
    leasePrice: 80000000,
  },
  {
    category: 'Silózók',
    name: 'John Deere 9800i (250 üzemórás)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2022,
    power: 970,
    weight: 21000,
    hours: 250,
    speed: 40,
    warranty: '1 év',
    salePrice: 190000000,
    originalPrice: 225000000,
    leasePrice: 65000000,
  },
  {
    category: 'Önjáró Permetezők',
    name: 'Amazone Pantera 4503 (100 üzemórás)',
    status: 'Rendelhető',
    condition: 'Új',
    leasable: true,
    year: 2023,
    power: 218,
    weight: 12000,
    hours: 100,
    speed: 50,
    warranty: '2 év',
    salePrice: 180000000,
    originalPrice: 200000000,
    leasePrice: 60000000,
  },
  {
    category: 'Rakodógépek',
    name: 'Manitou MLT 961-145 V+ L (400 üzemórás)',
    status: 'Raktáron',
    condition: 'Használt',
    leasable: true,
    year: 2021,
    power: 141,
    weight: 11000,
    hours: 400,
    speed: 40,
    warranty: '1 év',
    salePrice: 85000000,
    originalPrice: 100000000,
    leasePrice: 30000000,
  },
];