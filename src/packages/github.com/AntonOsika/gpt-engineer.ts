/**
 * **GPT Engineer** - Platform to experiment with the AI Software Engineer. Terminal based. NOTE: Very different from https://gptengineer.app
 *
 * @domain `github.com/AntonOsika/gpt-engineer`
 * @programs `gpte`, `gpt-engineer`
 * @version `0.3.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/AntonOsika/gpt-engineer -- $SHELL -i`
 * @name `GPT Engineer`
 * @aliases `gpt engineer`, `AntonOsika/gpt-engineer`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.GPTEngineer
 * // Or access via domain
 * const samePkg = pantry.githubcomantonosikagptengineer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "GPT Engineer"
 * console.log(pkg.description) // "Platform to experiment with the AI Software Eng..."
 * console.log(pkg.programs)    // ["gpte", "gpt-engineer"]
 * console.log(pkg.versions[0]) // "0.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AntonOsika/gpt-engineer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gPTEngineerPackage = {
  /**
   * The display name of this package.
   */
  name: 'GPT Engineer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AntonOsika/gpt-engineer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Platform to experiment with the AI Software Engineer. Terminal based. NOTE: Very different from https://gptengineer.app' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AntonOsika/gpt-engineer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/AntonOsika/gpt-engineer -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gpte',
    'gpt-engineer',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.1',
    '0.3.0',
    '0.2.9',
    '0.2.7',
    '0.2.5',
    '0.2.4',
    '0.2.3',
    '0.2.1',
    '0.0.9',
    '0.0.8',
    '0.0.7',
    '0.0.6',
    '0.0.5',
    '0.0.4',
    '0.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gpt engineer',
    'AntonOsika/gpt-engineer',
  ] as const,
  fullPath: 'github.com/AntonOsika/gpt-engineer' as const,
}

export type GPTEngineerPackage = typeof gPTEngineerPackage
