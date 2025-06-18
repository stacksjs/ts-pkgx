/**
 * **pinniped** - Pinniped is the easy, secure way to log in to your Kubernetes clusters.
 *
 * @domain `pinniped.dev`
 * @programs `pinniped`
 * @version `0.39.0` (14 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pinniped-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) pinniped`
 * @name `pinniped`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pinniped
 * // Or access via domain
 * const samePkg = pantry.pinnipeddev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pinniped"
 * console.log(pkg.description) // "Pinniped is the easy, secure way to log in to y..."
 * console.log(pkg.programs)    // ["pinniped"]
 * console.log(pkg.versions[0]) // "0.39.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pinniped-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pinnipedPackage = {
  /**
   * The display name of this package.
   */
  name: 'pinniped' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pinniped.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pinniped is the easy, secure way to log in to your Kubernetes clusters.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pinniped.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pinniped' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pinniped',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'pinniped.dev' as const,
}

export type PinnipedPackage = typeof pinnipedPackage
