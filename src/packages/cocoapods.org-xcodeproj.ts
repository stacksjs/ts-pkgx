export const cocoapodsorgxcodeprojPackage = {
  name: "xcodeproj" as const,
  domain: "cocoapods.org/xcodeproj" as const,
  description: "Create and modify Xcode projects from Ruby." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cocoapods.org/xcodeproj/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) xcodeproj" as const,
  programs: [
    "xcodeproj",
  ] as const,
  companions: [] as const,
  dependencies: [
    "ruby-lang.org~3.2",
    "rubygems.org^3",
  ] as const,
  versions: [
    "1.27.0",
  ] as const,
  fullPath: "cocoapods.org/xcodeproj" as const,
  aliases: [
    "xcodeproj",
  ] as const,
}

export type CocoapodsorgxcodeprojPackage = typeof cocoapodsorgxcodeprojPackage
