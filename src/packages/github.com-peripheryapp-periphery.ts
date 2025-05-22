export const githubcomperipheryappperipheryPackage = {
  name: "periphery" as const,
  domain: "github.com/peripheryapp/periphery" as const,
  description: "A tool to identify unused code in Swift projects." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peripheryapp/periphery/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) periphery" as const,
  programs: [
    "periphery",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se",
    "gnome.org/libxml2",
  ] as const,
  versions: [
    "3.1.0",
    "3.0.3",
    "3.0.2",
    "3.0.1",
    "3.0.0",
    "2.21.2",
  ] as const,
  fullPath: "github.com/peripheryapp/periphery" as const,
  aliases: [
    "periphery",
    "peripheryapp/periphery",
  ] as const,
}

export type GithubcomperipheryappperipheryPackage = typeof githubcomperipheryappperipheryPackage
