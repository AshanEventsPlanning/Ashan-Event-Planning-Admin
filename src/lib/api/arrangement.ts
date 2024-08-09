import { Arrangement } from "@/server/application/common/dtos/schemas";
import {
  dynamicClient,
  staticClient,
} from "@/server/infrastructure/clients/sanity";
import groq from "groq";
import { z } from "zod";
import {
  AddArrangementDTO,
  EditArrangementDTO,
  GetArrangementFormDTO,
} from "@/server/application/common/dtos/arrangement";
import api from "@/lib/api/base";

export const getArrangements = async () => {
  let query = `*[_type == "arrangement" && status == "Available"] {_id,name,chairspertable,status}`;
  const data = Arrangement.array().parse(await dynamicClient.fetch(query));
  console.log(data)
  return data;
};

export const getArrangementById = async (_id: string) => {
  let query = `*[_type == "arrangement" && _id == "${_id}" && status == "Available"] {_id,name,chairspertable,status}`;
  const data = GetArrangementFormDTO.parse((await dynamicClient.fetch(query))[0]);
  console.log(data);
  return data;
};

export const addArrangement = async (arrangement: z.infer<typeof AddArrangementDTO>) => {
  const res = await api.post("/api/arrangement", { json: arrangement });
};
export const editArrangement = async ({
  _id,
  arrangement,
}: {
  _id: string;
  arrangement: z.infer<typeof EditArrangementDTO>;
}) => {
  const res = await api.put(`/api/arrangement/${_id}`, { json: arrangement });
};

export const deleteArrangement = async ({
                                        _id,
                                        arrangement,
                                      }: {
  _id: string;
  arrangement: z.infer<typeof EditArrangementDTO>;
}) => {
  return  api.put(`/api/arrangement/${_id}`, { json: {...arrangement, status:"Removed"} });
};
