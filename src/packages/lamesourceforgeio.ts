/**
 * **lame.sourceforge.io** - Package from pantry: lame.sourceforge.io
 *
 * @domain `lame.sourceforge.io`
 *
 * @install `launchpad install lame.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lamesourceforgeio
 * console.log(pkg.name)        // "lame.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: lame.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lame-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lamesourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lame.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lame.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lame.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lame.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lame.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lame.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lame.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LamesourceforgeioPackage = typeof lamesourceforgeioPackage
