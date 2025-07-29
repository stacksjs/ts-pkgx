/**
 * **cJSON** - Package from pantry: github.com/DaveGamble/cJSON
 *
 * @domain `github.com/DaveGamble/cJSON`
 *
 * @install `launchpad install github.com/DaveGamble/cJSON`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdavegamblecjson
 * console.log(pkg.name)        // "cJSON"
 * console.log(pkg.description) // "Package from pantry: github.com/DaveGamble/cJSON"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaveGamble/cJSON.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdavegamblecjsonPackage = {
  /**
   * The display name of this package.
   */
  name: 'cJSON' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaveGamble/cJSON' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/DaveGamble/cJSON' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/DaveGamble/cJSON' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/DaveGamble/cJSON -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/DaveGamble/cJSON' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DaveGamble/cJSON/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdavegamblecjsonPackage = typeof githubcomdavegamblecjsonPackage
