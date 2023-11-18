import { db } from "@/db/connection";
import { albumSchema } from "@/db/schema";
import AlbumCard from "../components/album-card";
import AddAlbumForm from "../components/add-album-form";

export default async function AlbumListPage() {
    const albums = await db.select().from(albumSchema);

    return (
        <div>
            <nav className="flex justfy-between items-center">
                <h1 className="text-center m-3 font-extrabold text-3xl">
                    Music Library
                </h1>
                <div className="">
                    <AddAlbumForm />
                </div>
            </nav>
            <div className="grid grid-cols-6">
                {albums.map((album) => (
                    <AlbumCard {...album} key={album.id} />
                ))}
            </div>
        </div>
    );
}
