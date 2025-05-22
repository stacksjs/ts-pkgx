/**
 * Generated from pkgx.dev data
 */
export const asciidoctororgPackage = {
  programs: [
    "asciidoctor",
  ] as const,
  companions: [] as const,
  dependencies: [
    "ruby-lang.org^3.1",
    "rubygems.org",
  ] as const,
  versions: [
    "2.0.23",
    "2.0.22",
    "2.0.21",
    "2.0.20",
    "2.0.19",
    "2.0.18",
  ] as const,
  name: "asciidoctor.org" as const,
  domain: "asciidoctor.org" as const,
  description: "Package information for asciidoctor.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/asciidoctor.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +asciidoctor.org -- $SHELL -i" as const,
}

export type AsciidoctororgPackage = typeof asciidoctororgPackage
