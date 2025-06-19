/**
 * **tldr** - C command-line client for tldr pages 📚
 *
 * @domain `tldr.sh`
 * @programs `tldr`
 * @version `1.6.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tldr`
 * @aliases `tldr`
 * @dependencies `linux:sourceware.org/bzip2^1`, `curl.se` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tldr
 * // Or access via domain
 * const samePkg = pantry.tldrsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tldr.sh"
 * console.log(pkg.description) // "C command-line client for tldr pages 📚"
 * console.log(pkg.programs)    // ["tldr"]
 * console.log(pkg.versions[0]) // "1.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tldr-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tldrPackage = {
  /**
   * The display name of this package.
   */
  name: 'tldr.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tldr.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C command-line client for tldr pages 📚' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tldr' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tldr',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:sourceware.org/bzip2^1',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.1',
    '1.6.0',
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tldr',
  ] as const,
}

export type TldrPackage = typeof tldrPackage
