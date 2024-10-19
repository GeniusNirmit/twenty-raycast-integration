import { z } from "zod";

export const dataModelSchema = z.array(
  z.object({
    id: z.string(),
    dataSourceId: z.string(),
    nameSingular: z.string(),
    namePlural: z.string(),
    labelSingular: z.string(),
    labelPlural: z.string(),
    description: z.string(),
    icon: z.string(),
    isCustom: z.boolean(),
    isActive: z.boolean(),
    isSystem: z.boolean(),
  }),
);

export type DataModel = z.infer<typeof dataModelSchema>;