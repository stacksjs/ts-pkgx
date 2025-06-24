/**
 * **fury.co** - Package from pantry: fury.co
 *
 * @domain `fury.co`
 *
 * @install `launchpad install fury.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.furyco
 * console.log(pkg.name)        // "fury.co"
 * console.log(pkg.description) // "Package from pantry: fury.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fury-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const furycoPackage = {
  /**
   * The display name of this package.
   */
  name: 'fury.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fury.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fury.co' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fury.co' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fury.co -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fury.co' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fury.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FurycoPackage = typeof furycoPackage
