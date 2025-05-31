/**
 * **ko** - Build and deploy Go applications on Kubernetes
 *
 * @domain `ko.build`
 * @programs `ko`
 * @version `0.18.0` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ko-build.md
 * @install `sh <(curl https://pkgx.sh) ko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kobuild
 * console.log(pkg.name)        // "ko"
 * console.log(pkg.description) // "Build and deploy Go applications on Kubernetes"
 * console.log(pkg.programs)    // ["ko"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ko-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kobuildPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ko' as const,
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
  fullPath: 'ko.build' as const,
  aliases: [] as const,
}

export type KobuildPackage = typeof kobuildPackage
