"use client";

import { editAlbum } from "@/actions/album";
import { AlbumType } from "@/db/schema";
import { useRef, useState } from "react";

export default function AlbumInfoComponent({
    id,
    title,
    artist,
    genre,
}: AlbumType) {
    const ref = useRef<HTMLFormElement>(null);

    const [isEditable, setIsEditable] = useState(false);

    return (
        <div className="border-b-2 border-gray-500 flex justify-between">
            <h1 className="font-bold text-2xl m-3">Album Information:</h1>
            <form
                className="m-3"
                ref={ref}
                action={async (formData) => {
                    editAlbum(formData, id);
                    ref.current?.reset();
                    console.log(formData.get("title"));
                }}
            >
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded m-2"
                    defaultValue={title}
                    readOnly={isEditable ? false : true}
                />
                <input
                    id="artist"
                    type="text"
                    name="artist"
                    required
                    className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded m-2"
                    defaultValue={artist}
                    readOnly={isEditable ? false : true}
                />
                <input
                    id="genre"
                    type="text"
                    name="genre"
                    required
                    className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded m-2"
                    defaultValue={genre}
                    readOnly={isEditable ? false : true}
                />
                <button
                    className="bg-blue-500 hovert:bg-blue-600 rounded text-white px-3 py-2"
                    onClick={() => setIsEditable(!isEditable)}
                    type={!isEditable ? "submit" : "button"}
                >
                    {isEditable ? "Save Changes" : "Edit Album"}
                </button>
            </form>
        </div>
    );
}
