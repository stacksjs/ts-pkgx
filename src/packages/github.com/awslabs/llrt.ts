/**
 * **llrt** - LLRT (Low Latency Runtime) is an experimental, lightweight JavaScript runtime designed to address the growing demand for fast and efficient Serverless applications.
 *
 * @domain `github.com/awslabs/llrt`
 * @programs `llrt`
 * @version `0.6.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install llrt`
 * @name `llrt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.llrt
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabsllrt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "llrt"
 * console.log(pkg.description) // "LLRT (Low Latency Runtime) is an experimental, ..."
 * console.log(pkg.programs)    // ["llrt"]
 * console.log(pkg.versions[0]) // "0.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/llrt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llrtPackage = {
  /**
   * The display name of this package.
   */
  name: 'llrt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/llrt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LLRT (Low Latency Runtime) is an experimental, lightweight JavaScript runtime designed to address the growing demand for fast and efficient Serverless applications.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/llrt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/awslabs/llrt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install llrt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'llrt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.0',
    '0.5.1',
    '0.5.0',
    '0.4.0',
    '0.3.0',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.15',
    '0.1.14',
    '0.1.13',
    '0.1.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) llrt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install llrt' as const,
}

export type LlrtPackage = typeof llrtPackage
