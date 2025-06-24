/**
 * **clisp.org** - Package from pantry: clisp.org
 *
 * @domain `clisp.org`
 *
 * @install `launchpad install clisp.org`
 * @dependencies `gnu.org/libsigsegv^2.14`, `gnu.org/readline^8.2`, `github.com/besser82/libxcrypt^4.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.clisporg
 * console.log(pkg.name)        // "clisp.org"
 * console.log(pkg.description) // "Package from pantry: clisp.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clisp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clisporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'clisp.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clisp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: clisp.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install clisp.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +clisp.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install clisp.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libsigsegv^2.14',
    'gnu.org/readline^8.2',
    'github.com/besser82/libxcrypt^4.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/clisp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ClisporgPackage = typeof clisporgPackage
