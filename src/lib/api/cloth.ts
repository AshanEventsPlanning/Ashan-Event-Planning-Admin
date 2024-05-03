import { Cloth } from "@/server/application/common/dtos/schemas";
import {
  dynamicClient,
  staticClient,
} from "@/server/infrastructure/clients/sanity";
import groq from "groq";
import { z } from "zod";
import {
  AddProductDTO,
  EditProductDTO,
  GetClothFormDTO,
} from "@/server/application/common/dtos/cloth";
import api from "@/lib/api/base";

export const getClothes = async () => {
  let query = `*[_type == "chair" ] {_id,name,length,width,image}`;
  const data = Cloth.array().parse(await staticClient.fetch(query));
  return data;
};

export const getClothById = async (_id: string) => {
  let query = groq`*[_type == "chair" && _id == "${_id}"] {_id,name,length,width,image}`;
  const data = GetClothFormDTO.parse((await dynamicClient.fetch(query))[0]);
  console.log(data);
  return data;
};

export const getSubCategoriesForCategory = async (category: string) => {
  const query = groq`*[_type == 'subcategory' && category->_id=="${category}"]{_id,name}`;
  const data = z
    .object({ _id: z.string(), name: z.string() })
    .array()
    .parse(await staticClient.fetch(query));
  return data;
};

export const getColors = async () => {
  const query = groq`*[_type == 'color']{_id,name}`;
  const data = z
    .object({ _id: z.string(), name: z.string() })
    .array()
    .parse(await staticClient.fetch(query));
  return data;
};

export const getSizes = async () => {
  const query = groq`*[_type == 'size']{_id,name}`;
  const data = z
    .object({ _id: z.string(), name: z.string() })
    .array()
    .parse(await staticClient.fetch(query));
  return data;
};
export const addProduct = async (product: z.infer<typeof AddProductDTO>) => {
  const res = await api.post("/api/product", { json: product });
};
export const editProduct = async ({
  _id,
  product,
}: {
  _id: string;
  product: z.infer<typeof EditProductDTO>;
}) => {
  const res = await api.put(`/api/product/${_id}`, { json: product });
};
