export interface NewsletterData {
  id: string;
  label: string;
  year: string;
  title: string;
  description: string;
  pages: number;
  pdfUrl: string;
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
}

// Keep newest issues first. Add future editions here; filters and totals update automatically.
export const newslettersData: NewsletterData[] = [
  {
    "id": "may-2025",
    "label": "May 2025",
    "year": "2025",
    "title": "MIT Newsletter May 2025",
    "description": "The May 2025 edition of the MIT Editorial Board newsletter.",
    "pages": 50,
    "pdfUrl": "/Netflix%20Newsletter%20Final.pdf",
    "coverImage": "/newsletters/covers/may-2025.webp",
    "coverWidth": 708,
    "coverHeight": 1000
  },
  {
    "id": "september-2024",
    "label": "September 2024",
    "year": "2024",
    "title": "MIT Newsletter September 2024",
    "description": "The September 2024 edition of the MIT Editorial Board newsletter.",
    "pages": 27,
    "pdfUrl": "/September_Newsletter.pdf",
    "coverImage": "/newsletters/covers/september-2024.webp",
    "coverWidth": 732,
    "coverHeight": 1000
  },
  {
    "id": "february-2024",
    "label": "February 2024",
    "year": "2024",
    "title": "MIT Newsletter February 2024",
    "description": "The February 2024 edition of the MIT Editorial Board newsletter.",
    "pages": 25,
    "pdfUrl": "/HQFINALfinalfinal_compressed.pdf",
    "coverImage": "/newsletters/covers/february-2024.webp",
    "coverWidth": 667,
    "coverHeight": 1000
  }
];
