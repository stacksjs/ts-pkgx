/**
 * **vale** - :pencil: A markup-aware linter for prose built with speed and extensibility in mind.
 *
 * @domain `vale.sh`
 * @programs `vale`
 * @version `3.11.2` (44 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/vale-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) vale`
 * @name `vale`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vale
 * // Or access via domain
 * const samePkg = pantry.valesh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vale"
 * console.log(pkg.description) // ":pencil: A markup-aware linter for prose built ..."
 * console.log(pkg.programs)    // ["vale"]
 * console.log(pkg.versions[0]) // "3.11.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vale-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valePackage = {
  /**
   * The display name of this package.
   */
  name: 'vale' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vale.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':pencil: A markup-aware linter for prose built with speed and extensibility in mind.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vale.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) vale' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vale',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.11.2',
    '3.11.1',
    '3.11.0',
    '3.10.0',
    '3.9.6',
    '3.9.5',
    '3.9.4',
    '3.9.3',
    '3.9.2',
    '3.9.1',
    '3.9.0',
    '3.8.0',
    '3.7.1',
    '3.7.0',
    '3.6.1',
    '3.6.0',
    '3.5.0',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.1',
    '3.3.0',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.0',
    '3.0.7',
    '3.0.6',
    '3.0.5',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.30.0',
    '2.29.7',
    '2.29.6',
    '2.29.5',
    '2.29.4',
    '2.29.3',
    '2.29.2',
    '2.29.1',
    '2.29.0',
    '2.28.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'vale.sh' as const,
}

export type ValePackage = typeof valePackage
