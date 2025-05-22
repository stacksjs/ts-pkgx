/**
 * Generated from pkgx.dev data
 */
export const mcmcjagssourceforgeioPackage = {
  programs: [
    "jags",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gcc",
    "linuxnetlib.org/lapack^3",
    "netlib.org/lapack^3",
  ] as const,
  versions: [
    "4.3.2",
  ] as const,
  aliases: [
    "jags",
  ] as const,
  name: "mcmc/jags.sourceforge.io" as const,
  domain: "mcmc/jags.sourceforge.io" as const,
  description: "Package information for mcmc/jags.sourceforge.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mcmc/jags.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mcmc/jags.sourceforge.io -- $SHELL -i" as const,
}

export type McmcjagssourceforgeioPackage = typeof mcmcjagssourceforgeioPackage
