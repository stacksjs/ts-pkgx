/**
 * Generated from pkgx.dev data
 */
export const rebar3orgPackage = {
  programs: [
    "rebar3",
  ] as const,
  companions: [] as const,
  dependencies: [
    "erlang.org",
  ] as const,
  versions: [
    "3.24.0",
    "3.23.0",
  ] as const,
  name: "rebar3.org" as const,
  domain: "rebar3.org" as const,
  description: "Package information for rebar3.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rebar3.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rebar3.org -- $SHELL -i" as const,
}

export type Rebar3orgPackage = typeof rebar3orgPackage
