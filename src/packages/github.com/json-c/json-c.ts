/**
 * **json-c** - Package from pantry: github.com/json-c/json-c
 *
 * @domain `github.com/json-c/json-c`
 *
 * @install `launchpad install github.com/json-c/json-c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjsoncjsonc
 * console.log(pkg.name)        // "json-c"
 * console.log(pkg.description) // "Package from pantry: github.com/json-c/json-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/json-c/json-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjsoncjsoncPackage = {
  /**
   * The display name of this package.
   */
  name: 'json-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/json-c/json-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/json-c/json-c' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/json-c/json-c' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/json-c/json-c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/json-c/json-c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/json-c/json-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjsoncjsoncPackage = typeof githubcomjsoncjsoncPackage
