export const mcmcjagssourceforgeioPackage = {
  name: "jags" as const,
  domain: "mcmc-jags.sourceforge.io" as const,
  description: "Just Another Gibbs Sampler for Bayesian MCMC simulation" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mcmc-jags.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) jags" as const,
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
  fullPath: "mcmc-jags.sourceforge.io" as const,
  aliases: [
    "jags",
  ] as const,
}

export type McmcjagssourceforgeioPackage = typeof mcmcjagssourceforgeioPackage
