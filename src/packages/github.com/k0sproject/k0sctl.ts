/**
 * **k0sctl** - A bootstrapping and management tool for k0s clusters.
 *
 * @domain `github.com/k0sproject/k0sctl`
 * @programs `k0sctl`
 * @version `0.25.1` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install k0sctl`
 * @name `k0sctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.k0sctl
 * // Or access via domain
 * const samePkg = pantry.githubcomk0sprojectk0sctl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "k0sctl"
 * console.log(pkg.description) // "A bootstrapping and management tool for k0s clu..."
 * console.log(pkg.programs)    // ["k0sctl"]
 * console.log(pkg.versions[0]) // "0.25.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/k0sproject/k0sctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k0sctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'k0sctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/k0sproject/k0sctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A bootstrapping and management tool for k0s clusters.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/k0sproject/k0sctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install k0sctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'k0sctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.25.1',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.6',
    '0.19.4',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.8',
    '0.17.7',
    '0.17.6',
    '0.17.5',
    '0.17.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type K0sctlPackage = typeof k0sctlPackage
