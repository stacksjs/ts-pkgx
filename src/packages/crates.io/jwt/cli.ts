/**
 * **crates.io/jwt-cli** - pkgx package
 *
 * @domain `crates.io/jwt/cli`
 *
 * @install `pkgx crates.io/jwt-cli`
 * @name `jwt-cli`
 * @aliases `crates.io/jwt-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiojwtcli
 * // Or access via domain
 * const samePkg = pantry.cratesiojwtcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jwt-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/jwt/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiojwtcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jwt-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/jwt/cli' as const,
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
  installCommand: 'pkgx crates.io/jwt-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/jwt-cli',
  ] as const,
  fullPath: 'crates.io/jwt-cli' as const,
}

export type CratesiojwtcliPackage = typeof cratesiojwtcliPackage
