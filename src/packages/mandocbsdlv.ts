/**
 * **mandoc.bsd.lv** - Package from pantry: mandoc.bsd.lv
 *
 * @domain `mandoc.bsd.lv`
 *
 * @install `launchpad install mandoc.bsd.lv`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mandocbsdlv
 * console.log(pkg.name)        // "mandoc.bsd.lv"
 * console.log(pkg.description) // "Package from pantry: mandoc.bsd.lv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mandoc-bsd-lv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandocbsdlvPackage = {
  /**
   * The display name of this package.
   */
  name: 'mandoc.bsd.lv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mandoc.bsd.lv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mandoc.bsd.lv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mandoc.bsd.lv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mandoc.bsd.lv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mandoc.bsd.lv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mandoc.bsd.lv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MandocbsdlvPackage = typeof mandocbsdlvPackage
