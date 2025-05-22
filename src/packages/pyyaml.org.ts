export const pyyamlorgPackage = {
  name: "pyyaml.org" as const,
  domain: "pyyaml.org" as const,
  description: "Canonical source repository for LibYAML" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pyyaml.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +pyyaml.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.2.5",
  ] as const,
  fullPath: "pyyaml.org" as const,
}

export type PyyamlorgPackage = typeof pyyamlorgPackage
