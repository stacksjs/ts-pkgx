/**
 * **acorn.io/acorn-cli** - pkgx package
 *
 * @domain `acorn.io/acorn/cli`
 *
 * @install `pkgx acorn.io/acorn-cli`
 * @name `acorn-cli`
 * @aliases `acorn.io/acorn-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.acornioacorncli
 * // Or access via domain
 * const samePkg = pantry.acornioacorncli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "acorn-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/acorn-io/acorn/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const acornioacorncliPackage = {
  /**
   * The display name of this package.
   */
  name: 'acorn-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'acorn.io/acorn/cli' as const,
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
  installCommand: 'pkgx acorn.io/acorn-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'acorn.io/acorn-cli',
  ] as const,
  fullPath: 'acorn.io/acorn-cli' as const,
}

export type AcornioacorncliPackage = typeof acornioacorncliPackage
