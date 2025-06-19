/**
 * **dav1d** - AV1 decoder targeted to be small and fast
 *
 * @domain `code.videolan.org/videolan/dav1d`
 * @programs `dav1d`
 * @version `1.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dav1d`
 * @name `dav1d`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dav1d
 * // Or access via domain
 * const samePkg = pantry.codevideolanorgvideolandav1d
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dav1d"
 * console.log(pkg.description) // "AV1 decoder targeted to be small and fast"
 * console.log(pkg.programs)    // ["dav1d"]
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/videolan/dav1d.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dav1dPackage = {
  /**
   * The display name of this package.
   */
  name: 'dav1d' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/videolan/dav1d' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'AV1 decoder targeted to be small and fast' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/videolan/dav1d/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install dav1d' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dav1d',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Dav1dPackage = typeof dav1dPackage
