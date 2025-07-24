/**
 * **ansible-lint** - Package from pantry: ansible.com/ansible-lint
 *
 * @domain `ansible.com/ansible-lint`
 *
 * @install `launchpad install ansible.com/ansible-lint`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ansiblecomansiblelint
 * console.log(pkg.name)        // "ansible-lint"
 * console.log(pkg.description) // "Package from pantry: ansible.com/ansible-lint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com/ansible-lint.md
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
  domain: 'ansible.com/ansible-lint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ansible.com/ansible-lint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ansible.com/ansible-lint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ansible.com/ansible-lint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ansible.com/ansible-lint' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ansible.com/ansible-lint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AnsiblecomansiblelintPackage = typeof ansiblecomansiblelintPackage
