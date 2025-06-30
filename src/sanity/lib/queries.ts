import { defineQuery, groq } from "next-sanity"

// four product fetch from this query

export const fourmenproduct = defineQuery(`
    *[_type == "menproduct"][0...4]{
        _id,
        productName,
        _type,
        "imageUrl": image.asset->url,
        category,
        inventory,
        price,
        description,
        slug {
            _type,
            current
        }

    }`)

    export const fourwomenproduct = defineQuery(`
    *[_type == "womenproduct"][0...4]{
        _id,
        productName,
        _type,
        "imageUrl": image.asset->url,
        category,
        inventory,
        price,
        description,
        slug {
            _type,
            current
        }

    }`)

    export const fourcupleproduct = defineQuery(`
    *[_type == "cupleproduct"][0...4]{
        _id,
        productName,
        _type,
        "imageUrl": image.asset->url,
        category,
        inventory,
        price,
        description,
        slug {
            _type,
            current
        }

    }`)

    export const foursmartproduct = defineQuery(`
    *[_type == "smartproduct"][0...4]{
        _id,
        productName,
        _type,
        "imageUrl": image.asset->url,
        category,
        inventory,
        price,
        description,
        slug {
            _type,
            current
        }

    }`)

    export const fourluxuryproduct = defineQuery(`
    *[_type == "luxuryproduct"][0...4]{
        _id,
        productName,
        _type,
        "imageUrl": image.asset->url,
        category,
        inventory,
        price,
        description,
        slug {
            _type,
            current
        },

    }`)


// all product fetch from this query

// All Men Products
export const allmenproduct = groq`
  *[_type == "menproduct"]{
    productName,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Product by Slug
export const menProductBySlug = groq`
  *[_type == "menproduct" && slug.current == $slug][0]{
    productName,
    price,
    inventory,
    description,
    "imageUrl": image.asset->url
  }
`;

// All Women Products
export const allwomenproduct = groq`
  *[_type == "womenproduct"]{
    productName,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Product by Slug
export const womenProductBySlug = groq`
  *[_type == "womenproduct" && slug.current == $slug][0]{
    productName,
    price,
    inventory,
    description,
    "imageUrl": image.asset->url
  }
`;

// All Cuple Products
export const allcupleproduct = groq`
  *[_type == "cupleproduct"]{
    productName,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Product by Slug
export const cupleProductBySlug = groq`
  *[_type == "cupleproduct" && slug.current == $slug][0]{
    productName,
    price,
    inventory,
    description,
    "imageUrl": image.asset->url
  }
`;

// All Smart Products
export const allsmartproduct = groq`
  *[_type == "smartproduct"]{
    productName,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Product by Slug
export const smartProductBySlug = groq`
  *[_type == "smartproduct" && slug.current == $slug][0]{
    productName,
    price,
    inventory,
    description,
    "imageUrl": image.asset->url
  }
`;



// All Luxury Products
export const allluxuryproduct = groq`
  *[_type == "luxuryproduct"]{
    productName,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Product by Slug
export const luxuryProductBySlug = groq`
  *[_type == "luxuryproduct" && slug.current == $slug][0]{
    productName,
    price,
    inventory,
    description,
    "imageUrl": image.asset->url
  }
`;