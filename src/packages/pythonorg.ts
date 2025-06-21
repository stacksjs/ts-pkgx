/**
 * **python.org** - Package from pantry: python.org
 *
 * @domain `python.org`
 *
 * @install `launchpad install python.org`
 * @dependencies `zlib.net@1`, `sourceware.org/bzip2@1`, `openssl.org^1.1`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonorg
 * console.log(pkg.name)        // "python.org"
 * console.log(pkg.description) // "Package from pantry: python.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'python.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: python.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install python.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
    'sourceware.org/bzip2@1',
    'openssl.org^1.1',
    'sourceware.org/libffi@3',
    'libexpat.github.io@2',
    'bytereef.org/mpdecimal@2',
    'tukaani.org/xz@5',
    'sqlite.org@3',
    'gnu.org/readline@8',
    'invisible-island.net/ncurses@6',
    'tcl-lang.org@8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PythonorgPackage = typeof pythonorgPackage
