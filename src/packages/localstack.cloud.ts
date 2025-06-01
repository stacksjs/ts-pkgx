/**
 * **localstack.cloud** - Go home.
 *
 * @domain `localstack.cloud`
 *
 * @install `pkgx localstack.cloud`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localstackcloud
 * console.log(pkg.name)        // "localstack.cloud"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localstack-cloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localstackcloudPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/localstack.cloud/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localstack.cloud' as const,
  fullPath: 'localstack.cloud' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx localstack.cloud' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LocalstackcloudPackage = typeof localstackcloudPackage
