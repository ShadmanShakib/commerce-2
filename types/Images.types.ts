export interface ImagesTypes {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: ImageFormat;
    };
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: "image/png";
  size: 120.96;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: "image";
  };
  createdAt: "2022-08-19T05:57:10.102Z";
  updatedAt: "2022-08-19T05:57:10.102Z";
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}
