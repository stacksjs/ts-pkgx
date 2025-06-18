/**
 * **diffutils** - File comparison utilities
 *
 * @domain `gnu.org/diffutils`
 * @programs `cmp`, `diff`, `diff3`, `sdiff`
 * @version `3.12.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/diffutils -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgdiffutils
 * console.log(pkg.name)        // "diffutils"
 * console.log(pkg.description) // "File comparison utilities"
 * console.log(pkg.programs)    // ["cmp", "diff", ...]
 * console.log(pkg.versions[0]) // "3.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/diffutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgdiffutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'diffutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/diffutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'File comparison utilities' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/diffutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/diffutils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cmp',
    'diff',
    'diff3',
    'sdiff',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.0',
    '3.11.0',
    '3.2.0',
  ] as const,
  aliases: [] as const,
}

export type GnuorgdiffutilsPackage = typeof gnuorgdiffutilsPackage
