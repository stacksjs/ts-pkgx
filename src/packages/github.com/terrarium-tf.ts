/**
 * **terrarium** - terraform wrapper which transparent loads env files for stacks
 *
 * @domain `github.com/terrarium-tf`
 * @programs `terrarium`
 * @version `1.3.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install terrarium`
 * @aliases `terrarium`
 * @dependencies `terraform.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.terrarium
 * // Or access via domain
 * const samePkg = pantry.githubcomterrariumtf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terrarium-tf"
 * console.log(pkg.description) // "terraform wrapper which transparent loads env f..."
 * console.log(pkg.programs)    // ["terrarium"]
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terrarium-tf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terrariumPackage = {
  /**
   * The display name of this package.
   */
  name: 'terrarium-tf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terrarium-tf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'terraform wrapper which transparent loads env files for stacks' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/terrarium-tf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install terrarium' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'terrarium',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'terraform.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'terrarium',
  ] as const,
}

export type TerrariumPackage = typeof terrariumPackage
