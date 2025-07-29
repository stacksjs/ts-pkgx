/**
 * **libcvt** - Package from pantry: x.org/libcvt
 *
 * @domain `x.org/libcvt`
 *
 * @install `launchpad install x.org/libcvt`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibcvt
 * console.log(pkg.name)        // "libcvt"
 * console.log(pkg.description) // "Package from pantry: x.org/libcvt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libcvt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibcvtPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcvt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libcvt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/libcvt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/libcvt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/libcvt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/libcvt' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libcvt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorglibcvtPackage = typeof xorglibcvtPackage
