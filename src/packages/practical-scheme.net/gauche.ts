/**
 * **gauche** - R7RS Scheme implementation, developed to be a handy script interpreter
 *
 * @domain `practical-scheme.net/gauche`
 * @programs `gauche-cesconv`, `gauche-config`, `gauche-install`, `gauche-package`, `gosh`
 * @version `0.9.15` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +practical-scheme.net/gauche -- $SHELL -i`
 * @aliases `gauche`
 * @dependencies `curl.se/ca-certs>=2023`, `github.com/Mbed-TLS/mbedtls^3.5`, `github.com/besser82/libxcrypt^4.4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gauche
 * // Or access via domain
 * const samePkg = pantry.practicalschemenetgauche
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "practical-scheme.net/gauche"
 * console.log(pkg.description) // "R7RS Scheme implementation, developed to be a h..."
 * console.log(pkg.programs)    // ["gauche-cesconv", "gauche-config", ...]
 * console.log(pkg.versions[0]) // "0.9.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/practical-scheme-net/gauche.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gauchePackage = {
  /**
   * The display name of this package.
   */
  name: 'practical-scheme.net/gauche' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'practical-scheme.net/gauche' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'R7RS Scheme implementation, developed to be a handy script interpreter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/practical-scheme.net/gauche/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +practical-scheme.net/gauche -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gauche-cesconv',
    'gauche-config',
    'gauche-install',
    'gauche-package',
    'gosh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs>=2023',
    'github.com/Mbed-TLS/mbedtls^3.5',
    'github.com/besser82/libxcrypt^4.4',
    'zlib.net^1.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.15',
    '0.9.14',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gauche',
  ] as const,
  fullPath: 'practical-scheme.net/gauche' as const,
}

export type GauchePackage = typeof gauchePackage
