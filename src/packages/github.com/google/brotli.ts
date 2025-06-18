/**
 * **brotli** - Generic-purpose lossless compression algorithm by Google
 *
 * @domain `github.com/google/brotli`
 * @programs `brotli`
 * @version `1.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) brotli`
 * @name `brotli`
 * @aliases `google/brotli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.brotli
 * // Or access via domain
 * const samePkg = pantry.githubcomgooglebrotli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "brotli"
 * console.log(pkg.description) // "Generic-purpose lossless compression algorithm ..."
 * console.log(pkg.programs)    // ["brotli"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/brotli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brotliPackage = {
  /**
   * The display name of this package.
   */
  name: 'brotli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/brotli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generic-purpose lossless compression algorithm by Google' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/brotli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) brotli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'brotli',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
    '1.0.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'google/brotli',
  ] as const,
  fullPath: 'github.com/google/brotli' as const,
}

export type BrotliPackage = typeof brotliPackage
