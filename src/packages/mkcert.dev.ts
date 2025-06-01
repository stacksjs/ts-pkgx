/**
 * **mkcert** - A simple zero-config tool to make locally trusted development certificates with any names you'd like.
 *
 * @domain `mkcert.dev`
 * @programs `mkcert`
 * @version `1.4.4` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mkcert-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) mkcert`
 * @name `mkcert`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mkcert
 * // Or access via domain
 * const samePkg = pantry.mkcertdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mkcert"
 * console.log(pkg.description) // "A simple zero-config tool to make locally trust..."
 * console.log(pkg.programs)    // ["mkcert"]
 * console.log(pkg.versions[0]) // "1.4.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkcert-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkcertPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkcert' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkcert.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple zero-config tool to make locally trusted development certificates with any names you\'d like.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mkcert.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mkcert' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mkcert',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mkcert.dev' as const,
}

export type MkcertPackage = typeof mkcertPackage
