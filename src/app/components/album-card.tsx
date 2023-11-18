"use client";

import { deleteAlbum } from "@/actions/album";
import { AlbumType } from "@/db/schema";
import Link from "next/link";

export default function AlbumCard({ id, title, artist, genre }: AlbumType) {
    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        deleteAlbum(id);
    };

    return (
        <div className="bg-gray-100 hover:bg-gray-200 border border-2 border-gray-200 rounded p-3 m-3">
            <Link href={`/music/${id}`}>
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="font-semibold text-xl">{artist}</p>
                <p>{genre}</p>
                <button
                    className="bg-red-400 hover:bg-red-500 rounded  text-white px-3 py-2 font-bold w-full mt-2"
                    onClick={handleClick}
                >
                    Delete
                </button>
            </Link>
        </div>
    );
}
