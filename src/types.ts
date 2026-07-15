export interface ProductItem {
  id: string;
  name: string;
  scientificCategory?: string;
  description: string;
  imageUrl?: string;
}

export interface InsightBlock {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface ContactState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
