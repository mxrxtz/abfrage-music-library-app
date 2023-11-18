"use client";

import { addAlbum } from "@/actions/album";
import { useRef } from "react";

export default function AddAlbumForm() {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <div>
            <form
                className="flex justify-between items-center m-3"
                ref={ref}
                action={async (formData) => {
                    addAlbum(formData);
                    ref.current?.reset();
                }}
            >
                <div className="flex flex-col mx-3">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        required
                        className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded"
                    />
                </div>
                <div className="flex flex-col mx-3">
                    <label htmlFor="artist">Artist</label>
                    <input
                        id="artist"
                        type="text"
                        name="artist"
                        required
                        className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded"
                    />
                </div>
                <div className="flex flex-col mx-3">
                    <label htmlFor="genre">Genre</label>
                    <input
                        id="genre"
                        type="text"
                        name="genre"
                        required
                        className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded"
                    />
                </div>
                <button className="bg-green-500 hovert:bg-green-600 rounded text-white px-3 py-2">
                    Add Album
                </button>
            </form>
        </div>
    );
}
