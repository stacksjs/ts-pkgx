/**
 * **jinja2-cli** - Package from pantry: github.com/mattrobenolt/jinja2-cli
 *
 * @domain `github.com/mattrobenolt/jinja2-cli`
 *
 * @install `launchpad install github.com/mattrobenolt/jinja2-cli`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommattrobenoltjinja2cli
 * console.log(pkg.name)        // "jinja2-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/mattrobenolt/ji..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mattrobenolt/jinja2-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommattrobenoltjinja2cliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jinja2-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mattrobenolt/jinja2-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mattrobenolt/jinja2-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mattrobenolt/jinja2-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mattrobenolt/jinja2-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mattrobenolt/jinja2-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mattrobenolt/jinja2-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommattrobenoltjinja2cliPackage = typeof githubcommattrobenoltjinja2cliPackage
