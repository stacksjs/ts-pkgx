/**
 * **jwt** - A super fast CLI tool to decode and encode JWTs built in Rust
 *
 * @domain `crates.io/jwt-cli`
 * @programs `jwt`
 * @version `6.2.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) jwt`
 * @name `jwt`
 * @aliases `jwt-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jwt
 * // Or access via domain
 * const samePkg = pantry.cratesiojwtcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jwt"
 * console.log(pkg.description) // "A super fast CLI tool to decode and encode JWTs..."
 * console.log(pkg.programs)    // ["jwt"]
 * console.log(pkg.versions[0]) // "6.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/jwt-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jwtPackage = {
  /**
   * The display name of this package.
   */
  name: 'jwt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/jwt-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A super fast CLI tool to decode and encode JWTs built in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/jwt-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) jwt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jwt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.2.0',
    '6.1.1',
    '6.1.0',
    '6.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jwt-cli',
  ] as const,
  fullPath: 'crates.io/jwt-cli' as const,
}

export type JwtPackage = typeof jwtPackage
