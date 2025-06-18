/**
 * **fsrx** - 📚 flow state reading in the terminal
 *
 * @domain `crates.io/fsrx`
 * @programs `fsrx`
 * @version `1.0.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fsrx.md
 *
 * @install `sh <(curl https://pkgx.sh) fsrx`
 * @name `fsrx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fsrx
 * // Or access via domain
 * const samePkg = pantry.cratesiofsrx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fsrx"
 * console.log(pkg.description) // "📚 flow state reading in the terminal"
 * console.log(pkg.programs)    // ["fsrx"]
 * console.log(pkg.versions[0]) // "1.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fsrx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fsrxPackage = {
  /**
   * The display name of this package.
   */
  name: 'fsrx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fsrx' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📚 flow state reading in the terminal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fsrx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) fsrx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fsrx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/fsrx' as const,
}

export type FsrxPackage = typeof fsrxPackage
