"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <video
                src="/loader.mp4"   // 👈 place this in /public
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
    );
}
