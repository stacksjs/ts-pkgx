/**
 * **docuum** - Docuum performs least recently used (LRU) eviction of Docker images. 🗑️
 *
 * @domain `crates.io/docuum`
 * @programs `docuum`
 * @version `0.25.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) docuum`
 * @name `docuum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.docuum
 * // Or access via domain
 * const samePkg = pantry.cratesiodocuum
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "docuum"
 * console.log(pkg.description) // "Docuum performs least recently used (LRU) evict..."
 * console.log(pkg.programs)    // ["docuum"]
 * console.log(pkg.versions[0]) // "0.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/docuum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docuumPackage = {
  /**
   * The display name of this package.
   */
  name: 'docuum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/docuum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Docuum performs least recently used (LRU) eviction of Docker images. 🗑️' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/docuum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) docuum' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docuum',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.25.0',
    '0.24.0',
    '0.23.1',
    '0.23.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/docuum' as const,
}

export type DocuumPackage = typeof docuumPackage
