/**
 * **ansible.com/ansible-lint** - pkgx package
 *
 * @domain `ansible.com/ansible/lint`
 *
 * @install `pkgx ansible.com/ansible-lint`
 * @name `ansible-lint`
 * @aliases `ansible.com/ansible-lint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ansiblecomansiblelint
 * // Or access via domain
 * const samePkg = pantry.ansiblecomansiblelint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ansible-lint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com/ansible/lint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblecomansiblelintPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible-lint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com/ansible/lint' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ansible.com/ansible-lint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ansible.com/ansible-lint',
  ] as const,
  fullPath: 'ansible.com/ansible-lint' as const,
}

export type AnsiblecomansiblelintPackage = typeof ansiblecomansiblelintPackage
