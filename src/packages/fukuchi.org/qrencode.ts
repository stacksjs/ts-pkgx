/**
 * **qrencode** - Package from pantry: fukuchi.org/qrencode
 *
 * @domain `fukuchi.org/qrencode`
 *
 * @install `launchpad install fukuchi.org/qrencode`
 * @dependencies `libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fukuchiorgqrencode
 * console.log(pkg.name)        // "qrencode"
 * console.log(pkg.description) // "Package from pantry: fukuchi.org/qrencode"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fukuchi-org/qrencode.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fukuchiorgqrencodePackage = {
  /**
   * The display name of this package.
   */
  name: 'qrencode' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fukuchi.org/qrencode' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fukuchi.org/qrencode' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fukuchi.org/qrencode' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fukuchi.org/qrencode -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fukuchi.org/qrencode' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fukuchi.org/qrencode/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FukuchiorgqrencodePackage = typeof fukuchiorgqrencodePackage
