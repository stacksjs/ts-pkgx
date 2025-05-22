/**
 * Generated from pkgx.dev data
 */
export const phpmyadminnetPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "php.net",
  ] as const,
  versions: [
    "5.2.2",
    "5.2.1",
  ] as const,
  name: "phpmyadmin.net" as const,
  domain: "phpmyadmin.net" as const,
  description: "Package information for phpmyadmin.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/phpmyadmin.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +phpmyadmin.net -- $SHELL -i" as const,
}

export type PhpmyadminnetPackage = typeof phpmyadminnetPackage
