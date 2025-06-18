/**
 * **gofumpt** - A stricter gofmt
 *
 * @domain `github.com/mvdan/gofumpt`
 * @programs `gofumpt`
 * @version `0.7.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gofumpt`
 * @name `gofumpt`
 * @aliases `mvdan/gofumpt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gofumpt
 * // Or access via domain
 * const samePkg = pantry.githubcommvdangofumpt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gofumpt"
 * console.log(pkg.description) // "A stricter gofmt"
 * console.log(pkg.programs)    // ["gofumpt"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mvdan/gofumpt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gofumptPackage = {
  /**
   * The display name of this package.
   */
  name: 'gofumpt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mvdan/gofumpt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A stricter gofmt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mvdan/gofumpt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gofumpt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gofumpt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
    '0.6.0',
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mvdan/gofumpt',
  ] as const,
  fullPath: 'github.com/mvdan/gofumpt' as const,
}

export type GofumptPackage = typeof gofumptPackage
