import avatarImage from "../assets/avttr.png";

interface AvatarProps {
    src?: string;
    alt?: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
    return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
            <div
                className="p-[3px] rounded-full"
                style={{
                    background:
                        "conic-gradient(from 35deg, transparent 10% 10%, #22c55e 20% 50%, transparent 70% 100%)",
                }}
            >
                <div className="rounded-full bg-black w-full h-full flex items-center justify-center">
                    <img
                        src={src || avatarImage}
                        alt={alt || "Avatar"}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
