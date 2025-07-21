/**
 * **xz** - Package from pantry: tukaani.org/xz
 *
 * @domain `tukaani.org/xz`
 *
 * @install `launchpad install tukaani.org/xz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tukaaniorgxz
 * console.log(pkg.name)        // "xz"
 * console.log(pkg.description) // "Package from pantry: tukaani.org/xz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tukaani-org/xz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tukaaniorgxzPackage = {
  /**
   * The display name of this package.
   */
  name: 'xz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tukaani.org/xz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tukaani.org/xz' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tukaani.org/xz' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tukaani.org/xz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tukaani.org/xz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tukaani.org/xz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TukaaniorgxzPackage = typeof tukaaniorgxzPackage
