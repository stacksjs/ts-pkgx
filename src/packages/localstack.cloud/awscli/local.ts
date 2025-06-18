/**
 * **localstack.cloud/awscli-local** - pkgx package
 *
 * @domain `localstack.cloud/awscli/local`
 *
 * @install `pkgx localstack.cloud/awscli-local`
 * @name `awscli-local`
 * @aliases `localstack.cloud/awscli-local`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.localstackcloudawsclilocal
 * // Or access via domain
 * const samePkg = pantry.localstackcloudawsclilocal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awscli-local"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localstack-cloud/awscli/local.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localstackcloudawsclilocalPackage = {
  /**
   * The display name of this package.
   */
  name: 'awscli-local' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localstack.cloud/awscli/local' as const,
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
  installCommand: 'pkgx localstack.cloud/awscli-local' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'localstack.cloud/awscli-local',
  ] as const,
  fullPath: 'localstack.cloud/awscli-local' as const,
}

export type LocalstackcloudawsclilocalPackage = typeof localstackcloudawsclilocalPackage
