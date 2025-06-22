/**
 * **uchardet** - Package from pantry: freedesktop.org/uchardet
 *
 * @domain `freedesktop.org/uchardet`
 *
 * @install `launchpad install freedesktop.org/uchardet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporguchardet
 * console.log(pkg.name)        // "uchardet"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/uchardet"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/uchardet.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporguchardetPackage = {
  /**
   * The display name of this package.
   */
  name: 'uchardet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/uchardet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/uchardet' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/uchardet' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/uchardet -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/uchardet' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/uchardet/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporguchardetPackage = typeof freedesktoporguchardetPackage
