/**
 * **alpaca.cpp** - Package from pantry: github.com/antimatter15/alpaca.cpp
 *
 * @domain `github.com/antimatter15/alpaca.cpp`
 *
 * @install `launchpad install github.com/antimatter15/alpaca.cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomantimatter15alpacacpp
 * console.log(pkg.name)        // "alpaca.cpp"
 * console.log(pkg.description) // "Package from pantry: github.com/antimatter15/al..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antimatter15/alpaca-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomantimatter15alpacacppPackage = {
  /**
   * The display name of this package.
   */
  name: 'alpaca.cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antimatter15/alpaca.cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/antimatter15/alpaca.cpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/antimatter15/alpaca.cpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/antimatter15/alpaca.cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/antimatter15/alpaca.cpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/antimatter15/alpaca.cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomantimatter15alpacacppPackage = typeof githubcomantimatter15alpacacppPackage
