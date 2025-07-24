/**
 * **rustls-ffi** - pkgx package
 *
 * @domain `crates.io/rustls-ffi`
 *
 * @install `launchpad install crates.io/rustls-ffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorustlsffi
 * console.log(pkg.name)        // "rustls-ffi"
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/rustls-ffi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rustls-ffi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rustls-ffi' as const,
}

export type CratesiorustlsffiPackage = typeof cratesiorustlsffiPackage
