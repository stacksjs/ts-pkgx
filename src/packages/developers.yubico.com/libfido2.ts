/**
 * **fido2** - Provides library functionality for FIDO2, including communication with a device over USB or NFC.
 *
 * @domain `developers.yubico.com/libfido2`
 * @programs `fido2-assert`, `fido2-cred`, `fido2-token`
 * @version `1.16.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +developers.yubico.com/libfido2 -- $SHELL -i`
 * @aliases `fido2`
 * @dependencies `github.com/PJK/libcbor@0`, `openssl.org@1`, `zlib.net@1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fido2
 * // Or access via domain
 * const samePkg = pantry.developersyubicocomlibfido2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libfido2"
 * console.log(pkg.description) // "Provides library functionality for FIDO2, inclu..."
 * console.log(pkg.programs)    // ["fido2-assert", "fido2-cred", ...]
 * console.log(pkg.versions[0]) // "1.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com/libfido2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fido2Package = {
  /**
   * The display name of this package.
   */
  name: 'libfido2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developers.yubico.com/libfido2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Provides library functionality for FIDO2, including communication with a device over USB or NFC.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/libfido2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +developers.yubico.com/libfido2 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fido2-assert',
    'fido2-cred',
    'fido2-token',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/PJK/libcbor@0',
    'openssl.org@1',
    'zlib.net@1',
    'linux:systemd.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.0',
    '1.15.0',
    '1.14.0',
    '1.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fido2',
  ] as const,
}

export type Fido2Package = typeof fido2Package
