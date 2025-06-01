/**
 * **doctave** - A batteries-included developer documentation site generator
 *
 * @domain `doctave.com`
 * @programs `doctave`
 * @version `0.4.2` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/doctave-com.md
 *
 * @install `sh <(curl https://pkgx.sh) doctave`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.doctavecom
 * console.log(pkg.name)        // "doctave"
 * console.log(pkg.description) // "A batteries-included developer documentation si..."
 * console.log(pkg.programs)    // ["doctave"]
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doctave-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doctavecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'doctave' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doctave.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A batteries-included developer documentation site generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doctave.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) doctave' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'doctave',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
  ] as const,
  fullPath: 'doctave.com' as const,
  aliases: [] as const,
}

export type DoctavecomPackage = typeof doctavecomPackage
