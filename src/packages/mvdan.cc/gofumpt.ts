/**
 * **gofumpt** - A stricter gofmt
 *
 * @domain `mvdan.cc/gofumpt`
 * @programs `gofumpt`
 * @version `0.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gofumpt`
 * @name `gofumpt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gofumpt
 * // Or access via domain
 * const samePkg = pantry.mvdanccgofumpt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gofumpt"
 * console.log(pkg.description) // "A stricter gofmt"
 * console.log(pkg.programs)    // ["gofumpt"]
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc/gofumpt.md
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
  domain: 'mvdan.cc/gofumpt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A stricter gofmt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/gofumpt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gofumpt' as const,
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
    '0.8.0',
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GofumptPackage = typeof gofumptPackage
