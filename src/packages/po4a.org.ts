export const po4aorgPackage = {
  name: "po4a.org" as const,
  domain: "po4a.org" as const,
  description: "Maintain the translations of your documentation with ease  (PO for anything)" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +po4a.org -- $SHELL -i" as const,
  programs: [
    "msguntypot",
    "po4a",
    "po4a-display-man",
    "po4a-display-pod",
    "po4a-gettextize",
    "po4a-normalize",
    "po4a-updatepo",
    "podselect",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gettext^0.22",
    "perl.org^5.22",
    "gnome.org/libxslt^1.1",
  ] as const,
  versions: [
    "0.73.0",
    "0.72.0",
    "0.71.0",
    "0.70.0",
    "0.69.0",
  ] as const,
  fullPath: "po4a.org" as const,
}

export type Po4aorgPackage = typeof po4aorgPackage
