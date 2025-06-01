/**
 * **aws.amazon.com-cdk** - Go home.
 *
 * @domain `aws.amazon.com-cdk`
 *
 * @install `pkgx aws.amazon.com-cdk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomcdk
 * console.log(pkg.name)        // "aws.amazon.com-cdk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com-cdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomcdkPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/aws.amazon.com-cdk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com-cdk' as const,
  fullPath: 'aws.amazon.com-cdk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aws.amazon.com-cdk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AwsamazoncomcdkPackage = typeof awsamazoncomcdkPackage
