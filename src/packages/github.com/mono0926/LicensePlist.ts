/**
 * **LicensePlist** - Package from pantry: github.com/mono0926/LicensePlist
 *
 * @domain `github.com/mono0926/LicensePlist`
 *
 * @install `launchpad install github.com/mono0926/LicensePlist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommono0926licenseplist
 * console.log(pkg.name)        // "LicensePlist"
 * console.log(pkg.description) // "Package from pantry: github.com/mono0926/Licens..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mono0926/LicensePlist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommono0926licenseplistPackage = {
  /**
   * The display name of this package.
   */
  name: 'LicensePlist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mono0926/LicensePlist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mono0926/LicensePlist' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mono0926/LicensePlist' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mono0926/LicensePlist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mono0926/LicensePlist' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mono0926/LicensePlist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommono0926licenseplistPackage = typeof githubcommono0926licenseplistPackage
