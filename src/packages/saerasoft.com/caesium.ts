/**
 * **caesium** - Package from pantry: saerasoft.com/caesium
 *
 * @domain `saerasoft.com/caesium`
 *
 * @install `launchpad install saerasoft.com/caesium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.saerasoftcomcaesium
 * console.log(pkg.name)        // "caesium"
 * console.log(pkg.description) // "Package from pantry: saerasoft.com/caesium"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/saerasoft-com/caesium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const saerasoftcomcaesiumPackage = {
  /**
   * The display name of this package.
   */
  name: 'caesium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'saerasoft.com/caesium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: saerasoft.com/caesium' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install saerasoft.com/caesium' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +saerasoft.com/caesium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install saerasoft.com/caesium' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/saerasoft.com/caesium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SaerasoftcomcaesiumPackage = typeof saerasoftcomcaesiumPackage
