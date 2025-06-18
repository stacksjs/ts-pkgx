/**
 * **cw** - The best way to tail AWS CloudWatch Logs from your terminal
 *
 * @domain `lucagrulla.com/cw`
 * @programs `cw`
 * @version `4.1.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/lucagrulla-com/cw.md
 *
 * @install `sh <(curl https://pkgx.sh) cw`
 * @name `cw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cw
 * // Or access via domain
 * const samePkg = pantry.lucagrullacomcw
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cw"
 * console.log(pkg.description) // "The best way to tail AWS CloudWatch Logs from y..."
 * console.log(pkg.programs)    // ["cw"]
 * console.log(pkg.versions[0]) // "4.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lucagrulla-com/cw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cwPackage = {
  /**
   * The display name of this package.
   */
  name: 'cw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lucagrulla.com/cw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The best way to tail AWS CloudWatch Logs from your terminal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lucagrulla.com/cw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cw',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'lucagrulla.com/cw' as const,
}

export type CwPackage = typeof cwPackage
