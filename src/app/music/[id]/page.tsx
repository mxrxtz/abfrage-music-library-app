import AddSongForm from "@/app/components/add-song-form";
import AlbumInfoComponent from "@/app/components/album-info-component";
import SongCard from "@/app/components/song-card";
import { db } from "@/db/connection";
import { albumSchema, songSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function AlbumPage({
    params,
}: {
    params: { id: number };
}) {
    const album = await db
        .select()
        .from(albumSchema)
        .where(eq(albumSchema.id, params.id))
        .limit(1);

    const songs = await db
        .select()
        .from(songSchema)
        .where(eq(songSchema.albumId, params.id));

    return (
        <div>
            <div>
                <AlbumInfoComponent {...album[0]} />
            </div>
            <div className="flex items-center justify-center">
                <AddSongForm id={params.id} />
            </div>
            <div className="grid grid-cols-6">
                {songs.map((song) => (
                    <SongCard {...song} key={song.id} />
                ))}
            </div>
        </div>
    );
}
