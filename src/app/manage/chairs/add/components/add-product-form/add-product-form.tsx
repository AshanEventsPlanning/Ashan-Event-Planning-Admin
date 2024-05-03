"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { SelectItem } from "@/components/ui/select";
import { addProduct, getSubCategoriesForCategory } from "@/lib/api/cloth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MediaInput from "../../../components/media-input/media-input";
import NumberInput from "../../../../components/form/number-input";
import SelectInput from "@/app/manage/components/form/select-input";
import TextInput from "@/app/manage/components/form/text-input";
import VariantsInput from "@/app/manage/chairs/components/variants-input/variants-input";
import { getCategories } from "@/lib/api/category";
import ImagesInput from "@/app/manage/components/form/images-input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import TextAreaInput from "@/app/manage/components/form/text-area-input";
import SwitchInput from "@/app/manage/components/form/checkbox-input";

const AddProductFormSchema = z
  .object({
    name: z.string().min(2).max(100),
    length: z.number().int().nonnegative(),
    width: z.number().int().nonnegative(),
    image: z.string().array().nonempty({ message: "Please upload at least 1 image" }),
  })

function AddProductForm() {
  const AddProductForm = useForm<z.infer<typeof AddProductFormSchema>>({
    resolver: zodResolver(AddProductFormSchema),
    defaultValues: {
      name: "",
      length: 0,
      width: 0,
      image:[]
    },
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();


  const { mutate: addProductMutate, isLoading: isAddProductLoading } =
    useMutation({
      mutationFn: addProduct,
      onSuccess: () => {
        // queryClient.invalidateQueries(["CHAIR"]);
        toast({ title: "Success", variant: "default" });
      },
      onError: () => {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Error while adding product",
        });
      },
    });

  const onSubmit = async (values: z.infer<typeof AddProductFormSchema>) => {
    addProductMutate(values);
  };

  return (
    <div>
      <Form {...AddProductForm}>
        <form
          onSubmit={AddProductForm.handleSubmit(onSubmit)}
          className="w-1/2"
        >
          <h4>Basic Information</h4>
          <div className="flex flex-col gap-y-4">
            <TextInput name="name" placeholder="Square Chair" label="Name" />
            <NumberInput name="length" label="Length" />
            <NumberInput name="width" label="Width" />
            <ImagesInput
              constrain={1}
              name={`image`}
              label="Image"
            />
          </div>

          <div className="my-4">
            <Button type="submit">
              {isAddProductLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </form>
      </Form>
      {/* <DevTool control={AddProductForm.control} /> */}
    </div>
  );
}

export default AddProductForm;
