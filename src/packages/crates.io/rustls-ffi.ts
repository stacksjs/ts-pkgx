/**
 * **rustls-ffi** - Use Rustls from any language
 *
 * @domain `crates.io/rustls-ffi`
 * @version `0.15.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +crates.io/rustls-ffi -- $SHELL -i`
 * @companions `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorustlsffi
 * console.log(pkg.name)        // "rustls-ffi"
 * console.log(pkg.description) // "Use Rustls from any language"
 * console.log(pkg.versions[0]) // "0.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rustls-ffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorustlsffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'rustls-ffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rustls-ffi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Use Rustls from any language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rustls-ffi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +crates.io/rustls-ffi -- $SHELL -i' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'curl.se/ca-certs',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.0',
    '0.14.1',
    '0.14.0',
    '0.13.0',
    '0.12.2',
    '0.12.1',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.1',
  ] as const,
  aliases: [] as const,
}

export type CratesiorustlsffiPackage = typeof cratesiorustlsffiPackage
