"use server";

import { db } from "@/db/connection";
import { albumSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addAlbum(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const artist = formData.get("artist") as string;
    const genre = formData.get("genre") as string;

    await db
        .insert(albumSchema)
        .values({ title: title, artist: artist, genre: genre });

    revalidatePath("/music");
}

export async function deleteAlbum(id: number) {
    "use server";

    await db.delete(albumSchema).where(eq(albumSchema.id, id));
    revalidatePath("/music");
}

export async function editAlbum(formData: FormData, id: number) {
    "use server";

    const title = formData.get("title") as string;
    const artist = formData.get("artist") as string;
    const genre = formData.get("genre") as string;

    await db
        .update(albumSchema)
        .set({ title: title, artist: artist, genre: genre })
        .where(eq(albumSchema.id, id));

    revalidatePath("/music");
}
