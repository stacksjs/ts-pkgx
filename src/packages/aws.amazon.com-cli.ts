/**
 * **aws.amazon.com-cli** - Go home.
 *
 * @domain `aws.amazon.com-cli`
 *
 * @install `pkgx aws.amazon.com-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomcli
 * console.log(pkg.name)        // "aws.amazon.com-cli"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomcliPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/aws.amazon.com-cli/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com-cli' as const,
  fullPath: 'aws.amazon.com-cli' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aws.amazon.com-cli' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AwsamazoncomcliPackage = typeof awsamazoncomcliPackage
