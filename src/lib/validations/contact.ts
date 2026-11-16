import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter.")
    .max(80, "Nama terlalu panjang."),
  email: z.string().email("Format email tidak valid."),
  subject: z
    .string()
    .min(3, "Subjek minimal 3 karakter.")
    .max(120, "Subjek terlalu panjang."),
  message: z
    .string()
    .min(10, "Pesan minimal 10 karakter agar konteksnya jelas.")
    .max(2000, "Pesan maksimal 2000 karakter."),
  // Honeypot field (harus kosong; bot biasanya otomatis mengisi semua input)
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;