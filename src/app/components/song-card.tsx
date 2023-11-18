"use client";

import { deleteSong } from "@/actions/song";
import { SongType } from "@/db/schema";
import Link from "next/link";

export default function SongCard({ id, name, duration }: SongType) {
    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        deleteSong(id);
    };

    return (
        <div className="bg-gray-100 hover:bg-gray-200 border border-2 border-gray-200 rounded p-3 m-3">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="font-semibold text-xl">{duration}</p>
            <button
                className="bg-red-400 hover:bg-red-500 rounded  text-white px-3 py-2 font-bold w-full mt-2"
                onClick={handleClick}
            >
                Delete
            </button>
        </div>
    );
}
