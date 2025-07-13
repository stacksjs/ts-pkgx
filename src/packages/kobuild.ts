/**
 * **ko** - Build and deploy Go applications on Kubernetes
 *
 * @domain `ko.build`
 * @programs `ko`
 * @version `0.18.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ko`
 * @name `ko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ko
 * // Or access via domain
 * const samePkg = pantry.kobuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ko"
 * console.log(pkg.description) // "Build and deploy Go applications on Kubernetes"
 * console.log(pkg.programs)    // ["ko"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ko-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koPackage = {
  /**
   * The display name of this package.
   */
  name: 'ko' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ko.build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Build and deploy Go applications on Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ko' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ko',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ko -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ko' as const,
}

export type KoPackage = typeof koPackage
