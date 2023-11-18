import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Link
                className="bg-purple-500 hover:bg-purple-600 px-5 py-4 font-bold text-2xl rounded text-white"
                href="/music"
            >
                Lets listen to some music
            </Link>
        </div>
    );
}
