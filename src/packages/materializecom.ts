/**
 * **materialize.com** - Package from pantry: materialize.com
 *
 * @domain `materialize.com`
 *
 * @install `launchpad install materialize.com`
 * @dependencies `openssl.org^1.1`, `rust-lang.org>=1.56`, `rust-lang.org/cargo`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.materializecom
 * console.log(pkg.name)        // "materialize.com"
 * console.log(pkg.description) // "Package from pantry: materialize.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/materialize-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const materializecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'materialize.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'materialize.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: materialize.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install materialize.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
    'cmake.org^3',
    'perl.org',
    'gnu.org/automake',
    'gnu.org/autoconf',
    'protobuf.dev^26.1',
    'gnu.org/make',
    'git-scm.org^2',
    'llvm.org<17',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/materialize.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MaterializecomPackage = typeof materializecomPackage
