/**
 * **apktool.org** - Package from pantry: apktool.org
 *
 * @domain `apktool.org`
 *
 * @install `launchpad install apktool.org`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apktoolorg
 * console.log(pkg.name)        // "apktool.org"
 * console.log(pkg.description) // "Package from pantry: apktool.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apktool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apktoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'apktool.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apktool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apktool.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apktool.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apktool.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apktool.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApktoolorgPackage = typeof apktoolorgPackage
