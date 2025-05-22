export const qhullorgPackage = {
  name: "qhull.org" as const,
  domain: "qhull.org" as const,
  description: "Qhull development for www.qhull.org -- Qhull 2020.2 (8.1-alpha1) at https://github.com/qhull/qhull/wiki" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +qhull.org -- $SHELL -i" as const,
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
  fullPath: "qhull.org" as const,
}

export type QhullorgPackage = typeof qhullorgPackage
