/**
 * **parallel** - Package from pantry: gnu.org/parallel
 *
 * @domain `gnu.org/parallel`
 *
 * @install `launchpad install gnu.org/parallel`
 * @dependencies `perl.org@5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgparallel
 * console.log(pkg.name)        // "parallel"
 * console.log(pkg.description) // "Package from pantry: gnu.org/parallel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/parallel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgparallelPackage = {
  /**
   * The display name of this package.
   */
  name: 'parallel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/parallel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/parallel' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/parallel' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/parallel -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/parallel' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org@5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/parallel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgparallelPackage = typeof gnuorgparallelPackage
