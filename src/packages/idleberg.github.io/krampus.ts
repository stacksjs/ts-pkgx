/**
 * **krampus** - Package from pantry: idleberg.github.io/krampus
 *
 * @domain `idleberg.github.io/krampus`
 *
 * @install `launchpad install idleberg.github.io/krampus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.idleberggithubiokrampus
 * console.log(pkg.name)        // "krampus"
 * console.log(pkg.description) // "Package from pantry: idleberg.github.io/krampus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/idleberg-github-io/krampus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const idleberggithubiokrampusPackage = {
  /**
   * The display name of this package.
   */
  name: 'krampus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'idleberg.github.io/krampus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: idleberg.github.io/krampus' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install idleberg.github.io/krampus' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +idleberg.github.io/krampus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install idleberg.github.io/krampus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/idleberg.github.io/krampus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IdleberggithubiokrampusPackage = typeof idleberggithubiokrampusPackage
