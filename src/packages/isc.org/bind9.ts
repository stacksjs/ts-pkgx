/**
 * **bind9** - Package from pantry: isc.org/bind9
 *
 * @domain `isc.org/bind9`
 *
 * @install `launchpad install isc.org/bind9`
 * @dependencies `gnome.org/libxml2@2.13`, `nghttp2.org@1.57`, `libuv.org@1.49`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.iscorgbind9
 * console.log(pkg.name)        // "bind9"
 * console.log(pkg.description) // "Package from pantry: isc.org/bind9"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/isc-org/bind9.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iscorgbind9Package = {
  /**
   * The display name of this package.
   */
  name: 'bind9' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'isc.org/bind9' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: isc.org/bind9' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install isc.org/bind9' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +isc.org/bind9 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install isc.org/bind9' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnome.org/libxml2@2.13',
    'nghttp2.org@1.57',
    'libuv.org@1.49',
    'liburcu.org@0.15',
    'openldap.org/liblmdb@0.9',
    'openssl.org@1.1',
    'gnu.org/readline@8.2',
    'github.com/json-c/json-c@0.18',
    'gnu.org/libidn2@2.3',
    'jemalloc.net@5',
    'mesonbuild.com@1',
    'ninja-build.org',
    'linux:kernel.org/libcap',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/isc.org/bind9/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Iscorgbind9Package = typeof iscorgbind9Package
