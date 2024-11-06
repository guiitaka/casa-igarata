export interface Property {
  name: string;
  description: string;
  features: Feature[];
  images: Image[];
  location: Location;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
  nearbyAttractions: NearbyAttraction[];
}

export interface NearbyAttraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  type: 'restaurant' | 'tourism' | 'activity';
} 