import { z } from "zod";
import { createStudentFormSchema } from "./schema";

export type createStudentFormData = z.infer<typeof createStudentFormSchema>;