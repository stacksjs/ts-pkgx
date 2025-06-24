/**
 * **z3** - Package from pantry: github.com/Z3Prover/z3
 *
 * @domain `github.com/Z3Prover/z3`
 *
 * @install `launchpad install github.com/Z3Prover/z3`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomz3proverz3
 * console.log(pkg.name)        // "z3"
 * console.log(pkg.description) // "Package from pantry: github.com/Z3Prover/z3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Z3Prover/z3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomz3proverz3Package = {
  /**
   * The display name of this package.
   */
  name: 'z3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Z3Prover/z3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Z3Prover/z3' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Z3Prover/z3' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Z3Prover/z3 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Z3Prover/z3' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Z3Prover/z3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomz3proverz3Package = typeof githubcomz3proverz3Package
