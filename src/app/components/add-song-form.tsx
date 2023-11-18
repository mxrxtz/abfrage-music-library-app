"use client";

import { addSong } from "@/actions/song";
import { useRef } from "react";

export default function AddSongForm({ id }: { id: number }) {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <div>
            <form
                className="flex justify-between items-center m-3"
                ref={ref}
                action={async (formData) => {
                    addSong(formData, id);
                    ref.current?.reset();
                }}
            >
                <div className="flex flex-col mx-3">
                    <label htmlFor="title">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded"
                    />
                </div>
                <div className="flex flex-col mx-3">
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        type="number"
                        name="duration"
                        required
                        className="bg-gray-100 px-3 py-2 border border-2 border-gray-200 rounded"
                    />
                </div>
                <button className="bg-green-500 hovert:bg-green-600 rounded text-white px-3 py-2">
                    Add Song
                </button>
            </form>
        </div>
    );
}
