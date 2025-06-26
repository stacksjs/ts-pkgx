/**
 * **tinyxml2** - Package from pantry: leethomason.github.io/tinyxml2
 *
 * @domain `leethomason.github.io/tinyxml2`
 *
 * @install `launchpad install leethomason.github.io/tinyxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leethomasongithubiotinyxml2
 * console.log(pkg.name)        // "tinyxml2"
 * console.log(pkg.description) // "Package from pantry: leethomason.github.io/tiny..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leethomason-github-io/tinyxml2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leethomasongithubiotinyxml2Package = {
  /**
   * The display name of this package.
   */
  name: 'tinyxml2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leethomason.github.io/tinyxml2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: leethomason.github.io/tinyxml2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leethomason.github.io/tinyxml2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +leethomason.github.io/tinyxml2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install leethomason.github.io/tinyxml2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leethomason.github.io/tinyxml2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Leethomasongithubiotinyxml2Package = typeof leethomasongithubiotinyxml2Package
