export const tcltkPackage = {
  name: "tcl.tk" as const,
  domain: "tcl.tk" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx tcl.tk" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "tcl.tk" as const,
}

export type TcltkPackage = typeof tcltkPackage
