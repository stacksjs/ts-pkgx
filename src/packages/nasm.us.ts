/**
 * **nasm.us** - A cross-platform x86 assembler with an Intel-like syntax
 *
 * @domain `nasm.us`
 * @programs `nasm`, `ndisasm`
 * @version `2.16.3` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/nasm-us.md
 *
 * @install `sh <(curl https://pkgx.sh) +nasm.us -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nasmus
 * console.log(pkg.name)        // "nasm.us"
 * console.log(pkg.description) // "A cross-platform x86 assembler with an Intel-li..."
 * console.log(pkg.programs)    // ["nasm", "ndisasm"]
 * console.log(pkg.versions[0]) // "2.16.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nasm-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nasmusPackage = {
  /**
   * The display name of this package.
   */
  name: 'nasm.us' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nasm.us' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform x86 assembler with an Intel-like syntax' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +nasm.us -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nasm',
    'ndisasm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.16.3',
    '2.16.2',
    '2.15.5',
  ] as const,
  aliases: [] as const,
  fullPath: 'nasm.us' as const,
}

export type NasmusPackage = typeof nasmusPackage
