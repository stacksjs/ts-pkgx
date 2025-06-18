/**
 * **keep** - The open-source AIOps and alert management platform
 *
 * @domain `keephq.dev`
 * @programs `keep`
 * @version `0.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) keep`
 * @name `keep`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.keep
 * // Or access via domain
 * const samePkg = pantry.keephqdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "keep"
 * console.log(pkg.description) // "The open-source AIOps and alert management plat..."
 * console.log(pkg.programs)    // ["keep"]
 * console.log(pkg.versions[0]) // "0.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/keephq-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keepPackage = {
  /**
   * The display name of this package.
   */
  name: 'keep' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'keephq.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The open-source AIOps and alert management platform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/keephq.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) keep' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'keep',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'keephq.dev' as const,
}

export type KeepPackage = typeof keepPackage
