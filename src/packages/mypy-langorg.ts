/**
 * **mypy-lang.org** - Package from pantry: mypy-lang.org
 *
 * @domain `mypy-lang.org`
 *
 * @install `launchpad install mypy-lang.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mypylangorg
 * console.log(pkg.name)        // "mypy-lang.org"
 * console.log(pkg.description) // "Package from pantry: mypy-lang.org"
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
  description: 'Package from pantry: mypy-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mypy-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mypy-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mypy-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mypy-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MypylangorgPackage = typeof mypylangorgPackage
