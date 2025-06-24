/**
 * **libproxy** - Package from pantry: libproxy.github.io/libproxy
 *
 * @domain `libproxy.github.io/libproxy`
 *
 * @install `launchpad install libproxy.github.io/libproxy`
 * @dependencies `duktape.org`, `gnome.org/glib`, `curl.se`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libproxygithubiolibproxy
 * console.log(pkg.name)        // "libproxy"
 * console.log(pkg.description) // "Package from pantry: libproxy.github.io/libproxy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libproxy-github-io/libproxy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libproxygithubiolibproxyPackage = {
  /**
   * The display name of this package.
   */
  name: 'libproxy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libproxy.github.io/libproxy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libproxy.github.io/libproxy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libproxy.github.io/libproxy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libproxy.github.io/libproxy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libproxy.github.io/libproxy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'duktape.org',
    'gnome.org/glib',
    'curl.se',
    'linux:freedesktop.org/dbus',
    'linux:llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libproxy.github.io/libproxy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibproxygithubiolibproxyPackage = typeof libproxygithubiolibproxyPackage
