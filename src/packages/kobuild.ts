/**
 * **ko.build** - Package from pantry: ko.build
 *
 * @domain `ko.build`
 *
 * @install `launchpad install ko.build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kobuild
 * console.log(pkg.name)        // "ko.build"
 * console.log(pkg.description) // "Package from pantry: ko.build"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ko-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kobuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'ko.build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ko.build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ko.build' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ko.build' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ko.build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ko.build' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KobuildPackage = typeof kobuildPackage
