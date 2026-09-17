import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllFlatPageSlugs } from "@/data/editorial-pages";
import { getAllSchedulePortSlugs, getVerifiedMonthKeys } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath } from "@/lib/schedule-utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/guides",
    "/compare",
    "/port-guide",
    "/cruise-planner",
    "/ship-schedules",
    "/your-day-ashore",
    "/faq",
    "/about",
    "/contact",
    "/methodology",
    "/affiliate-disclosure",
  ];

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...getAllFlatPageSlugs().map((s) => `/${s}`),
    ...getAllSchedulePortSlugs().map((s) => `/ship-schedules/${s}`),
    ...getAllSchedulePortSlugs().flatMap((s) => SCHEDULE_YEARS.map((y) => portYearPath(s, y))),
    ...getAllSchedulePortSlugs().flatMap((s) =>
      getVerifiedMonthKeys(s).map((mk) => portMonthPath(s, mk)),
    ),
  ];

  const all = [...staticPages, ...dynamicPages];

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
