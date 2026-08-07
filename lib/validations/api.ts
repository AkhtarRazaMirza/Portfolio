import { z } from "zod";

export const ContactMessageCreateSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120, "Name is too long"),
  email: z.string().trim().email("Invalid email address").min(3, "Email is too short").max(200, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(4000, "Message is too long"),
});

export type ContactMessageCreateInput = z.infer<typeof ContactMessageCreateSchema>;

