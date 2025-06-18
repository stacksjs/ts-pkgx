/**
 * **pod2man** - pkgx package
 *
 * @domain `eyrie.org/eagle/podlators`
 * @programs `pod2man`, `pod2text`
 * @version `5.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +eyrie.org/eagle/podlators -- $SHELL -i`
 * @name `pod2man`
 * @aliases `eagle/podlators`
 * @dependencies `perl.org^5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pod2man
 * // Or access via domain
 * const samePkg = pantry.eyrieorgeaglepodlators
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pod2man"
 * console.log(pkg.programs)    // ["pod2man", "pod2text"]
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eyrie-org/eagle/podlators.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pod2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'pod2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eyrie.org/eagle/podlators' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eyrie.org/eagle/podlators/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +eyrie.org/eagle/podlators -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pod2man',
    'pod2text',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'eagle/podlators',
  ] as const,
  fullPath: 'eyrie.org/eagle/podlators' as const,
}

export type Pod2manPackage = typeof pod2manPackage
