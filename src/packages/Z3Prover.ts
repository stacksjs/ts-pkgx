/**
 * **Z3Prover** - pkgx package
 *
 * @domain `github.com/Z3Prover`
 *
 * @install `pkgx github.com/Z3Prover`
 * @name `Z3Prover`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Z3Prover
 * // Or access via domain
 * const samePkg = pantry.githubcomz3prover
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Z3Prover"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Z3Prover.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const z3ProverPackage = {
  /**
   * The display name of this package.
   */
  name: 'Z3Prover' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Z3Prover' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Z3Prover' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Z3Prover' as const,
}

export type Z3ProverPackage = typeof z3ProverPackage
