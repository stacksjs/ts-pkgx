/**
 * **ethaddrgen** - Custom Ethereum vanity address generator made in Rust
 *
 * @domain `github.com/Limeth/ethaddrgen`
 * @programs `ethaddrgen`
 * @version `1.0.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ethaddrgen`
 * @name `ethaddrgen`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ethaddrgen
 * // Or access via domain
 * const samePkg = pantry.githubcomlimethethaddrgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ethaddrgen"
 * console.log(pkg.description) // "Custom Ethereum vanity address generator made i..."
 * console.log(pkg.programs)    // ["ethaddrgen"]
 * console.log(pkg.versions[0]) // "1.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Limeth/ethaddrgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ethaddrgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'ethaddrgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Limeth/ethaddrgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Custom Ethereum vanity address generator made in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Limeth/ethaddrgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ethaddrgen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ethaddrgen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EthaddrgenPackage = typeof ethaddrgenPackage
