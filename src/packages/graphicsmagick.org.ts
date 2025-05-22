export const graphicsmagickorgPackage = {
  name: "gm" as const,
  domain: "graphicsmagick.org" as const,
  description: "Image processing tools collection" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/graphicsmagick.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) gm" as const,
  programs: [
    "gm",
  ] as const,
  companions: [] as const,
  dependencies: [
    "freetype.org",
    "github.com/jasper-software/jasper",
    "libjpeg-turbo.org",
    "jpeg.org/jpegxl",
    "libpng.org",
    "simplesystems.org/libtiff",
    "gnu.org/libtool",
    "littlecms.com>=2.0",
    "google.com/webp",
    "sourceware.org/bzip2",
    "gnome.org/libxml2",
    "zlib.net",
  ] as const,
  versions: [
    "1.3.45",
    "1.3.44",
    "1.3.43",
    "1.3.42",
    "1.3.40",
  ] as const,
  fullPath: "graphicsmagick.org" as const,
  aliases: [
    "gm",
  ] as const,
}

export type GraphicsmagickorgPackage = typeof graphicsmagickorgPackage
