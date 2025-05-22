/**
 * Generated from pkgx.dev data
 */
export const openinterpretercomPackage = {
  programs: [
    "interpreter",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.10<3.12",
    "github.com/mattrobenolt/jinja2-cli",
  ] as const,
  versions: [
    "0.4.0",
    "0.2.1",
    "0.2.0",
    "0.1.18",
    "0.1.17",
    "0.1.16",
    "0.1.15",
    "0.1.14",
    "0.1.13",
    "0.1.12",
    "0.1.11",
    "0.1.9",
    "0.1.8",
    "0.1.7",
    "0.1.6",
    "0.1.5",
    "0.1.4",
    "0.1.3",
    "0.1.2",
    "0.1.1",
    "0.1.0",
    "0.0.297",
  ] as const,
  aliases: [
    "open-interpreter",
  ] as const,
  name: "openinterpreter.com" as const,
  domain: "openinterpreter.com" as const,
  description: "Package information for openinterpreter.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openinterpreter.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openinterpreter.com -- $SHELL -i" as const,
}

export type OpeninterpretercomPackage = typeof openinterpretercomPackage
