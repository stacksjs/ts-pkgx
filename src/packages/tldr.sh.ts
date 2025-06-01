/**
 * **tldr** - C command-line client for tldr pages 📚
 *
 * @domain `tldr.sh`
 * @programs `tldr`
 * @version `1.6.1` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/tldr-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) tldr`
 * @dependencies `linuxsourceware.org/bzip2^1`, `sourceware.org/bzip2^1`, `libzip.org^1.9.2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tldrsh
 * console.log(pkg.name)        // "tldr"
 * console.log(pkg.description) // "C command-line client for tldr pages 📚"
 * console.log(pkg.programs)    // ["tldr"]
 * console.log(pkg.versions[0]) // "1.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tldr-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tldrshPackage = {
  /**
   * The display name of this package.
   */
  name: 'tldr' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tldr' as const,
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
   */
  dependencies: [
    'linuxsourceware.org/bzip2^1',
    'sourceware.org/bzip2^1',
    'libzip.org^1.9.2',
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
  fullPath: 'tldr.sh' as const,
  aliases: [] as const,
}

export type TldrshPackage = typeof tldrshPackage
