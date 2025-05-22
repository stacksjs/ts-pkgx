/**
 * Generated from pkgx.dev data
 */
export const qhullorgPackage = {
  programs: [
    "qconvex",
    "qdelaunay",
    "qhalf",
    "qhull",
    "qvoronoi",
    "rbox",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "8.0.2",
  ] as const,
  name: "qhull.org" as const,
  domain: "qhull.org" as const,
  description: "Package information for qhull.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +qhull.org -- $SHELL -i" as const,
}

export type QhullorgPackage = typeof qhullorgPackage
