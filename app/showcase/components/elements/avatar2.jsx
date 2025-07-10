"use client";
import { AngryWithFang, SmileTeethGap, Awe, Blank, Calm, Cheeky, Concerned, Smile, SmileBig } from "streamui-deps";

const avatarList = [
  AngryWithFang,
  SmileTeethGap,
  Awe,
  Blank,
  Calm,
  Cheeky,
  Concerned,
  SmileBig,
  Smile,
];

export default function RandomAvatar({ name = "User", size = 64, className = "", style = {} }) {
  const index = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatarList.length;
  const SelectedAvatar = avatarList[index];

  return (
    <div
      className="rounded-full overflow-hidden border border-neutral-400 shadow-lg dark:shadow-neutral-400 bg-white dark:bg-neutral-400 flex items-center justify-center"
      style={{ width: size, height: size, ...style }}
    >
      <SelectedAvatar className={`w-full h-full text-neutral-800 dark:text-black ${className}`} />
    </div>
  );
}