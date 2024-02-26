import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(15),
  description: z.string().min(10).max(1000),
  category: z.string(),
  file: z.instanceof(File).refine(file => file.type.startsWith('image/'), {
    message: "Uploaded file must be an image",
  }).optional(),
});

export type FormData = z.infer<typeof formSchema>;
