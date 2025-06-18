/**
 * **charliermarsh/ruff** - An extremely fast Python linter and code formatter, written in Rust.
 *
 * @domain `github.com/charliermarsh/ruff`
 * @version `0.12.0` (151 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/charliermarsh/ruff -- $SHELL -i`
 * @aliases `charliermarsh/ruff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.charliermarshruff
 * // Or access via domain
 * const samePkg = pantry.githubcomcharliermarshruff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/charliermarsh/ruff"
 * console.log(pkg.description) // "An extremely fast Python linter and code format..."
 * console.log(pkg.versions[0]) // "0.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/charliermarsh/ruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charliermarshruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/charliermarsh/ruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/charliermarsh/ruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An extremely fast Python linter and code formatter, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/charliermarsh/ruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/charliermarsh/ruff -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.0',
    '0.11.13',
    '0.11.12',
    '0.11.11',
    '0.11.10',
    '0.11.9',
    '0.11.8',
    '0.11.7',
    '0.11.6',
    '0.11.5',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.10',
    '0.9.9',
    '0.9.8',
    '0.9.7',
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.10',
    '0.4.9',
    '0.4.8',
    '0.4.7',
    '0.4.6',
    '0.4.5',
    '0.4.4',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.7',
    '0.3.6',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.15',
    '0.1.14',
    '0.1.13',
    '0.1.12',
    '0.1.11',
    '0.1.10',
    '0.1.9',
    '0.1.8',
    '0.1.7',
    '0.1.6',
    '0.1.5',
    '0.1.4',
    '0.1.3',
    '0.1.2',
    '0.1.1',
    '0.1.0',
    '0.0.292',
    '0.0.291',
    '0.0.290',
    '0.0.289',
    '0.0.288',
    '0.0.287',
    '0.0.286',
    '0.0.285',
    '0.0.284',
    '0.0.283',
    '0.0.282',
    '0.0.281',
    '0.0.280',
    '0.0.279',
    '0.0.278',
    '0.0.277',
    '0.0.276',
    '0.0.275',
    '0.0.274',
    '0.0.273',
    '0.0.272',
    '0.0.271',
    '0.0.270',
    '0.0.269',
    '0.0.268',
    '0.0.267',
    '0.0.266',
    '0.0.265',
    '0.0.264',
    '0.0.263',
    '0.0.262',
    '0.0.261',
    '0.0.260',
    '0.0.259',
    '0.0.258',
    '0.0.257',
    '0.0.256',
    '0.0.255',
    '0.0.254',
    '0.0.253',
    '0.0.252',
    '0.0.251',
    '0.0.250',
    '0.0.249',
    '0.0.248',
    '0.0.247',
    '0.0.246',
    '0.0.245',
    '0.0.244',
    '0.0.243',
    '0.0.242',
    '0.0.241',
    '0.0.240',
    '0.0.239',
    '0.0.238',
    '0.0.237',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'charliermarsh/ruff',
  ] as const,
  fullPath: 'github.com/charliermarsh/ruff' as const,
}

export type CharliermarshruffPackage = typeof charliermarshruffPackage
