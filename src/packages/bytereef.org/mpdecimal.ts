/**
 * **mpdecimal** - Package from pantry: bytereef.org/mpdecimal
 *
 * @domain `bytereef.org/mpdecimal`
 *
 * @install `launchpad install bytereef.org/mpdecimal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bytereeforgmpdecimal
 * console.log(pkg.name)        // "mpdecimal"
 * console.log(pkg.description) // "Package from pantry: bytereef.org/mpdecimal"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytereef-org/mpdecimal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bytereeforgmpdecimalPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpdecimal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytereef.org/mpdecimal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bytereef.org/mpdecimal' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bytereef.org/mpdecimal' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bytereef.org/mpdecimal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bytereef.org/mpdecimal' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bytereef.org/mpdecimal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BytereeforgmpdecimalPackage = typeof bytereeforgmpdecimalPackage
