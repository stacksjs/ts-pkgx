/**
 * **openinterpreter.com** - Package from pantry: openinterpreter.com
 *
 * @domain `openinterpreter.com`
 *
 * @install `launchpad install openinterpreter.com`
 * @dependencies `python.org>=3.10<3.12`, `github.com/mattrobenolt/jinja2-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openinterpretercom
 * console.log(pkg.name)        // "openinterpreter.com"
 * console.log(pkg.description) // "Package from pantry: openinterpreter.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openinterpreter-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openinterpretercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openinterpreter.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openinterpreter.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openinterpreter.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openinterpreter.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openinterpreter.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openinterpreter.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'github.com/mattrobenolt/jinja2-cli',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openinterpreter.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpeninterpretercomPackage = typeof openinterpretercomPackage
