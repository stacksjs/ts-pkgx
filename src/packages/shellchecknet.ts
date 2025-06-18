/**
 * **shellcheck.net** - Package from pantry: shellcheck.net
 *
 * @domain `shellcheck.net`
 *
 * @install `launchpad install shellcheck.net`
 * @dependencies `sourceware.org/libffi^3`, `haskell.org^9`, `haskell.org/cabal^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.shellchecknet
 * console.log(pkg.name)        // "shellcheck.net"
 * console.log(pkg.description) // "Package from pantry: shellcheck.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/shellcheck-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shellchecknetPackage = {
  /**
   * The display name of this package.
   */
  name: 'shellcheck.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'shellcheck.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: shellcheck.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install shellcheck.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/libffi^3',
    'haskell.org^9',
    'haskell.org/cabal^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/shellcheck.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ShellchecknetPackage = typeof shellchecknetPackage
