/**
 * **libfido2** - Package from pantry: developers.yubico.com/libfido2
 *
 * @domain `developers.yubico.com/libfido2`
 *
 * @install `launchpad install developers.yubico.com/libfido2`
 * @dependencies `github.com/PJK/libcbor@0`, `openssl.org@1`, `zlib.net@1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.developersyubicocomlibfido2
 * console.log(pkg.name)        // "libfido2"
 * console.log(pkg.description) // "Package from pantry: developers.yubico.com/libf..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com/libfido2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developersyubicocomlibfido2Package = {
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
  description: 'Package from pantry: developers.yubico.com/libfido2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install developers.yubico.com/libfido2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +developers.yubico.com/libfido2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install developers.yubico.com/libfido2' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/libfido2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Developersyubicocomlibfido2Package = typeof developersyubicocomlibfido2Package
