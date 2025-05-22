/**
 * Generated from pkgx.dev data
 */
export const mpvioPackage = {
  programs: [
    "mpv",
  ] as const,
  companions: [] as const,
  dependencies: [
    "ffmpeg.org",
    "libjpeg-turbo.org@2",
    "libarchive.org@3",
    "github.com/libass/libass^0.17",
    "videolan.org/libplacebo@6",
    "littlecms.com@2",
    "luajit.org@2",
    "mujs.com@1",
    "freedesktop.org/uchardet@0",
    "vapoursynth.com@66",
    "yt-dlp.org",
    "linuxalsa-project.org/alsa-lib@1github.com/adah1972/libunibreak@6",
    "alsa-project.org/alsa-lib@1",
    "github.com/adah1972/libunibreak@6",
  ] as const,
  versions: [
    "0.40.0",
    "0.39.0",
    "0.38.0",
  ] as const,
  name: "mpv.io" as const,
  domain: "mpv.io" as const,
  description: "Package information for mpv.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mpv.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mpv.io -- $SHELL -i" as const,
}

export type MpvioPackage = typeof mpvioPackage
