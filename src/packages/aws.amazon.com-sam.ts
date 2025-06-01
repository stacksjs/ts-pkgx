/**
 * **aws.amazon.com-sam** - Go home.
 *
 * @domain `aws.amazon.com-sam`
 *
 * @install `pkgx aws.amazon.com-sam`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomsam
 * console.log(pkg.name)        // "aws.amazon.com-sam"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com-sam.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomsamPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/aws.amazon.com-sam/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com-sam' as const,
  fullPath: 'aws.amazon.com-sam' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aws.amazon.com-sam' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AwsamazoncomsamPackage = typeof awsamazoncomsamPackage
