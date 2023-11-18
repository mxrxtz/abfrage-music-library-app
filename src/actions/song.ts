"use server";

import { db } from "@/db/connection";
import { songSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteSong(id: number) {
    "use server";

    await db.delete(songSchema).where(eq(songSchema.id, id));
    revalidatePath(`/music/${id}`);
}

export async function addSong(formData: FormData, id: number) {
    "use server";

    const name = formData.get("name") as string;
    const duration = formData.get("duration");

    await db
        .insert(songSchema)
        .values({ name: name, duration: Number(duration), albumId: id });
    revalidatePath(`/music/${id}`);
}
