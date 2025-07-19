import { TailwindColor } from "@/utils/enums/tailwindColor";

function getTagColorClasses(color: TailwindColor): string {
  switch (color) {
    case TailwindColor.Amber:
      return "bg-amber-200 text-amber-800";
    case TailwindColor.Blue:
      return "bg-blue-200 text-blue-800";
    case TailwindColor.Cyan:
      return "bg-cyan-200 text-cyan-800";
    case TailwindColor.Emerald:
      return "bg-emerald-200 text-emerald-800";
    case TailwindColor.Fuchsia:
      return "bg-fuchsia-200 text-fuchsia-800";
    case TailwindColor.Gray:
      return "bg-gray-200 text-gray-800";
    case TailwindColor.Green:
      return "bg-green-200 text-green-800";
    case TailwindColor.Indigo:
      return "bg-indigo-200 text-indigo-800";
    case TailwindColor.Lime:
      return "bg-lime-200 text-lime-800";
    case TailwindColor.Neutral:
      return "bg-neutral-200 text-neutral-800";
    case TailwindColor.Orange:
      return "bg-orange-200 text-orange-800";
    case TailwindColor.Pink:
      return "bg-pink-200 text-pink-800";
    case TailwindColor.Purple:
      return "bg-purple-200 text-purple-800";
    case TailwindColor.Red:
      return "bg-red-200 text-red-800";
    case TailwindColor.Rose:
      return "bg-rose-200 text-rose-800";
    case TailwindColor.Sky:
      return "bg-sky-200 text-sky-800";
    case TailwindColor.Slate:
      return "bg-slate-200 text-slate-800";
    case TailwindColor.Stone:
      return "bg-stone-200 text-stone-800";
    case TailwindColor.Teal:
      return "bg-teal-200 text-teal-800";
    case TailwindColor.Violet:
      return "bg-violet-200 text-violet-800";
    case TailwindColor.Yellow:
      return "bg-yellow-200 text-yellow-800";
    case TailwindColor.Zinc:
      return "bg-zinc-200 text-zinc-800";
    default:
      return "bg-blue-200 text-blue-800";
  }
}

export { getTagColorClasses };
