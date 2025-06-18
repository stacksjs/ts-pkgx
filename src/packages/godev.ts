/**
 * **go.dev** - The Go programming language
 *
 * @domain `go.dev`
 * @programs `go`, `gofmt`
 * @version `1.24.4` (68 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +go.dev -- $SHELL -i`
 * @dependencies `openssl.org^1  # for ca-certificates`, `gnu.org/m4^1`, `go.dev`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.godev
 * console.log(pkg.name)        // "go.dev"
 * console.log(pkg.description) // "The Go programming language"
 * console.log(pkg.programs)    // ["go", "gofmt"]
 * console.log(pkg.versions[0]) // "1.24.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const godevPackage = {
  /**
   * The display name of this package.
   */
  name: 'go.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Go programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +go.dev -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go',
    'gofmt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1  # for ca-certificates',
    'gnu.org/m4^1',
    'go.dev',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.24.4',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.10',
    '1.23.9',
    '1.23.8',
    '1.23.7',
    '1.23.6',
    '1.23.5',
    '1.23.4',
    '1.23.3',
    '1.23.2',
    '1.23.1',
    '1.23.0',
    '1.22.12',
    '1.22.11',
    '1.22.10',
    '1.22.9',
    '1.22.8',
    '1.22.7',
    '1.22.6',
    '1.22.5',
    '1.22.4',
    '1.22.3',
    '1.22.2',
    '1.22.1',
    '1.22.0',
    '1.21.13',
    '1.21.12',
    '1.21.11',
    '1.21.10',
    '1.21.8',
    '1.21.7',
    '1.21.6',
    '1.21.5',
    '1.21.4',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.14',
    '1.20.13',
    '1.20.12',
    '1.20.11',
    '1.20.10',
    '1.20.9',
    '1.20.8',
    '1.20.7',
    '1.20.6',
    '1.20.5',
    '1.20.4',
    '1.20.3',
    '1.20.2',
    '1.20.1',
    '1.19.12',
    '1.19.11',
    '1.19.10',
    '1.19.9',
    '1.19.8',
    '1.19.5',
    '1.19.4',
    '1.19.3',
    '1.19.2',
    '1.18.10',
    '1.17.13',
    '1.16.15',
  ] as const,
  aliases: [] as const,
}

export type GodevPackage = typeof godevPackage
