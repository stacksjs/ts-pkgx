/**
 * **amp.rs** - pkgx package
 *
 * @domain `amp.rs`
 *
 * @install `launchpad install amp.rs`
 * @dependencies `zlib.net@1`, `libgit2.org@1`, `linux:openssl.org@1.1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amprs
 * console.log(pkg.name)        // "amp.rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amp-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amprsPackage = {
  /**
   * The display name of this package.
   */
  name: 'amp.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amp.rs' as const,
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
  installCommand: 'launchpad install amp.rs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'zlib.net@1',
    'libgit2.org@1',
    'linux:openssl.org@1.1',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +amp.rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install amp.rs' as const,
}

export type AmprsPackage = typeof amprsPackage
