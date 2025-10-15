export interface VinylRecord {
  artist: string;
  album: string;
}

export interface ProductData {
  name: string;
  subtitle: string;
  price: string;
  shipping: string;
  description: string;
  vinylRecords: VinylRecord[];
}

export const productData: ProductData = {
  name: "CITY BLACK",
  subtitle: "VINYL STARTER KIT",
  price: "$575.00",
  shipping: "Free shipping within the U.S.",
  description: "Step into the world of vinyl with a kit built for the city. City Black is a curated starter bundle designed for modern apartments, late-night listening sessions, and minimal interiors. Everything is matched in matte black for a cohesive, elevated vibe—from the turntable to the cables to the curated first 5 records.",
  vinylRecords: [
    {
      artist: "MILES DAVIS",
      album: "KIND OF BLUE"
    },
    {
      artist: "JOHN COLTRANE",
      album: "A LOVE SUPREME"
    },
    {
      artist: "BILL EVANS",
      album: "PORTRAIT IN JAZZ"
    },
    {
      artist: "KENDRICK LAMAR",
      album: "GOOD KID, M.A.A.D CITY"
    },
    {
      artist: "JAMES BLAKE",
      album: "OVERGROWN"
    }
  ]
};