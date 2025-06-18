/**
 * **halibut** - Yet another free document preparation system
 *
 * @domain `chiark.greenend.org.uk/halibut`
 * @programs `halibut`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install halibut`
 * @name `halibut`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.halibut
 * // Or access via domain
 * const samePkg = pantry.chiarkgreenendorgukhalibut
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "halibut"
 * console.log(pkg.description) // "Yet another free document preparation system"
 * console.log(pkg.programs)    // ["halibut"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk/halibut.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const halibutPackage = {
  /**
   * The display name of this package.
   */
  name: 'halibut' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chiark.greenend.org.uk/halibut' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Yet another free document preparation system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chiark.greenend.org.uk/halibut/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install halibut' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'halibut',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type HalibutPackage = typeof halibutPackage
