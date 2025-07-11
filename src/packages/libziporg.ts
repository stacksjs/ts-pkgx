/**
 * **libzip.org** - Package from pantry: libzip.org
 *
 * @domain `libzip.org`
 *
 * @install `launchpad install libzip.org`
 * @dependencies `facebook.com/zstd>=1.5.0`, `darwin:sourceware.org/bzip2>=1.0.8`, `darwin:tukaani.org/xz>=5.2.7`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libziporg
 * console.log(pkg.name)        // "libzip.org"
 * console.log(pkg.description) // "Package from pantry: libzip.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libzip-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libziporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libzip.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libzip.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libzip.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libzip.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libzip.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libzip.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'facebook.com/zstd>=1.5.0',
    'darwin:sourceware.org/bzip2>=1.0.8',
    'darwin:tukaani.org/xz>=5.2.7',
    'darwin:zlib.net>=1.2.13',
    'linux:openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibziporgPackage = typeof libziporgPackage
