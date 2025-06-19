/**
 * **proxy** - Library that provides automatic proxy configuration management
 *
 * @domain `libproxy.github.io/libproxy`
 * @programs `proxy`
 * @version `0.5.9` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install proxy`
 * @name `libproxy`
 * @aliases `proxy`
 * @dependencies `duktape.org`, `gnome.org/glib`, `curl.se`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.proxy
 * // Or access via domain
 * const samePkg = pantry.libproxygithubiolibproxy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libproxy"
 * console.log(pkg.description) // "Library that provides automatic proxy configura..."
 * console.log(pkg.programs)    // ["proxy"]
 * console.log(pkg.versions[0]) // "0.5.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libproxy-github-io/libproxy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const proxyPackage = {
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
  description: 'Library that provides automatic proxy configuration management' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libproxy.github.io/libproxy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install proxy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'proxy',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.9',
    '0.5.8',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'proxy',
  ] as const,
}

export type ProxyPackage = typeof proxyPackage
