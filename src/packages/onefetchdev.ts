/**
 * **onefetch.dev** - pkgx package
 *
 * @domain `onefetch.dev`
 * @version `2.25.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install onefetch.dev`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.onefetchdev
 * console.log(pkg.name)        // "onefetch.dev"
 * console.log(pkg.versions[0]) // "2.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onefetch-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onefetchdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'onefetch.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onefetch.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install onefetch.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.25.0',
    '2.24.0',
    '2.23.1',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +onefetch.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install onefetch.dev' as const,
}

export type OnefetchdevPackage = typeof onefetchdevPackage
