/**
 * **practical-scheme.net/gauche** - pkgx package
 *
 * @domain `practical-scheme.net/gauche`
 * @version `0.9.15` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install practical-scheme.net/gauche`
 * @dependencies `curl.se/ca-certs>=2023`, `github.com/Mbed-TLS/mbedtls^3.5`, `github.com/besser82/libxcrypt^4.4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.practicalschemenetgauche
 * console.log(pkg.name)        // "practical-scheme.net/gauche"
 * console.log(pkg.versions[0]) // "0.9.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/practical-scheme-net/gauche.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const practicalschemenetgauchePackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/practical-scheme.net/gauche/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install practical-scheme.net/gauche' as const,
  programs: [] as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +practical-scheme.net/gauche -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install practical-scheme.net/gauche' as const,
}

export type PracticalschemenetgauchePackage = typeof practicalschemenetgauchePackage
