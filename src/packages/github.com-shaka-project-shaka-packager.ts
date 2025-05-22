/**
 * Generated from pkgx.dev data
 */
export const githubcomshakaprojectshakapackagerPackage = {
  programs: [
    "packager",
    "mpd_generator",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxgnu.org/gcc/libstdcxx",
    "gnu.org/gcc/libstdcxx",
  ] as const,
  versions: [
    "3.4.2",
    "3.4.1",
    "3.4.0",
  ] as const,
  aliases: [
    "shaka-project/shaka-packager",
  ] as const,
  name: "github.com/shaka-project-shaka-packager" as const,
  domain: "github.com/shaka-project-shaka-packager" as const,
  description: "Package information for github.com/shaka-project-shaka-packager" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/shaka-project-shaka-packager/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +github.com/shaka-project-shaka-packager -- $SHELL -i" as const,
}

export type GithubcomshakaprojectshakapackagerPackage = typeof githubcomshakaprojectshakapackagerPackage
