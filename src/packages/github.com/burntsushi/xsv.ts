/**
 * **xsv** - A fast CSV command line toolkit written in Rust.
 *
 * @domain `github.com/burntsushi/xsv`
 * @programs `xsv`
 * @version `0.13.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xsv`
 * @name `xsv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xsv
 * // Or access via domain
 * const samePkg = pantry.githubcomburntsushixsv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xsv"
 * console.log(pkg.description) // "A fast CSV command line toolkit written in Rust."
 * console.log(pkg.programs)    // ["xsv"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/burntsushi/xsv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xsvPackage = {
  /**
   * The display name of this package.
   */
  name: 'xsv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/burntsushi/xsv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast CSV command line toolkit written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/burntsushi/xsv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xsv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xsv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type XsvPackage = typeof xsvPackage
