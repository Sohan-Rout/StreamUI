"use client";
import { AngryFace, HappyFace, CoolFaceWithSunglasses, SurprisedFace, LaughingFace, SleepyFace, ThinkingFace, SmilingFace, CryingFace, NerdyFace } from "streamui-deps";

const avatarList = [
  AngryFace,
  HappyFace,
  CoolFaceWithSunglasses,
  SurprisedFace,
  LaughingFace,
  SleepyFace,
  ThinkingFace,
  SmilingFace,
  CryingFace,
  NerdyFace,
];

export default function RandomAvatar({ name = "User", size = 64 }) {
  const index = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatarList.length;
  const SelectedAvatar = avatarList[index];

  return (
    <div
      className="rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <SelectedAvatar className="w-full h-full" />
    </div>
  );
}