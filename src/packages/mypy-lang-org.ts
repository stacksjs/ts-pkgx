/**
 * **mypy-lang.org** - Experimental optional static type checker for Python
 *
 * @domain `mypy-lang.org`
 * @programs `mypy`, `mypyc`, `dmypy`
 * @version `1.16.1` (25 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +mypy-lang.org -- $SHELL -i`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mypylangorg
 * console.log(pkg.name)        // "mypy-lang.org"
 * console.log(pkg.description) // "Experimental optional static type checker for P..."
 * console.log(pkg.programs)    // ["mypy", "mypyc", ...]
 * console.log(pkg.versions[0]) // "1.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mypy-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mypylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mypy-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mypy-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Experimental optional static type checker for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mypy-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mypy-lang.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mypy',
    'mypyc',
    'dmypy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.1',
    '1.16.0',
    '1.15.0',
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.1',
    '1.12.0',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.1',
    '1.10.0',
    '1.9.0',
    '1.8.0',
    '1.7.1',
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.1',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.0',
    '1.2.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'mypy-lang.org' as const,
}

export type MypylangorgPackage = typeof mypylangorgPackage
