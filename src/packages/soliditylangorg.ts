/**
 * **soliditylang.org** - Package from pantry: soliditylang.org
 *
 * @domain `soliditylang.org`
 *
 * @install `launchpad install soliditylang.org`
 * @dependencies `boost.org~1.84`, `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soliditylangorg
 * console.log(pkg.name)        // "soliditylang.org"
 * console.log(pkg.description) // "Package from pantry: soliditylang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soliditylang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soliditylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'soliditylang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soliditylang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: soliditylang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install soliditylang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +soliditylang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install soliditylang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org~1.84',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soliditylang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SoliditylangorgPackage = typeof soliditylangorgPackage
