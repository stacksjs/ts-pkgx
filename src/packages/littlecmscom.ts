/**
 * **littlecms.com** - Package from pantry: littlecms.com
 *
 * @domain `littlecms.com`
 *
 * @install `launchpad install littlecms.com`
 * @dependencies `simplesystems.org/libtiff^4`, `libjpeg-turbo.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.littlecmscom
 * console.log(pkg.name)        // "littlecms.com"
 * console.log(pkg.description) // "Package from pantry: littlecms.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/littlecms-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const littlecmscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'littlecms.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'littlecms.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: littlecms.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install littlecms.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +littlecms.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install littlecms.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'simplesystems.org/libtiff^4',
    'libjpeg-turbo.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/littlecms.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LittlecmscomPackage = typeof littlecmscomPackage
