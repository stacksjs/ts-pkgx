/**
 * **Arkade** - Open Source Marketplace For Developer Tools
 *
 * @domain `arkade.dev`
 * @programs `arkade`
 * @version `0.11.50` (46 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install arkade.dev`
 * @homepage https://blog.alexellis.io/kubernetes-marketplace-two-year-update/
 * @dependencies `go.dev@^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.arkadedev
 * console.log(pkg.name)        // "Arkade"
 * console.log(pkg.description) // "Open Source Marketplace For Developer Tools"
 * console.log(pkg.programs)    // ["arkade"]
 * console.log(pkg.versions[0]) // "0.11.50" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arkade-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arkadedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'Arkade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arkade.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open Source Marketplace For Developer Tools' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/arkade.dev/package.yml' as const,
  homepageUrl: 'https://blog.alexellis.io/kubernetes-marketplace-two-year-update/' as const,
  githubUrl: 'https://github.com/alexellis/arkade' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install arkade.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +arkade.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install arkade.dev' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'arkade',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.50',
    '0.11.48',
    '0.11.47',
    '0.11.46',
    '0.11.45',
    '0.11.44',
    '0.11.43',
    '0.11.41',
    '0.11.40',
    '0.11.39',
    '0.11.38',
    '0.11.37',
    '0.11.36',
    '0.11.35',
    '0.11.34',
    '0.11.33',
    '0.11.32',
    '0.11.31',
    '0.11.30',
    '0.11.29',
    '0.11.28',
    '0.11.27',
    '0.11.26',
    '0.11.25',
    '0.11.24',
    '0.11.23',
    '0.11.22',
    '0.11.21',
    '0.11.20',
    '0.11.19',
    '0.11.16',
    '0.11.15',
    '0.11.14',
    '0.11.13',
    '0.11.12',
    '0.11.11',
    '0.11.10',
    '0.11.9',
    '0.11.6',
    '0.11.5',
    '0.11.4',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.23',
    '0.10.22',
  ] as const,
  aliases: [] as const,
}

export type ArkadedevPackage = typeof arkadedevPackage
